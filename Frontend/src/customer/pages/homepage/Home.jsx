import React from 'react';
import MainCarousel from '../../components/Homecarousel/MainCarousel';
import HomeCardCorousel from '../../components/HomeCardCarousel/HomeCardCorousel';
import { mens_kurta } from '../../Data/Mens_kurta';
import { mens_shirt } from '../../Data/Mens_shirt';
import { mens_shoes } from '../../Data/Mens_shoes';
import { womens_saree } from '../../Data/Womens_saree';
import { womens_dress } from '../../Data/Womens_dress';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center'>
           <HomeCardCorousel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeCardCorousel data={mens_shoes} sectionName={"Men's Shoes"}/>
           <HomeCardCorousel data={mens_shirt} sectionName={"Men's Shirt"}/>
           <HomeCardCorousel data={womens_saree} sectionName={"Women's Saree"}/>
           <HomeCardCorousel data={womens_dress} sectionName={"Women's Dress"}/>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;