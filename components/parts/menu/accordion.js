import { useState } from 'react';
import Paragraphs from '../text/paragraphs';
import Image from 'next/image';
import { GlobeAsiaAustraliaIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
const ContributionAccordion = ({ list }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 p-6">
      {list.map((item, index) => (
        <div key={item.id} className='w-full '>
          <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left p-4 border-b hover:bg-gray-300 transition duration-200">
            <div className='flex-1'>
                {item.title} 
            </div>
            {openIndex === index && ( <ChevronUpIcon className='ml-auto w-5 h-5 ml-2' /> )}
            {openIndex !== index && ( <ChevronDownIcon className='ml-auto w-5 h-5 ml-2' /> )}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-200">
              {item.image && (
                <div className='w-full'>
                  <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <div className='flex-1 text-center'>
                      <Image src={item.image} width={300} height={300} alt={item.title} className="rounded-lg object-cover mb-2" loading="lazy" decoding="async"/>
                    </div>
                    <div className='flex-1'>
                      <Paragraphs text={item.text} />
                    </div>
                  </div>
                  {item.btnLabel && item.btnLink && (
                    <div className="mt-6 sm:-mx-2 text-center">
                        <a href={item.btnLink} className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            <GlobeAsiaAustraliaIcon  className="w-5 h-5 mx-2 fill-current" />
                            <span className="mx-2">
                                {item.btnLabel}
                            </span>
                        </a>
                    </div>
                  )}
                </div>
              )}
              {!item.image && (
                <>
                <Paragraphs text={item.text} />
                {item.btnLabel && (
                  <div className="mt-6 sm:-mx-2">
                      <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          <GlobeAsiaAustraliaIcon  className="w-5 h-5 mx-2 fill-current" />
                          <span className="mx-2">
                              {item.btnLabel}
                          </span>
                      </a>
                  </div>
                )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContributionAccordion;
