import React, { useContext, useState } from 'react';
import { HEADER_MENU } from "@/const";
import { useLocale } from "@/utils/locale";
import LocaleContext from "../../context/localeContext";
import {
  Dialog,
  DialogPanel
} from '@headlessui/react'
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import PopoverDetail from './popoverDetail';
import DisclosureDetail from './disclosureDetail';

export default function Nav({ }) {
  const { locale } = useContext(LocaleContext);
  const { json} = useLocale(locale)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-b from-cyan-500 to-cyan-600">

    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:hidden">
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-400"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="flex items-center justify-end top-2 right-4 block lg:hidden shadow">
        <a target="_blank" href="https://tucsonhosyuko.square.site/" >
          <div className="text-sm rounded-lg px-2 py-2 text-white border-blue-500 bg-blue-500 flex justify-center items-center ">
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 mr-1" />
            <span>{json.navigation.payment}</span>
          </div>
        </a>
      </div>
    </nav>
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 hidden lg:flex">
      <div className="flex md:gap-x-12">
        {HEADER_MENU.map((item) => {
            return (
              <>
               <PopoverDetail item={item}/>
              </>
            )}
        )}
      </div>
    </nav>

    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
  
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-blue-800"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              
              {HEADER_MENU.map((item) => {
                  return (
                    <DisclosureDetail item={item} />
                  )}
              )}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  )
}