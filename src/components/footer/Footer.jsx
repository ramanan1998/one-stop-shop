import React from 'react';
import paymentsImg from "../../assets/payment.png";
import { H2, H3, H5 } from '../reusable_components/Typography';

function Footer() {
  return (
    <div className='flex flex-col py-5 px-1 sm:px-10 gap-10'>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col max-w-4xl p-1 sm:p-5">
          <H5>Categories</H5>
          <span className='text-slate-600'>Women</span>
          <span className='text-slate-600'>Men</span>
          <span className='text-slate-600'>Shoes</span>
          <span className='text-slate-600'>Accessories</span>
          <span className='text-slate-600'>New Arrivals</span>
        </div>
        <div className="flex flex-col max-w-4xl p-1 sm:p-5">
          <H5>Links</H5>
          <span className='text-slate-600'>FAQ</span>
          <span className='text-slate-600'>Pages</span>
          <span className='text-slate-600'>Stores</span>
          <span className='text-slate-600'>Compare</span>
          <span className='text-slate-600'>Cookies</span>
        </div>
        <div className="flex flex-col max-w-4xl p-1 sm:p-5 text-justify">
          <H5>About</H5>
          <span className='text-slate-600'>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="flex flex-col max-w-4xl p-1 sm:p-5 text-justify">
          <H5>Contact</H5>
          <span className='text-slate-600'>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="left">
          <H5>
            ONE STOP SHOP
            <span>
                © Copyright 2023. All Rights Reserved
            </span>
          </H5>
        </div>
        <div className="sm:h-[70px] sm:w-[500px] object-cover">
          <img src={paymentsImg} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Footer