import React from 'react';
import Header from '../components/organisms/Header';
import Categories from '../components/organisms/Categories';
import Banner from '../components/organisms/Banner';
import { data } from '../data';
import Slider from '../components/organisms/Slider';

export default function Home() {
  console.log(data);
  return (
    <div className="bg-gray-100">
        <Header />
        <div className="flex flex-col md:flex-row space-x-2 px-8 md:px-24 py-12">
            <Categories />
            <div className='grid grid-cols-2 grid-flow-col gap-4'>
               <Slider className="row-span-3">
                <Banner src={data.banners[0].src} />
               </Slider>
               <div className='flex flex-col space-y-2'>
                 <Banner className="col-span-2" src={data.banners[1].src} />
                 <Banner className="row-span-2 col-span-2" src={data.banners[2].src} />
               </div>
            </div>
        </div>
    </div>
  );
}