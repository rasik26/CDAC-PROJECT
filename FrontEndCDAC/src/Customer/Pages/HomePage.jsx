import React, { useEffect, useState } from 'react';
import MainCarousel from '../Component/HomeCarsole/MainCarasole';
import HomeSectionCarosel from '../Component/HomeSectionCarosel/HomeSectionCarosel';
import productService from '../Data/productService'; // Change import statement

export default function HomePage() {
  const [paintingsData, setPaintingsData] = useState([]);
  const [sculpturesData, setSculpturesData] = useState([]);
  const [digitalArtData, setDigitalArtData] = useState([]);
  const [canvasData, setCanvasData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paintings = await productService.getProductsByCategory('Paintings');
        const sculptures = await productService.getProductsByCategory('Sculpture');
        const digitalArt = await productService.getProductsByCategory('Digital');
        const canvas = await productService.getProductsByCategory('Canvas');

        setPaintingsData(paintings);
        setSculpturesData(sculptures);
        setDigitalArtData(digitalArt);
        setCanvasData(canvas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MainCarousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={paintingsData} sectionName={"Paintings"} />
        <HomeSectionCarosel data={sculpturesData} sectionName={"Sculptures"} />
        <HomeSectionCarosel data={digitalArtData} sectionName={"Digital Art"} />
        <HomeSectionCarosel data={canvasData} sectionName={"Canvas"} />
      </div>
    </div>
  );
}
