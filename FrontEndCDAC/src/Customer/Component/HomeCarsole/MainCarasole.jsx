import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarsoleData } from './MainCarsoleData';

export default function MainCarasole() {
    const items = mainCarsoleData.map((item, index) => (
        <img
            key={index}
            className='cursor-pointer'
            role='presentation'
            src={item.image}
            alt={`Image ${index}`}
            style={{ height: '80vh', width: '100%', objectFit: 'cover' }}
        />
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    );
}
