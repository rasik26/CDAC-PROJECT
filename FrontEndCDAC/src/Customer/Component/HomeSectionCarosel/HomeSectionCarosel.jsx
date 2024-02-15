import React, { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function HomeSectionCarousel({data,sectionName}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (e) => setCurrentIndex(e.item);

    const slidePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const slideNext = () => {
        if (currentIndex < data.length - 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const items = data.slice(currentIndex, currentIndex + 5).map(item => (
      <div key={item.id} className="mx-2">
          <HomeSectionCard product={item} />
      </div>
  ))

    return (
        <div className=''>
              <h1 className='text-4xl font-bold text-gray-800 mx-10 py-5'>{sectionName}</h1>
            <div className='relative p-5 flex items-center justify-center'>
                {currentIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant='contained'
                        className='z-50 bg-white left-0'
                        sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', bgcolor: 'white' }}
                        aria-label='prev'
                    >
                        <ArrowBackIosNewIcon sx={{ color: 'black' }} />
                    </Button>
                )}

                <AliceCarousel
                    items={items}
                    responsive={{ 0: { items: 1 }, 568: { items: 2 }, 1024: { items: 5 } }}
                    onSlideChanged={handleSlideChange}
                    disableButtonsControls
                    disableDotsControls
                />

                {currentIndex < data.length - 5 && (
                    <Button
                        onClick={slideNext}
                        variant='contained'
                        className='z-50 bg-white right-0'
                        sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', bgcolor: 'white' }}
                        aria-label='next'
                    >
                        <ArrowForwardIosIcon sx={{ color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
}
