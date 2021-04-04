import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <li
      key={product.name}
      className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
    >
      <div className='flex-1 flex flex-col p-8'>
        <img
          className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'
          src={product.img}
          alt={product.name}
        />
        <h3 className='mt-6 text-brand-primary text-med font-medium'>
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
      </div>
    </li>
  );
}
