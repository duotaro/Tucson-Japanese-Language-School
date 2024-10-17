// components/ProfileCard.js
import React from 'react';
import Paragraphs from '../../text/paragraphs';
import Image from 'next/image';

const ProfileCard = ({item}) => {
   const { name, role, image, text } = item
  return (
    //   <div className="flex relative my-10 w-full mx-auto py-5 px-5">
    //     <div className="rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
    //         <div className="absolute -mt-20 w-full flex justify-center">
    //             <div className="h-32 w-32">
    //             <img
    //                 src={image}
    //                 className="rounded-full object-cover h-full w-full shadow-md"
    //                 alt="Profile"
    //             />
    //             </div>
    //         </div>
    //         <div className="p-6 mt-16 w-full">
    //             <h1 className="font-bold text-3xl text-center mb-1">{name}</h1>
    //             <p className="text-blue-800 text-sm text-center font-semibold">
    //             {role.map((r, index) => {
    //                 return (
    //                 <>
    //                 {index == 0 && (
    //                     <br />
    //                 )}
    //                 {index != 0 && (
    //                     <> / </>
    //                 )}
    //                 {r.title}
    //                 </>
    //                 )
    //             })}
    //             </p>
    //             <div className="w-full">
    //               <Paragraphs text={text} />
    //             </div>
    //         </div>
    //     </div>
    //   </div>
      <div data-popover="profile-info-popover"
      class="min-w-[95%] max-w-[95%] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
      <div class="flex items-center justify-center gap-4 mb-2">
          <Image
                    src={image}
                    class="relative inline-block object-cover object-center w-24 h-24 rounded-full"
                    alt="Profile"
                    width={40}
                    height={40}
                />
          <div>
            <h2 className="font-bold text-2xl text-center">{name}</h2>
            <p className="text-blue-800 text-sm text-center font-semibold">
                {role.map((r, index) => {
                    return (
                    <>
                    {index == 0 && (
                        <br />
                    )}
                    {index != 0 && (
                        <> / </>
                    )}
                    {r.title}
                    </>
                    )
                })}
            </p>
        </div>
      </div>
      
      <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 min-w-[100%] p-3">
        <Paragraphs text={text} />
      </p>
    </div>
  );
};

export default ProfileCard;
