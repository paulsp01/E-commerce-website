import React from 'react'
import HomeSectionCard from "../Homesection/HomeSectionCard"
import {mens_kurta} from "../../Data/Mens_kurta"

const SimilarProducts = () => {
  return (
    <div>
      <h1 className='pl-4 font-semibold text-lg'>Similar Products</h1>
      <div className='flex items-center justify-center flex-wrap'>
        {mens_kurta.map((item) =>
        <
          HomeSectionCard
          key={item.id}
          image={item.imageUrl}
          brand={item.brand}
          title={item.title}

          />)}
      </div>
    </div>
  )
}

export default SimilarProducts