import React from 'react';
import { useRouteData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';

import data from '../../data/product.json';

interface Product {
  name: string;
  description: string;
  img: string;
  imgDetail: string;
  slug: string;
}

export let loader: LoaderFunction = ({ params }) => {
  const product = data.find((product) => product.slug === params.slug);
  console.log(product);

  return product;
};

export default function Product() {
  let product = useRouteData();
  console.log('Current Procuct', product);
  return (
    <>
      <h2>Product</h2>

      <div className='sm:flex bg-white container mx-auto'>
        <div className='w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left'>
          <div className='md:flex items-center -mx-10'>
            <div className='w-full md:w-1/2 px-10 mb-10 md:mb-0'>
              <div className='relative'>
                <img
                  src={product.imgDetail}
                  className='w-full relative z-10'
                  alt={product.name}
                />
                <div className='border-4 border-brand-primary absolute top-10 bottom-10 left-10 right-10 z-0'></div>
              </div>
            </div>
            <div className='w-full md:w-1/2 px-10'>
              <div className='mb-10'>
                <h1 className='font-bold uppercase text-2xl mb-5'>
                  {product.name}
                </h1>
                <p className='text-sm'>{product.description}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
