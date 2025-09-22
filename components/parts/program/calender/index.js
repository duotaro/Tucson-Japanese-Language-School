"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useEffect, useState, useRef, useCallback, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useLocale } from '@/utils/locale'
import Title from '../../text/title'
import { SchaduleEntity } from '@/entity/scheduleEntity'
import { getSchoolYear, isWithinSchoolYear } from '@/utils/dateUtils'
import Section from '../../section'
import ImageOptimizer from '@/components/download/ImageOptimizer'
import Link from 'next/link'
import { ArrowDownOnSquareStackIcon, CalendarDaysIcon, ShareIcon } from '@heroicons/react/24/outline'
import { ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH, DOWNLOAD_IMAGE_EXTENSION } from '@/const'


// interface Event {
//   tile: string;
//   start: Date | string;
//   allday: boolean;
//   id: number;
// }
const renderEventContent = (eventInfo, locale) => {
  const { title, start, end, allDay, backgroubdColor } = eventInfo.event;

  // Null安全性のチェック
  if (!start) return <div className="custom-event text-white"><strong>{title}</strong></div>;

  const startDate = new Date(start)
  const endDate = end ? new Date(end) : null


  const isSingleDayEvent = !end || !endDate || startDate.toISOString().split('T')[0] === endDate.toISOString().split('T')[0];

  // console.log("------------------------------------------")
  // console.log(eventInfo)
  // console.log(isSingleDayEvent)
  // console.log(allDay)
  // console.log("------------------------------------------")

  return (
    <div className="custom-event  text-white">
      <strong className='mr-1'>{title}</strong>
      {/* {!isSingleDayEvent && (
        <p>{startDate.toLocaleDateString(locale, { month: 'short', day: 'numeric' })}-{endDate.toLocaleDateString(locale, { month: 'short', day: 'numeric' })}</p>
      )} */}
      {isSingleDayEvent && !allDay && start && end && (
        <p className=''>{start.toLocaleTimeString('en-US', {
          timeZone: 'America/Phoenix',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })}-{end.toLocaleTimeString('en-US', {
          timeZone: 'America/Phoenix',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        })} </p>
      )}
    </div>
  );
};

