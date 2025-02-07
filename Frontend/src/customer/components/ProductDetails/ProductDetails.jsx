"use client";
import React from "react";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import Review from "./Review";
import SimilarProducts from "./SimilarProducts";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { useEffect } from "react";
import { addItemToCart } from "../../../State/Cart/Action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  
  const handleAddToCart = (e) => {
    e.preventDefault()
    const data={productId:params.productId,size:selectedSize.name}
   
    dispatch(addItemToCart(data))
    
    
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(findProductsById(params.productId));
  }, [params.productId]);

  
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/*image*/}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden  rounded-lg max-w-[30rem] max-h-[30rem]">
              <img
                // alt={product.images[0].alt}
                src={products.product?.imageUrl}
                className=" size-full rounded-lg object-cover lg:block object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {/* {product.images.map((image) => (
                <div className="mt-4 aspect-h-2 aspect-w-2 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                  <img
                    alt={image.alt}
                    src={image.src}
                    className=" w-full h-full rounded-lg object-cover object-center"
                  />
                </div>
              ))} */}
            </div>
          </div>

          {/*Product Info*/}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-15 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {products.product?.brand}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 opacity-60 pt-1">
                {products.product?.title}
              </p>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-3 mt-5 items-center text-lg tracking-tight font-semibold lg:text-xl">
                <p className=" text-gray-900 ">
                  ₹{products.product?.discountedPrice}
                </p>
                <p className=" line-through text-green-700 opacity-80">
                  ₹{products.product?.price}
                </p>
                <p className=" text-red-600">
                  {products.product?.discountPersent}% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex space-x-1 items-center">
                  <Rating name="read-only" value={3.5} readOnly />
                  <p className="text-xs text-gray-600 opacity-80">
                    (36566 Ratings)
                  </p>
                  <p className="text-indigo-600 text-sm font-semibold hover:text-indigo-500 pl-3">
                    117 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className='flex gap-2  w-[250px] '
                 
                >
                  {product.sizes.map((size) => (
                    <Radio
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={classNames(
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm '
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        ' group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-4',
                      )}
                    >
                      <span>{size.name}</span>
                      {size.inStock ? (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                        >
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                          >
                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                          </svg>
                        </span>
                      )}
                    </Radio>
                  ))}
                </RadioGroup>
                  </fieldset>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="mt-10 flex w-full lg:w-2/5 sm:w-1/3  items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Add to cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-12 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-sm text-gray-900">{products.product?.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
