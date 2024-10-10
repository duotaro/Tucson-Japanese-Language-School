// components/PricingSection.js
import { useState, useContext } from 'react';
import Section from '../../section';
import { PriceEntity } from '../../../../entity/priceEntity';
import LocaleContext from '../../../context/localeContext';
import { useLocale } from '../../../../utils/locale';
import Title from '../../text/title';

const PricingSection = ({price}) => {
    console.log(price)
  const { locale } = useContext(LocaleContext);
  const { json, metaTitleExtension } = useLocale(locale)
  const [paymentPlan, setPaymentPlan] = useState('yearly'); // 'yearly', 'semiannual', 'monthly'


  const list = []
  for(const p of price){
    const entity = new PriceEntity(p, locale == "ja")
    list.push(entity)
  }
  list.sort((a, b) => a.ordering - b.ordering);

  return (
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
  );
};

export default PricingSection;
