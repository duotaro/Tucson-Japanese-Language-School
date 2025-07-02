import React, { useContext, useState } from 'react';
import { useLocale } from "../utils/locale";
import SwitchLang from "./parts/menu/switchLang";
import LocaleContext from "./context/localeContext";
import { ArrowTopRightOnSquareIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LocaleLink from "./parts/menu/LocaleLink";
import { HEADER_MENU } from "@/const";
import PopoverDetail from './parts/nav/popoverDetail';
import { Dialog, DialogPanel } from '@headlessui/react';
import DisclosureDetail from './parts/nav/disclosureDetail';

export default function Navigation({ locale: propLocale }) {
  const { locale: contextLocale } = useContext(LocaleContext);
  const locale = propLocale || contextLocale;
  const { json } = useLocale(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 統一されたナビゲーション */}
      <nav className="bg-gradient-to-r from-blue-500 to-blue-600 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0">
              <LocaleLink href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors">
                {json.navigation.title}
              </LocaleLink>
            </div>
            
            {/* デスクトップメニュー */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {HEADER_MENU.map((item) => (
                <div key={item.GROUP} className="relative">
                  <PopoverDetail item={item} isMainNav={true} />
                </div>
              ))}
            </div>
            
            {/* 右側のアクション */}
            <div className="flex items-center space-x-4">
              {/* 支払いラベル */}
              <a 
                target="_blank" 
                href="https://tucsonhosyuko.square.site/" 
                className="hidden sm:flex items-center px-3 py-1 text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                {json.navigation.payment}
              </a>
              
              {/* 言語切り替え */}
              <SwitchLang currentLocale={locale} />
              
              {/* モバイルメニューボタン */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <LocaleLink href="/" className="text-lg font-bold text-gray-900">
              {json.navigation.title}
            </LocaleLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            {/* モバイル支払いリンク */}
            <a 
              target="_blank" 
              href="https://tucsonhosyuko.square.site/" 
              className="flex items-center justify-center w-full px-4 py-3 mb-6 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
              {json.navigation.payment}
            </a>
            
            {/* モバイルメニュー項目 */}
            <div className="space-y-1">
              {HEADER_MENU.map((item) => (
                <DisclosureDetail key={item.GROUP} item={item} onClose={() => setMobileMenuOpen(false)} />
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}