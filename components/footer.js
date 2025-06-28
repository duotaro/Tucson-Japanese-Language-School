import React, { useContext } from 'react';
import { useLocale } from "../utils/locale";
import LocaleContext from "./context/localeContext";
import Contact from './parts/contact';


export default function Footer({ locale: propLocale }) {
  const { locale: contextLocale } = useContext(LocaleContext);
  const locale = propLocale || contextLocale;
  const { json } = useLocale(locale)
  const lang = json.footer

  let hClass = "text-md hidden xl:block"
  let vClass = "list-unstyled mb-0 block xl:hidden border-b pb-3"


  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
			<div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
				<div className="md:w-1/2">
          <Contact isFooter={true}/>
				</div>

				<div className="md:w-1/2 flex items-center">
          <div className="w-full">
            <div className="text-white/90 leading-relaxed">
              {lang.polycy}
            </div>
          </div>
        </div>
        </div>

				<div className="text-center border-t border-white/20 mt-8 pt-6">
					<p className="text-sm text-white/80">&copy; 2015- Tucson Japanese School All rights reserved.</p>
				</div>
			</div>
		</footer>
   
)}
