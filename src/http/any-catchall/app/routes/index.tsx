import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from '@remix-run/react';
import { useRouteData } from '@remix-run/react';

import tailwind from '../styles/tailwind.css';
import styles from '../styles/app.css';

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: styles },
  ];
};

export let loader: LoaderFunction = () => {
  return { message: 'this is awesome 😎' };
};

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2 className='text-2xl text-white font-bold uppercase'>
        What are you looking for today?
      </h2>
      <div
        className='w-full mx-auto rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl'
        x-data='app()'
        x-init='generatePassword()'
      >
        <div className='relative mt-1'>
          <input
            type='text'
            id='password'
            className='w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors'
            placeholder='Search...'
          />
          <button className='block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors'>
            <i className='mdi mdi-magnify'></i>
          </button>
        </div>
        <div className='absolute top-0 left-0 w-full h-2 flex'>
          <div className='h-2 bg-brand-primary flex-1'></div>
        </div>
      </div>
    </div>
  );
}
