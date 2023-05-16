import React, { useState } from 'react'
import { H3, H5 } from '../reusable_components/Typography'
import { PurpleButton } from '../reusable_components/Buttons'

function ProductDescription() {
  
  const [ itemCount, setItemCount ] = useState(1);

  return (
    <div className='p-2 md:p-10 flex flex-col gap-5 flex-1'>
        <H3>
            Long sleeve shirt
        </H3>
        <H3 className="text-[#e91e63]">
            $19.9
        </H3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolorem tempore? Doloribus obcaecati labore doloremque delectus ipsam odio excepturi! Illo repellendus porro optio. Accusantium, repudiandae id eum maiores iste praesentium?
        </p>
        <div className='flex flex-row items-center gap-5'>
            <button
                onClick={() => itemCount < 10 && setItemCount(prev => prev + 1)}
                className='bg-gray-200 p-2'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}         stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
            <div>
            <H5>{itemCount}</H5>
            </div>
            <button 
                onClick={() => itemCount > 1 && setItemCount(prev => prev - 1)}
                className='bg-gray-200 p-2'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
        </div>
        <div>
            <PurpleButton>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Add to cart
            </PurpleButton>
        </div>
        <div className='flex flex-row gap-5'>
            <button className='flex flex-row gap-3 items-center p-2 text-[#e91e63] rounded-[5px] ease-in duration-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                Add to wishlist
            </button>
            <button className='flex flex-row gap-3 items-center p-2 text-[#e91e63] rounded-[5px] ease-in duration-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
                Compare products
            </button>
        </div>
    </div>
  )
}

export default ProductDescription