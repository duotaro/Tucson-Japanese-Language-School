


import React, { useContext } from "react";
import { useLocale } from "@/utils/locale";
import LocaleContext from "../../context/localeContext";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PdfDownloads({ filePath, title, isNew = false }) {
  const { locale } = useContext(LocaleContext);
  const { json } = useLocale(locale)
  if(!title){
    title = json.common.download
  }

  if(!filePath){
    return (<></>)
  }

  return (
    <div className="group">
      <Link 
        href={filePath} 
        target="_blank" 
        className="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300 hover:-translate-y-1 group"
        aria-label={`Download PDF: ${title}`}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          {/* PDF Icon */}
          <div className={`p-4 rounded-full ${isNew ? 'bg-amber-100' : 'bg-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
            <DocumentTextIcon className="w-8 h-8 text-red-600" />
          </div>
          
          {/* Title */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
              {title}
            </h3>
            {isNew && (
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 mt-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-1.5"></span>
                NEW!!
              </span>
            )}
          </div>

        </div>
      </Link>
    </div>
  );
}