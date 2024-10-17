// components/ProfileCardList.js
import React, { useContext } from 'react';
import ProfileCard from './detail';
import Section from '../../section';
import Title from '../../text/title';
import LocaleContext from '../../../context/localeContext';
import { useLocale } from '../../../../utils/locale';
import { ACCESABLE_IMAGE_PATH, DOWNLOAD_IMAGE_EXTENSION } from '../../../../const';

const ProfileCardList = ({staffList, roleList}) => {
    const { locale } = useContext(LocaleContext);
    const { json } = useLocale(locale)

    const rList = []
    for(const role of roleList){
      const entity = new RoleEntity(role, locale=="ja")
      rList.push(entity)
    }

    const list = []
    for(const staff of staffList){
      const entity = new StaffEntity(staff, locale == "ja", rList)
      list.push(entity)
    }
    list.sort((a, b) => a.ordering - b.ordering)


  return (
    <Section>
      <div className="container mx-auto">
        <div className="mb-5"><Title title={json.navigation.staff} fontSize = "text-2xl sm:text-3xl lg:text-4xl"/></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 justify-items-center">
        {list.map((profile, index) => (
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

class RoleEntity{
  constructor(item, isJpn){
    this.role = item.properties["role"].select.name
    this.title = isJpn ? item.properties["title"].title[0].text.content : item.properties["en"].rich_text[0].text.content
  }
}



class StaffEntity{
  constructor(item, isJpn, roleList){

    this.name = isJpn ? item.properties["name"].title[0].text.content : item.properties["name_en"].rich_text[0].text.content
    this.text = null
    if(isJpn){
        if(item.properties["text"].rich_text[0]){
            this.text = item.properties["text"].rich_text
        }
    } else {
        if(item.properties["text_en"].rich_text[0]){
            this.text = item.properties["text_en"].rich_text
        }
    }

    const roles = item.properties["role"].multi_select
    
    this.role = []
    for(const role of roleList){
      for(const tmpRole of roles){
        if(role.role == tmpRole.name){
          this.role.push(role)
        }
      }
    }

    console.log(this.role)

    this.image = null
    if(item.properties["image"] && item.properties["image"].files[0]){
      const tmpName = item.properties["image"].files[0].name
      const name = tmpName.replace(/ /g, '_')
      this.image = `/${ACCESABLE_IMAGE_PATH}/staff/${name}${DOWNLOAD_IMAGE_EXTENSION}`
    }
    
    this.ordering =  item.properties["ordering"].number

  }
}