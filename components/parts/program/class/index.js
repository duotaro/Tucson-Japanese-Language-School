"use client"
import { useLocale } from '@/utils/locale'
import Title from '../../text/title'
import Paragraphs from '../../text/paragraphs'
import Section from '../../section'
import CustomImage from '../../image/CustomImage'
import ClassEntity from '@/entity/classEntity'
import Caution from '../../caution'


export default function ClassComponent({category, classes, locale="ja" }) {
  const { json } = useLocale(locale)

  let list = []
  for(const item of classes) {
    let c = {}
    const cName =  item.properties["category"].select.name
    for(const cat of category){
      const cId =  cat.properties["id"].select.name
      if(cId == cName){
        c = cat
        break
      }
    }

    const entity = new ClassEntity(item , c, locale == "ja")
    list.push(entity)
  }
  list.sort((a, b) => a.ordering - b.ordering);
  
  return (
    <>
     {list.map((item, index) => {
      const pos = index%2 == 0 ? "lg:col-start-1" : "lg:col-start-2" 
      const categoryColor = item.category == "Inherited" ? "bg-blue-400 hover:bg-blue-600" : "bg-orange-400 hover:bg-orange-600"
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
         <Section key={item.id}>
            <div className='mb-5'>
              <Title title={item.title} /> 
            </div>
            <div className="container px-6 mx-auto ">
              <div className="grid gap-8 lg:grid-flow-col-dense lg:grid-cols-2 md:gap-12 relative">
                  <div className="flex items-center items-center mt-2">
                    <CustomImage src={item.image} alt={item.title} addClass={pos} />
                  </div>
                  <div className="flex flex-col items-center">
                      <div className='flex flex-row justify-center items-center text-gray-800 hover:text-blue-500 gap-5'>
                        {item.target && ( <Paragraphs text={item.target} />)}
                        {item.categoryTitle && (
                        <div className=" group ">
                          <span
                            className={[
                              "whitespace-nowrap",
                              "rounded-lg",
                              "w-80",
                              "sm:w-96",
                              "lg:w-[500px]",
                              categoryColor,
                              "px-5",
                              "py-3",
                              "text-white",
                              "text-sm",
                              "absolute",
                              "top-1/2",
                              "left-1/2",
                              "-translate-x-1/2",
                              "-translate-y-1/2",
                              "opacity-0",
                              "group-hover:opacity-100",
                              "transition",
                              "pointer-events-none",
                            ].join(" ")}
                          >
                            <Paragraphs text={item.categoryText} mt='mt-1 text-white'/>
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

     <Section>
       <Caution text={json.class.caution} />
     </Section>
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
   