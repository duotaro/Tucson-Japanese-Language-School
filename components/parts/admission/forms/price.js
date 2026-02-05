import { useState } from 'react';
import Section from '../../section';
import { PriceEntity } from '@/entity/priceEntity';
import { useLocale } from '@/utils/locale';
import Title from '../../text/title';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const PricingSection = ({price, discountFamily, discountStaff, locale="ja"}) => {
  const { json } = useLocale(locale)
  const [activeTab, setActiveTab] = useState('oyako')

  // Parse all price entities
  const allItems = []
  for(const p of price){
    const entity = new PriceEntity(p, locale == "ja")
    allItems.push(entity)
  }
  allItems.sort((a, b) => a.ordering - b.ordering);

  // Split by group (with fallback for when group field is not yet set in Notion)
  const oyakoItems = allItems.filter(item => {
    if (item.group) return item.group === 'oyako'
    return item.ordering <= 4
  })
  const jhlItems = allItems.filter(item => {
    if (item.group) return item.group === 'jhl'
    return item.ordering >= 5
  })

  // Separate tuition items from supply fee items
  const getSupplyFee = (items) => items.find(i => i.title === '教材費' || i.title === 'Supply Fee')
  const getTuitionItems = (items) => items.filter(i => i.title !== '教材費' && i.title !== 'Supply Fee')

  const currentItems = activeTab === 'oyako' ? oyakoItems : jhlItems
  const tuitionItems = getTuitionItems(currentItems)
  const supplyFee = getSupplyFee(currentItems)

  // Parse discount data
  const familyList = []
  for(const family of discountFamily){
    const entity = new DisCountFamily(family, allItems)
    familyList.push(entity)
  }
  familyList.sort((a, b) => b.first - a.first);

  const staffList = []
  for(const staff of discountStaff){
    const entity = new DisCountStaff(staff, allItems)
    staffList.push(entity)
  }
  staffList.sort((a, b) => b.price - a.price);

  const tabs = [
    { key: 'oyako', label: json.price.oyako },
    { key: 'jhl', label: json.price.jhl },
  ]

  return (
    <Section bg='bg-gray-50'>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Title title={json.navigation.tuition} fontSize="text-2xl sm:text-3xl lg:text-4xl"/>
          <p className="text-gray-800 text-xl leading-6 mt-3 mb-2">
            {json.price.fee} <span className="font-bold text-2xl text-gray-600">$60</span>
          </p>
          <p className='text-red-500 text-md'>{json.price.caution}</p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-200 rounded-full p-1">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tuition cards */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 mb-8">
          {tuitionItems.map((item, index) => {
            const isFirst = index === 0
            const bgColor = isFirst ? "bg-gradient-to-r from-indigo-600 to-violet-600" : "bg-white"
            const textColor = isFirst ? "text-white" : "text-black"
            return (
              <div key={item.id || item.title || index} className={`group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-5 ${bgColor}`}>
                <h3 className={`relative flex items-center justify-center font-manrope text-lg font-bold mb-6 ${textColor}`}>
                  {item.title}
                </h3>
                <div className="mb-2 flex flex-col relative">
                  <span className={`font-manrope text-xl font-semibold mb-2 ${textColor}`}>
                    ${item.price} {item.frequency > 1 && (
                      <>
                        <span>× {item.frequency}</span>
                        <span className={`text-gray-600`}> (${item.total})</span>
                      </>
                    )}
                  </span>
                  <span className={`text-md ${isFirst ? "text-gray-300" : "text-gray-500"}`}>
                    {item.per}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Supply fee note */}
        {supplyFee && (
          <div className="text-center mb-6">
            <p className="text-gray-700 text-lg">
              {json.price.supply_fee}: <span className="font-semibold">${supplyFee.price}/{locale === 'ja' ? '年' : 'year'}</span>
            </p>
          </div>
        )}

        {/* Payment notes */}
        <div className="text-center space-y-1 mb-10 text-sm text-gray-600">
          <p>{json.price.card_fee}</p>
          <p>{json.price.installment_note}</p>
          <p>{json.price.no_refund}</p>
        </div>

        {/* Discount sections - collapsible */}
        <div className="max-w-3xl mx-auto space-y-3">
          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 shadow hover:bg-gray-50 transition-colors">
              <span className="text-base font-semibold">{json.price.family_discount}</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-500 group-data-[open]:rotate-180 transition-transform duration-200" />
            </DisclosureButton>
            <DisclosurePanel className="px-4 pb-4 pt-2">
              <div className="flex items-center justify-center overflow-x-auto">
                <DiscountFamilyComponent list={familyList} locale={locale}/>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 shadow hover:bg-gray-50 transition-colors">
              <span className="text-base font-semibold">{json.price.staff_discount}</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-500 group-data-[open]:rotate-180 transition-transform duration-200" />
            </DisclosureButton>
            <DisclosurePanel className="px-4 pb-4 pt-2">
              <div className="flex items-center justify-center overflow-x-auto">
                <DiscountStaffComponent list={staffList} locale={locale}/>
              </div>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure>
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-left text-sm font-medium text-gray-900 shadow hover:bg-gray-50 transition-colors">
              <span className="text-base font-semibold">{json.price.esa_title}</span>
              <ChevronDownIcon className="h-5 w-5 text-gray-500 group-data-[open]:rotate-180 transition-transform duration-200" />
            </DisclosureButton>
            <DisclosurePanel className="px-4 pb-4 pt-2">
              <p className="text-gray-700 text-sm mb-3">{json.price.esa_description}</p>
              <a
                href="https://www.azed.gov/esa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                ESA Official Website →
              </a>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </Section>
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

    this.first = item.properties["1st student"]?.number || item.properties["1st"]?.number || 0
    this.second = item.properties["2nd student"]?.number || item.properties["2nd"]?.number || 0
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
  const unit = locale == "ja" ? "人目" : " student"
  const ordinals = locale == "ja"
    ? ['1', '2', '3', '4']
    : ['1st', '2nd', '3rd', '4th']
  return (
    <table className="text-left table-fixed">
      <thead>
        <tr>
          <th className="p-4 border-b border-slate-200 bg-gray-50">
            <p className="text-sm font-normal leading-none text-slate-500"></p>
          </th>
          {ordinals.map((ord, i) => (
            <th key={i} className="p-4 border-b border-slate-200 bg-gray-50">
              <p className="text-sm font-normal leading-none text-slate-500 whitespace-normal">{ord}{unit}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index} className="hover:bg-gray-50 border-b border-slate-200">
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800">{item.priceDetail?.title}</p></td>
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
          <th className="p-4 border-b border-slate-200 bg-gray-50">
            <p className="text-sm font-normal leading-none text-slate-500"></p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-gray-50">
            <p className="text-sm font-normal leading-none text-slate-500">{unit}</p>
          </th>
          <th className="p-4 border-b border-slate-200 bg-gray-50">
            <p className="text-sm font-normal leading-none text-slate-500">{code}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return (
            <tr key={index} className="hover:bg-gray-50 border-b border-slate-200">
              <td className="p-4 py-5 whitespace-normal"><p className="block font-semibold text-sm text-slate-800 whitespace-normal">{item.priceDetail?.title}</p></td>
              <td className="p-4 py-5"><p className="block font-semibold text-sm text-slate-800">${item.price}</p></td>
              <td className="p-4 py-5"><p className="block font-semibold text-sm text-slate-800">{item.code}</p></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
