// components/PricingSection.js
import { useContext } from 'react';
import Section from '../../section';
import { PriceEntity } from '@/entity/priceEntity';
import LocaleContext from '../../../context/localeContext';
import { useLocale } from '@/utils/locale';
import Title from '../../text/title';

const PricingSection = ({price, discountFamily, discountStaff}) => {
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)


  const list = []
  for(const p of price){
    const entity = new PriceEntity(p, locale == "ja")
    list.push(entity)
  }
  list.sort((a, b) => a.ordering - b.ordering);

  const familyList = []
  for(const family of discountFamily){
    const entity = new DisCountFamily(family, list)
    familyList.push(entity)
  }
  familyList.sort((a, b) => b.first - a.first);

  const staffList = []
  for(const staff of discountStaff){
    const entity = new DisCountStaff(staff, list)
    staffList.push(entity)
  }
  staffList.sort((a, b) => b.price - a.price);
  //


  return (
    <>
    <Section>
      <div className="mx-auto max-w-7xl ">
        <div className="mb-5 text-center">
          <Title title={json.navigation.tuition} fontSize = "text-2xl sm:text-3xl lg:text-4xl"/>
          <p className="text-gray-800 text-xl leading-6 mb-5">
            {json.price.fee} <bold className="font-bold text-2xl text-gray-600">$60</bold> 
            <p className='text-red-500 text-md'>{json.price.caution}</p>
          </p>
          <div className="mb-5 flex justify-center">
            <span className="flex items-center">
              <span className="inline-block whitespace-nowrap text-xs leading-4 font-semibold tracking-wide bg-indigo-50 text-indigo-600 rounded-full py-2 px-4">
                options
              </span>
            </span>
          </div>
          <div className="tabs">
            {/* <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto ">
              <button
                className={`inline-block w-1/3 text-center transition-all duration-500 rounded-full text-gray-400 text-sm py-3 px-3 hover:text-indigo-600 ${paymentPlan === 'yearly' ? 'bg-indigo-600 text-white' : ''}`}
                onClick={() => setPaymentPlan('yearly')}
              >
                年間一括払い
              </button>
              <button
                className={`inline-block w-1/3 text-center transition-all duration-500 rounded-full text-gray-400 text-sm py-3 px-3 hover:text-indigo-600 ${paymentPlan === 'semiannual' ? 'bg-indigo-600 text-white' : ''}`}
                onClick={() => setPaymentPlan('semiannual')}
              >
                半期2回払い
              </button>
              <button
                className={`inline-block w-1/3 text-center transition-all duration-500 rounded-full text-gray-400 text-sm py-3 px-3 hover:text-indigo-600 ${paymentPlan === 'monthly' ? 'bg-indigo-600 text-white' : ''}`}
                onClick={() => setPaymentPlan('monthly')}
              >
                月々10回払い
              </button>
            </div> */}

            <div className={`mt-3`}>
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
                {list.map((item, index) => {
                    const bgColor = index == 0 ? "bg-gradient-to-r from-indigo-600 to-violet-600" : ""
                    const textColor = index == 0 ? "text-white" : "text-black"
                    return (
                        <div className={`group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-5 ${bgColor}`}>
                            <h3 className={`relative flex items-center justify-center font-manrope text-lg font-bold mb-6 ${textColor}`}>
                                {item.title}
                                {/* <span className="h-6 px-3 relative rounded-full border border-solid border-gray-100 text-sm ml-4">Popular</span> */}
                            </h3>
                            <div className="mb-2 flex flex-col relative">
                                <span className={`font-manrope text-xl font-semibold mb-2 ${textColor}`}>
                                  ${item.price} {item.frequency > 1 && ( <>
                                    <span>× {item.frequency}</span>
                                    <span className={`text-gray-600`}> (${item.total})</span>
                                  </>
                                  )}
                                </span>
                                <span className={`text-md ${index == 0 ? "text-gray-300" : "text-gray-500"}`}>
                                {item.per}
                                </span>
                            </div>
                        </div>
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section bg='!bg-white'  py="py-1 md:py-2 lg:py-4">
      <div className="mx-auto max-w-7xl mt-10">
        <div className='flex items-center justify-center gap-10 flex-col lg:flex-row transition-all duration-500'>
          <div className="mb-5 text-center flex-1 ">
            <Title title={`家族割引後授業料（翻訳）`} fontSize="text-lg sm:text-xl lg:text-2xl"/>
            <div className={`mt-10 flex items-center justify-center`}>
              <DiscountFamilyComponent list={familyList} locale={locale}/>
            </div>
          </div>
          <div className="mb-5 text-center flex-1">
            <Title title={`スタッフ割引後授業料（翻訳）`} fontSize="text-lg sm:text-xl lg:text-2xl"/>
            <div className={`mt-10 flex items-center justify-center`}>
              <DiscountStaffComponent list={staffList} locale={locale}/>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
};

export default PricingSection;


class DisCountFamily{
  constructor(item, priceList){

    this.payment = item.properties["payment"].select.name

    this.priceDetail = null
    for(const price of priceList) {
      if(this.payment == price.payment){
        this.priceDetail = price
      }
    }

    this.first = item.properties["1st"]?.number || 0
    this.second = item.properties["2nd"]?.number || 0
    this.third = item.properties["3rd"]?.number || 0
    this.fourth = item.properties["4th"]?.number || 0

 }
}

class DisCountStaff{
  constructor(item, priceList){

    this.payment = item.properties["payment"].select.name

    this.code = null
    if(item.properties["code"].rich_text[0]){
      this.code = item.properties["code"].rich_text[0].text.content
    }

    this.priceDetail = null
    for(const price of priceList) {
      if(this.payment == price.payment){
        this.priceDetail = price
      }
    }

    this.price = item.properties["price"]?.number || 0

 }
}

const DiscountFamilyComponent = ({list, locale}) => {
  const unit = locale == "ja" ? "人目" : "st student’s Tuition"
  return (
    <table className="text-left table-fixed">
      <thead>
        <tr>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500"></p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500 whitespace-normal">1{unit}</p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500 whitespace-normal">2{unit}</p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500 whitespace-normal">3{unit}</p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500 whitespace-normal">4{unit}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">{item.priceDetail.title}</p></td>
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">${item.first}</p></td>
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">${item.second}</p></td>
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">${item.third}</p></td>
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">${item.fourth}</p></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

const DiscountStaffComponent = ({list, locale}) => {
  const unit = locale == "ja" ? "授業料" : "Tuition"
  const code = locale == "ja" ? "クーポンコード" : "COUPON CODE"
  return (
    <table className="text-left table-fixed">
      <thead>
        <tr>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500"></p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500">{unit}</p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500">{code}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800 whitespace-normal">{item.priceDetail.title}</p></td>
              <td className="p-4 py-5"><p className="block font-semibold text-sm text-slate-800">${item.price}</p></td>
              <td className="p-4 py-5"><p className="block font-semibold text-sm text-slate-800">{item.code}</p></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};