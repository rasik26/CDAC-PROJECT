import React from 'react'
import MainCarousel from '../Component/HomeCarsole/MainCarasole'
import HomeSectionCarosel from '../Component/HomeSectionCarosel/HomeSectionCarosel'
import { paintings } from '../Data/paintings';

export default function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={paintings} sectionName={"Paintings"}/>
        <HomeSectionCarosel data={paintings} sectionName={"Sculptures"}/>
        <HomeSectionCarosel data={paintings} sectionName={"Digital Art"}/>
        <HomeSectionCarosel data={paintings} sectionName={"Canvas"}/>

        </div>
    </div>
  )
}
