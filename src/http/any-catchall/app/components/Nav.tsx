import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='flex justify-between'>
      <div>
        <Link to='/'>Logo</Link>
      </div>
      <ul className='flex flex-row uppercase text-lg text-white'>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='my-0 mx-4 pr-5'>
          <Link to='/about'>About</Link>
        </li>
        {/* <li className='my-0 mx-4 pr-5'>Sign In</li> */}
      </ul>
    </nav>
  );
}