export default function Calender({files, list, locale="ja"}) {
  const calendarRef = useRef(null);
  const { json } = useLocale(locale)
  const schoolYear = getSchoolYear(locale)

  const selectDates = (start) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.select(start);
  };

  const [detailList, setDetailList] = useState([])

  const createDate = useCallback((date) => {
    // 日付文字列がYYYY-MM-DD形式の場合、タイムゾーン問題を回避
    if (date && typeof date === 'string' && !date.includes('T')) {
      // 日付文字列を分解して年月日を取得
      const [year, month, day] = date.split('-').map(Number);
      // ローカルタイムゾーンで日付オブジェクトを作成
      const targetDate = new Date(year, month - 1, day);
      return targetDate.toLocaleString(
        locale,
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      );
    }

    let targetDate = date ? new Date(date) : new Date()
    return targetDate.toLocaleString(
      locale,
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      );
  }, [locale])
  const createEventDate = (date) => {
    // 日付文字列がYYYY-MM-DD形式の場合、タイムゾーン問題を回避
    if (date && typeof date === 'string' && !date.includes('T')) {
      // 日付文字列を分解して年月日を取得
      const [year, month, day] = date.split('-').map(Number);
      // ローカルタイムゾーンで日付オブジェクトを作成
      const targetDate = new Date(year, month - 1, day);
      return targetDate.toLocaleString(
        locale,
        {
          month: "short",
          day: "numeric",
        }
      );
    }

    let targetDate = date ? new Date(date) : new Date()
    return targetDate.toLocaleString(
      locale,
        {
          month: "short",
          day: "numeric",
        }
      );
  }
  
  const [current, setCurrent] = useState(createDate())
  const [rowDate, setRowDate] = useState(new Date())

  const resList = useMemo(() => {
    let res = []

    for(const item of list){
      const entity = new SchaduleEntity(item, locale == "ja")
      const scheduleDict = Object.assign({}, entity);
      res.push(scheduleDict)
    }
    return res
  }, [list, locale])

  let eventList = []
  let dateMap = []
  for(const item of resList){
    const key = `${item.year}-${String(item.month).padStart(2, '0')}-${String(item.day).padStart(2, '0')}`;

    if (!dateMap[key]) {
      dateMap[key] = []; // キーが存在しない場合、空の配列を作成
    }
    dateMap[key].push(item); 

    if(item.isEvent && isWithinSchoolYear(item.dateTime)){
      eventList.push(item)
    }
  }
  eventList = eventList.sort((a, b) => new Date(a.start) - new Date(b.start));

  // FullCalendar用のイベントリストを作成（重複や無効なイベントを除外）
  const validEvents = useMemo(() => {
    const validList = resList.filter(item => {
      // タイトルが空のアイテムを除外
      if (!item.title || item.title.trim() === '') {
        return false
      }

      // 有効な日付があることを確認
      if (!item.dateTime || !item.start) {
        return false
      }

      return true
    }).map(item => {

      // デバッグログ：11/1の運動会予行の処理を追跡
      if (item.title && (item.title.includes('運動会予行') || item.title.includes('Sports Day Rehearsal'))) {
        console.log('=== 運動会予行データのデバッグ ===');
        console.log('元のデータ:', {
          title: item.title,
          start: item.start,
          end: item.end,
          startStr: item.startStr,
          endStr: item.endStr,
          allDay: item.allDay,
          dateTime: item.dateTime
        });
      }

      // 日付文字列を正しいISO形式に変換
      let startDate = item.start
      let endDate = item.end

      // 日付を正確に処理する - 元のstartStr/endStrを使用
      if (item.allDay && item.startStr && !item.startStr.includes('T')) {
        // 終日イベントの場合、ローカルタイムゾーンで日付が変わらないように
        // 日付文字列に時間を追加（T07:00:00）- これはUTC-7のアリゾナ時間で00:00になる
        startDate = item.startStr + 'T07:00:00.000Z'

        // FullCalendarの終日イベントでは終了日は排他的なので、
        // 実際の最後の日の翌日を設定する必要がある
        if (item.endStr && item.endStr !== item.startStr) {
          const endDateObj = new Date(item.endStr + 'T07:00:00.000Z')
          endDateObj.setDate(endDateObj.getDate() + 1) // 1日加算
          endDate = endDateObj.toISOString().split('T')[0] + 'T07:00:00.000Z'
        } else {
          endDate = null
        }
      } else if (item.startStr && item.startStr.includes('T')) {
        // 時間付きイベントの場合、元のstartStr/endStrを使用（UTC変換されていない）
        startDate = item.startStr
        endDate = item.endStr && item.endStr !== item.startStr ? item.endStr : null
      }


      if (item.title && (item.title.includes('運動会予行') || item.title.includes('Sports Day Rehearsal'))) {
        console.log('処理後:', {
          startDate: startDate,
          endDate: endDate
        });
        console.log('Date オブジェクト:', new Date(startDate));
        console.log('現在のタイムゾーン:', Intl.DateTimeFormat().resolvedOptions().timeZone);
      }

      // FullCalendar用にイベントの形式を調整
      const calendarEvent = {
        id: item.id, // 必須：ユニークID
        title: item.title,
        start: startDate,
        end: endDate,
        allDay: item.allDay, // SchedualEntityで正しく設定されたallDayプロパティを使用
        backgroundColor: item.backgroundColor,
        borderColor: item.borderColor,
        editable: false,
        extendedProps: {
          description: item.extendedProps?.description || item.text,
          location: item.location,
          isEvent: item.isEvent
        }
      }



      if (item.title && (item.title.includes('運動会予行') || item.title.includes('Sports Day Rehearsal'))) {
        console.log('FullCalendarに渡すデータ:', calendarEvent);
      }

      return calendarEvent
    })


    // イベントIDでユニーク化（重複除去）
    const uniqueEvents = validList.filter((event, index, self) =>
      index === self.findIndex(e => e.id === event.id)
    )


    return uniqueEvents
  }, [resList, locale])
  
  const [map, setMap] = useState(dateMap)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const selectDate = (dateStr) => {
    setRowDate(dateStr)
    let items = map[dateStr]
    if(items && items.length > 0){
      setDetailList(items)
      openModal()
    } else {
      setDetailList([])
    }
  }

  const selectEvent = (info) => {
    const dateStr = info.event.extendedProps.startStr
    setRowDate(dateStr)
    setDetailList([info.event])
    openModal()
  }

  let res = {}


  if(files.properties && files.properties["image"]){
    const tmpName = files.properties["image"].files[0].name
    const name = tmpName.replace(/ /g, '_')
    const imagePath = `/${ACCESABLE_IMAGE_PATH}/calendar/${name}${DOWNLOAD_IMAGE_EXTENSION}`
    res.image = imagePath
  }
  if(files.properties && files.properties["pdf"]){
    let pdfFile = files.properties["pdf"].files[0];

    if(locale != "ja" && files.properties["pdf_en"] && files.properties["pdf_en"].files){
      pdfFile = files.properties["pdf_en"].files[0];
    }

    // ローカルに保存されたPDFファイルパスを優先使用
    const localPdfPath = `/${ACCESABLE_PDF_PATH}/calendar/${pdfFile.name.replace(/ /g, '_')}`;
    res.pdf = localPdfPath;
  }

  useEffect(() => {
    selectDates(new Date(rowDate))
    setCurrent(createDate(rowDate))
  }, [rowDate, locale, createDate]);
  
  return (
    <>
      {/* title */}
      
      {/* event */}
      <Section py="py-10" >
        <div className="flex flex-col justify-center items-center mb-2 ">
          <Title title={`${json.navigation.calendar}(${schoolYear.label})`} />
        </div>
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12 md:items-center">
              <div className="md:col-start-2 flex justify-center items-center">
                {res.image ? (
                  <img
                    src={res.image}
                    alt="年間カレンダー"
                    className="rounded-lg w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = "/image/download/calendar/event.png.png"; // フォールバック
                    }}
                  />
                ) : (
                  <ImageOptimizer
                    baseName="event"
                    pagePath="calendar"
                    alt={`${json.calender.title}`}
                    width={800}
                    height={600}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                  <ul role="list" className="divide-y divide-gray-100">
                    {eventList.map((item) => {
                      const startTime = extractTime(item.start);
                      const endTime = extractTime(item.end);
                      const isSingleDayEvent = !item.end || new Date(item.start).toISOString().split('T')[0] === new Date(item.end).toISOString().split('T')[0];
                      return (
                        <li className="flex justify-between py-1" key={item.id}>
                          {/* <div className="flex min-w-0 gap-x-4"> */}
                          <div className="min-w-0 flex-auto">
                            <span className="mt-1 text-sm text-gray-500">{createEventDate(item.start)}{!isSingleDayEvent && (`〜${createEventDate(item.end)}`)} {isSingleDayEvent && !item.allDay && ( `${startTime}〜${endTime}`)}</span>
                            
                            <span className="text-md font-semibold leading-6 text-gray-900 ml-2">
                              {item.link && (<a href={item.link} target='_blank' className="hover:text-blue-600">{item.title}</a>)}
                              {!item.link && (<>{item.title}</>)}
                              
                            </span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
              </div>
          </div>
        </div>
      </Section>
      
      <Section>
          <div className="flex flex-col justify-center items-center mb-2 ">
            <Title title={`${json.calender.title}`} />
          </div>
          {res.pdf && (
            <div className="flex justify-center mb-8">
              <a
                href={res.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
              >
                <ArrowDownOnSquareStackIcon className='w-5 h-5 mr-3 group-hover:animate-bounce' />
                <span className="text-sm lg:text-base">{`${json.calender.download}`}</span>
              </a>
            </div>
          )}
          <div className="flex-1">
            <FullCalendar
              ref={calendarRef}
              locale={locale}
              timeZone="local"
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                left: 'prev, next',
                center: 'title',
                right: 'today, dayGridMonth, timeGridWeek'
              }}
              events={validEvents}
              nowIndicator={true}
              selectable={true}
              dateClick={(info) => {selectDate(info.dateStr)}}
              eventClick={(info) => selectEvent(info)}
              eventDidMount={(info) => {
                // FullCalendarでの実際のレンダリング確認

                if (info.event.title && (info.event.title.includes('運動会予行') || info.event.title.includes('Sports Day Rehearsal'))) {
                  console.log('=== FullCalendarレンダリング時 ===');
                  console.log('イベントタイトル:', info.event.title);
                  console.log('表示される開始日:', info.event.start);
                  console.log('ローカル日付表示:', info.event.start?.toLocaleDateString());
                  console.log('ISO表示:', info.event.start?.toISOString());
                  console.log('FullCalendar内部データ:', info.event);
                }
              }}
              displayEventEnd={true}
              dayCellContent={(arg) => { return arg.date.getDate(); }}
              dayGridMonth={{titleFormat: { month: "long" }}}
              initialDate={rowDate}
              eventContent={(info) => renderEventContent(info, locale)}
              timeGridWeek={{titleFormat: function(date){
                if(locale == "en"){
                  return { month: "long" }
                }
                const startMonth = date.start.month + 1;
                const endMonth = date.end.month + 1;

                // 1週間のうちに月をまたぐかどうかの分岐処理
                if (startMonth === endMonth) {
                   return startMonth + '月';
                } else {
                   return startMonth + '月～' + endMonth + '月';
                }
              }}}
            />
          </div>
      </Section>
      <Transition appear show={isModalOpen} as="div">
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    {current}
                  </Dialog.Title>

                  <div className="space-y-4">
                    {detailList && detailList.map((detail) => {
                      const startTime = extractTime(detail.start);
                      const endTime = extractTime(detail.end);

                      return (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100" key={detail.id}>
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">{detail.title}</h4>
                              <div className="flex items-center text-gray-600 mb-2">
                                <CalendarDaysIcon className="w-4 h-4 mr-2" />
                                {detail.allDay ? (
                                  <span>終日</span>
                                ) : (
                                  <span>{startTime}〜{endTime}</span>
                                )}
                              </div>
                              {detail.extendedProps?.description && (
                                <p className="text-gray-600 mb-4">{detail.extendedProps.description}</p>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button
                              onClick={() => window.open(generateGoogleCalendarUrl(detail), '_blank')}
                              className="inline-flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors duration-200"
                            >
                              <CalendarDaysIcon className="w-4 h-4 mr-2" />
                              {`${json.calender.add_google}`}
                            </button>

                            <button
                              onClick={() => generateICalendarFile(detail)}
                              className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                            >
                              <ShareIcon className="w-4 h-4 mr-2" />
                              {`${json.calender.add_i}`}
                            </button>

                            {detail.link && (
                              <button
                                onClick={() => window.open(detail.link, '_blank')}
                                className="inline-flex items-center px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors duration-200"
                              >
                                詳細を見る
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {(!detailList || detailList.length === 0) && (
                      <div className="text-center py-8">
                        <CalendarDaysIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-500">この日の予定はありません</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      閉じる
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const extractTime = (datetime) => {
  // datetimeをDateオブジェクトに変換
  const date = new Date(datetime);

  // アリゾナ州のタイムゾーン（America/Phoenix）で時刻を取得
  const arizonaTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Phoenix',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date);

  return arizonaTime; // 'HH:mm'形式で返す
};

// GoogleカレンダーURL生成
const generateGoogleCalendarUrl = (event) => {
  const { title, start, end, extendedProps } = event;
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(startDate.getTime() + 60 * 60 * 1000); // 1時間後

  const formatDateForGoogle = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title || 'イベント',
    dates: `${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}`,
    details: extendedProps?.description || '',
    location: extendedProps?.location || ''
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// iCalendar(.ics)ファイル生成
const generateICalendarFile = (event) => {
  const { title, start, end, extendedProps } = event;
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date(startDate.getTime() + 60 * 60 * 1000);

  const formatDateForICal = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tucson Japanese School//Calendar//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@tucsonjapanese.org`,
    `DTSTART:${formatDateForICal(startDate)}`,
    `DTEND:${formatDateForICal(endDate)}`,
    `SUMMARY:${title || 'イベント'}`,
    `DESCRIPTION:${extendedProps?.description || ''}`,
    `LOCATION:${extendedProps?.location || ''}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${title || 'event'}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
   