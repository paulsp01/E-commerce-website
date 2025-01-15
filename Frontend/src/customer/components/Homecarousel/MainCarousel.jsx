import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {MainCarouselData} from "./MainCarouselData";




const MainCarousel = () => {
    const items = MainCarouselData.map((item) => (
        <img className='cursor-pointer h-[450px] w-full' src={item.image} alt={item.productTitle} />
    ));

  return (
    
    <AliceCarousel
        autoPlay
       
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
  )
}

export default MainCarousel