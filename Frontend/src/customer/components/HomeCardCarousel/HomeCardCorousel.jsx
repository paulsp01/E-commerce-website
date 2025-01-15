import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../Homesection/HomeSectionCard';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};

const HomeCardCorousel = ({ data = [], sectionName }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = data.map((item) => (
        <HomeSectionCard
            key={item.id}
            image={item.imageUrl}
            brand={item.brand}
            title={item.title}
        />
    ));

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const handleSlideChanged = (event) => {
        setCurrentIndex(event.item); // Update the current index
    };

    return (
        <div className='relative px-4 lg:px-8'>
            <h2 className='font-bold text-xl px-5'>{sectionName}</h2>
            <div className='relative px-5 py-3'>
                {currentIndex > 0 && (
                    <button 
                        onClick={slidePrev} 
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-gray-800 text-white p-2 rounded-full'
                    >
                        <KeyboardArrowLeftRoundedIcon />
                    </button>
                )}
                <AliceCarousel
                    ref={carouselRef}
                    disableButtonsControls={true}
                    disableDotsControls={true}
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    onSlideChanged={handleSlideChanged}
                />
                {currentIndex < items.length - 1 && (
                    <button 
                        onClick={slideNext} 
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10 bg-gray-800 text-white p-2 rounded-full'
                    >
                        <KeyboardArrowRightRoundedIcon />
                    </button>
                )}
            </div>
        </div>
    );
}

export default HomeCardCorousel;