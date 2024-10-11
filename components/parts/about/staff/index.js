// components/ProfileCardList.js
import React, { useContext } from 'react';
import ProfileCard from './detail';
import Section from '../../section';
import Title from '../../text/title';
import LocaleContext from '../../../context/localeContext';
import { useLocale } from '../../../../utils/locale';

const ProfileCardList = () => {
    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)
  
  const profiles = [
    {
      name: "Carole Steward",
      title: "Chief Executive Officer",
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      description: "Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a wealth of experience in the corporate world, she has a proven track record of driving innovation and achieving remarkable business growth."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    {
      name: "John Doe",
      title: "Chief Technology Officer",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      description: "John Doe is an innovative CTO with extensive experience in tech development and strategy. He leads teams to success through his dynamic approach and technical expertise."
    },
    // 他のプロファイルを追加できます
  ];

  return (
    <Section>
      <div className="container px-6 mx-auto">
        <div className="mb-5"><Title title={json.navigation.staff} fontSize = "text-2xl sm:text-3xl lg:text-4xl"/></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 pt-10 justify-items-center">
        {profiles.map((profile, index) => (
            <ProfileCard
            key={index}
            item={profile}
            />
        ))}
        </div>
      </div>
    </Section>
  );
};

export default ProfileCardList;
