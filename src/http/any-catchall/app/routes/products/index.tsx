import React from 'react';
import { useRouteData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import ProductItem from '../../components/ProductItem';

import products from '../../data/product.json';

interface Product {
  name: string;
  description: string;
  img: string;
  imgDetail: string;
  slug: string;
}

export let loader: LoaderFunction = () => {
  // you can point to whatever org you want, ofc
  return products;
};

export default function Team() {
  let data = useRouteData<Product[]>();

  return (
    <div>
      <h2 className='text-white text-center text-xl'>Products</h2>

      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {data.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </ul>
    </div>
  );
}
