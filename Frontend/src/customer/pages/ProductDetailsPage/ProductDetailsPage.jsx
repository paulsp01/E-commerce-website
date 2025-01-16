import React from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import Review from "../../components/ProductDetails/Review"
import SimilarProducts from "../../components/ProductDetails/SimilarProducts"

const ProductDetailsPage = () => {
  return (
    <div>
        <ProductDetails/>
         <div className='pb-20'>
              <Review/>
              </div>
              <SimilarProducts/>
    </div>
  )
}

export default ProductDetailsPage


