// components/ProfileCard.js
import React from 'react';

const ProfileCard = ({item}) => {
   const { name, title, image, description } = item
  return (
      <div className="flex relative my-10  lg:max-w-sm mx-auto py-5 px-5">
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                <img
                    src={image}
                    className="rounded-full object-cover h-full w-full shadow-md"
                    alt="Profile"
                />
                </div>
            </div>
            <div className="p-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">{name}</h1>
                <p className="text-gray-800 text-sm text-center">{title}</p>
                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {description}
                </p>
            </div>
        </div>
      </div>
  );
};

export default ProfileCard;
