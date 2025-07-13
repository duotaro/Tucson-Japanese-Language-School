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
import Paragraphs from '../../text/paragraphs'
import { getSchoolYear, isWithinSchoolYear } from '@/utils/dateUtils'
import Section from '../../section'
import ImageOptimizer from '@/components/download/ImageOptimizer'
import Link from 'next/link'
import FullScreenModal from '../../modal/fullscreenModal'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline'
import { ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH, DOWNLOAD_IMAGE_EXTENSION } from '@/const'
import PdfDownloads from '../../files/downloadsPdf'


// interface Event {
//   tile: string;
//   start: Date | string;
//   allday: boolean;
//   id: number;
// }
const renderEventContent = (eventInfo, locale) => {
  const { title, start, end, allDay, backgroubdColor } = eventInfo.event;
  const startDate = new Date(start)
  const endDate = new Date(end)


  const isSingleDayEvent = !end || startDate.toISOString().split('T')[0] === endDate.toISOString().split('T')[0];

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
      {isSingleDayEvent && !allDay && (
        <p className=''>{start.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', hour12: false })}-{end.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', hour12: false })} </p>
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

  const [allEvents, setAllEvents] = useState(resList)
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
  console.log("Calendar files object:", files);
  console.log("Calendar files.properties:", files.properties);
  
  if(files.properties && files.properties["image"]){
    console.log("Image files array:", files.properties["image"].files);
    const tmpName = files.properties["image"].files[0].name
    const name = tmpName.replace(/ /g, '_')
    const imagePath = `/${ACCESABLE_IMAGE_PATH}/calendar/${name}${DOWNLOAD_IMAGE_EXTENSION}`
    
    console.log("Generated image path:", imagePath);
    res.image = imagePath
  } else {
    console.log("No image property found in files.properties");
  }
  if(files.properties && files.properties["pdf"]){
    let pdfTmpName = files.properties["pdf"].files[0].name
    
    if(locale != "ja" && files.properties["pdf_en"] && files.properties["pdf_en"].files){
      pdfTmpName = files.properties["pdf_en"].files[0].name
    }
    const pdfName = pdfTmpName.replace(/ /g, '_')
    
    res.pdf = `/${ACCESABLE_PDF_PATH}/calendar/${pdfName}`
  }

  useEffect(() => {
    selectDates(new Date(rowDate))
    setCurrent(createDate(rowDate))
    setAllEvents(resList)
  }, [rowDate, locale, createDate, resList]);
  
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
                      console.log("Image failed to load:", e.target.src);
                      e.target.src = "/image/download/calendar/event.png.png"; // フォールバック
                    }}
                  />
                ) : (
                  <ImageOptimizer
                    baseName="event"
                    pagePath="calendar"
                    alt="年間カレンダー"
                    width={800}
                    height={600}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                  {/* PDFリンクセクション */}
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
            <Title title="年間カレンダー（翻訳）" />
          </div>
          {/* <div className="text-center max-w-sm">
            <a href='' className="text-center max-w-sm">
              <div><ArrowDownOnSquareIcon className='w-5 h-5' /> <span>年間カレンダー</span></div>
            </a>
          </div> */}
          <div className="mb-6 max-w-xs mx-auto">
            <PdfDownloads filePath={res.pdf} title="年間カレンダー（翻訳）" />
          </div>
          <div className="flex-1">
            <FullCalendar 
              ref={calendarRef}
              locale={locale}
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
              events={allEvents}
              nowIndicator={true}
              selectable={true}
              dateClick={(info) => {selectDate(info.dateStr)}}
              eventClick={(info) => selectEvent(info)}
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
      <FullScreenModal isOpen={isModalOpen} onClose={closeModal} title={current} className="text-gray-200">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center place-items-center mt-5">
            {detailList && detailList.map((detail)=>{
              const startTime = extractTime(detail.start);
              const endTime = extractTime(detail.end);
              return (            
                <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg bg-orange-50 mb-5" key={detail.id}>
                  <div className="px-6 py-4">
                    <Title title={detail.title} fontSize = "text-xl  sm:text-2xl lg:text-3xl text-black"/>
                    {detail.allDay && ( <Paragraphs text={``} /> )}
                    {!detail.allDay && ( <Paragraphs text={`${startTime}〜${endTime}`} /> )}
                    <Paragraphs text={detail.extendedProps.description} addClass="text-left"/>
                  </div>
                  {detail.link && (
                  <div className="px-6 pt-4 pb-2">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                      {json.common.show_more}
                    </button>
                  </div>
                  )}
                </div>
              )
            })}
            {(!detailList || detailList.length == 0 )&& (
              <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg bg-orange-50">
                <div className="px-6 py-4">
                    <Paragraphs text='予定はありません' />
                  </div>
              </div>
            )}
        </div>
      </FullScreenModal>
    </>
  );
}

const extractTime = (datetime) => {
  // datetimeをDateオブジェクトに変換
  const date = new Date(datetime);
  // 時間と分を取得
  const hours = String(date.getHours()).padStart(1, '0'); // 2桁にフォーマット
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 2桁にフォーマット
  return `${hours}:${minutes}`; // 'HH:mm'形式で返す
};
   