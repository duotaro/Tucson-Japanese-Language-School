"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useContext, useEffect, useState, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import LocaleContext from '../../../context/localeContext'
import { useLocale } from '../../../../utils/locale'
import Title from '../../text/title'
import { SchaduleEntity } from '../../../../entity/scheduleEntity'
import Paragraphs from '../../text/paragraphs'
import { getSchoolYear, isWithinSchoolYear } from '../../../../utils/dateUtils'
import Section from '../../section'
import CustomImage from '../../image/CustomImage'
import Link from 'next/link'
import FullScreenModal from '../../modal/fullscreenModal'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline'
import { ACCESABLE_IMAGE_PATH, ACCESABLE_PDF_PATH, DOWNLOAD_IMAGE_EXTENSION } from '../../../../const'
import ClassEntity from '../../../../entity/classEntity'




export default function ClassComponent({category, classes}) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)

  let list = []
  for(const item of classes) {
    let c = {}
    const cName =  item.properties["category"].select.name
    console.log("----------")
    console.log(item.properties["category"].select)
    console.log("-+++++++++")
    for(const cat of category){
      const cId =  cat.properties["id"].select.name
      if(cId == cName){
        c = cat
        break
      }
    }
    console.log(c)

    const entity = new ClassEntity(item , c, locale == "ja")
    list.push(entity)
  }
  list.sort((a, b) => a.ordering - b.ordering);
  
  return (
    <>
     {list.map((item, index) => {
      const pos = index%2 == 0 ? "lg:col-start-1" : "lg:col-start-2" 
      const categoryColor = category == "Inherited" ? "bg-blue-400 hover:bg-blue-800" : "bg-orange-400 hover:bg-orange-800"
      let bgMulti = "bg-gray-50"
      switch(index%4){
        case 0:
          bgMulti = "bg-gray-50"
          break;
        case 1:
          bgMulti = "bg-blue-50"
          break;
        case 2:
          bgMulti = "bg-green-50"
          break;
        case 3:
          bgMulti = "bg-pink-50"
          break;
        default:
          bgMulti = "bg-gray-50"
          break;
      }

      return (
         <Section bg={bgMulti} key={item.id}>
            <div className='mb-5'>
              <Title title={item.title} /> 
            </div>
            <div className="container px-6 mx-auto">
              <div className="grid gap-8 lg:grid-flow-col-dense lg:grid-cols-2 md:gap-12">
                  <CustomImage src={item.image} alt={item.title} addClass={pos} />
                  <div className="flex flex-col items-center t">
                      <div className='flex flex-row justify-center items-center text-gray-800 hover:text-blue-500 gap-5'>
                        {item.target && ( <Paragraphs text={item.target} />)}
                        {item.categoryTitle && (
                        <div className="relative group ">
                          <span
                            className={[
                              "whitespace-nowrap",
                              "rounded-lg",
                              "w-96",
                              "lg:w-[500px]",
                              "bg-orange-200",
                              "px-5",
                              "py-3",
                              "text-white",
                              "text-sm",
                              "absolute",
                              "-top-20",
                              "left-1/2",
                              "-translate-x-1/2",
                              "opacity-0",
                              "group-hover:opacity-100",
                              "transition",
                              "pointer-events-none",
                            ].join(" ")}
                          >
                            <Paragraphs text={item.categoryText} mt='mt-1'/>
                          </span>
                          <button className={`rounded text-sm text-white text-semiboldborder px-2 py-1 shadow transition mt-4 ${categoryColor}`}>
                            {item.categoryTitle}
                          </button>
                        </div>
                        )}
                      </div>
                      <Paragraphs text={item.text} />
                  </div>
              </div>
            </div>
          </Section>
      )
     })}
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
   