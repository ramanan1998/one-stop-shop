import React, { useState } from 'react'

function ProductView() {

  const [ activeImage, setActiveImage ] = useState(0);
  const productImages = [
    "https://images.pexels.com/photos/15052339/pexels-photo-15052339.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/14823052/pexels-photo-14823052.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/15031656/pexels-photo-15031656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ];

  return (
    <div className='p-2 md:p-10 flex flex-col-reverse md:flex-row gap-2 md:gap-10 justify-between flex-1'>
        <div className='flex flex-row md:flex-col gap-2 md:gap-10'>
        {productImages.map((img, i) => (
            <div
            onClick={() => setActiveImage(i)} 
            className='h-24 w-24 overflow-hidden cursor-pointer'
            >
            <img className='h-full w-full object-cover' src={img} alt="img" />
            </div>
        ))}
        </div>
        <div className='h-[500px] w-full overflow-hidden cursor-pointer'>
        <img className='h-full w-full object-cover' src={productImages[activeImage]} alt="img" />
        </div>
    </div>
  )
}

export default ProductView