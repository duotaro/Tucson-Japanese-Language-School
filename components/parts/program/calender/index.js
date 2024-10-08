"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import LocaleContext from '../../../context/localeContext'
import { useLocale } from '../../../../utils/locale'
import Title from '../../text/title'
import { SchaduleEntity } from '../../../../entity/scheduleEntity'
import Paragraphs from '../../text/paragraphs'


// interface Event {
//   tile: string;
//   start: Date | string;
//   allday: boolean;
//   id: number;
// }

export default function Calender({list}) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  const [showModal, setShowModal] = useState(false)
  const [detailList, setDetailList] = useState([])
  
  const today =  new Date().toLocaleString(
  locale,
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  const [current, setCurrent] = useState(today)

  let resList = []
  let dateMap = []
  for(const item of list){
    const entity = new SchaduleEntity(item, locale == "ja")
    const scheduleDict = Object.assign({}, entity);
    resList.push(scheduleDict)

    const key = `${scheduleDict.year}-${String(scheduleDict.month).padStart(2, '0')}-${String(scheduleDict.day).padStart(2, '0')}`;

    if (!dateMap[key]) {
      dateMap[key] = []; // キーが存在しない場合、空の配列を作成
    }
    dateMap[key].push(scheduleDict); 
  }

  console.log(dateMap)
  const [events, setEvents] = useState(resList)
  const [allEvents, setAllEvents] = useState(resList)
  const [map, setMap] = useState(dateMap)

  const selectDate = (dateStr) => {
    console.log(dateStr)
    let items = map[dateStr]
    console.log(items)
    if(items && items.length > 0){
      setDetailList(items)
    } else {
      setDetailList([])
    }
  }

  const selectEvent = (info) => {
    console.log(info)
    setDetailList([info.event])
  }
  
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-2 ">
        <Title title={json.navigation.calendar} />　※実装中
      </div>
      <div className="w-full flex px-5 gap-8 justify-center mb-10">
          <div className="flex-1">
            <FullCalendar 
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
            />
          </div>
          <div className="text-center mt-10">
            <Title title={current} />
            {detailList && detailList.map((detail)=>{
              const startTime = extractTime(detail.start);
              const endTime = extractTime(detail.end);
              return (            
                <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg bg-orange-50 mb-5">
                  <div className="px-6 py-4">
                    <Title title={detail.title} / >
                    {detail.allDay && ( <Paragraphs text={``} /> )}
                    {!detail.allDay && ( <Paragraphs text={`${startTime}〜${endTime}`} /> )}
                    <Paragraphs text={detail.extendedProps.description} />
                  </div>
                  {detail.url && (
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
      </div>
    </>
  );
}

const extractTime = (datetime) => {
  // datetimeをDateオブジェクトに変換
  const date = new Date(datetime);
  // 時間と分を取得
  const hours = String(date.getHours()).padStart(2, '0'); // 2桁にフォーマット
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 2桁にフォーマット
  return `${hours}:${minutes}`; // 'HH:mm'形式で返す
};
   