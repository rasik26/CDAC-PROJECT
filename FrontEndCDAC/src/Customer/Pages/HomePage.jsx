import React, { useEffect, useState } from 'react';
import MainCarousel from '../Component/HomeCarsole/MainCarasole';
import HomeSectionCarosel from '../Component/HomeSectionCarosel/HomeSectionCarosel';
import { paintings } from '../Data/paintings';
import productService from '../Data/productService'; // Change import statement

export default function HomePage() {
  const [paintingsData, setPaintingsData] = useState([]);

  useEffect(() => {
    const fetchPaintingsData = async () => {
      try {
        const data = await productService.getProductsByCategory('Painting');
        setPaintingsData(data);
      } catch (error) {
        console.error('Error fetching paintings data:', error);
      }
    };

    fetchPaintingsData();
  }, []);

  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={paintingsData} sectionName={"Paintings"} />
        <HomeSectionCarosel data={paintings} sectionName={"Sculptures"} />
        <HomeSectionCarosel data={paintings} sectionName={"Digital Art"} />
        <HomeSectionCarosel data={paintings} sectionName={"Canvas"} />
      </div>
    </div>
  );
}
