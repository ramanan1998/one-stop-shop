import React, { useState } from 'react'
import { H3, H5 } from '../reusable_components/Typography';
import { PinkButton, PurpleButton } from '../reusable_components/Buttons';
import ProductView from './ProductView';
import ProductDescription from './ProductDescription';

function Product() {

  return (
    <>
      <div className='h-20'></div>
      <div className='flex md:flex-row flex-col'>
        <ProductView/>
        <ProductDescription/>
      </div>
    </>
  )
}

export default Product