import React from 'react'
import { H3, H5, H6 } from '../reusable_components/Typography'
import { PinkButton } from '../reusable_components/Buttons'

function Cart() {
  return (
    <div
        className='absolute top-20 right-5 border space-y-5 p-5 bg-white shadow-lg shadow-gray'
    >
        <div className='flex flex-row justify-between'>
            <H5>Products in your cart</H5>
            <button className='text-[#e91e63]'>Reset cart</button>
        </div>
        <div className='flex flex-row items-center gap-5'>
            <div className='h-20 w-16 overflow-hidden'>
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/13865706/pexels-photo-13865706.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            </div>
            <div className='w-[400px]'> 
                <p className='font-bold'>Long sleeve graphic T shirt</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam earum quam sint ipsa</p>
                <p className='text-[#d500f9]'>1 x $19.9</p>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
        <div className='flex flex-row items-center gap-5'>
            <div className='h-20 w-16 overflow-hidden'>
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/13865706/pexels-photo-13865706.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            </div>
            <div className='w-[400px]'> 
                <p className='font-bold'>Long sleeve graphic T shirt</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam earum quam sint ipsa</p>
                <p className='text-[#d500f9]'>1 x $19.9</p>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
        <div className='flex flex-row items-center gap-5'>
            <div className='h-20 w-16 overflow-hidden'>
                <img className='h-full w-full object-cover' src="https://images.pexels.com/photos/13865706/pexels-photo-13865706.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            </div>
            <div className='w-[400px]'> 
                <p className='font-bold'>Long sleeve graphic T shirt</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam earum quam sint ipsa</p>
                <p className='text-[#d500f9]'>1 x $19.9</p>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
        <div className='flex flex-row justify-between px-10'>
            <H6>SUBTOTAl</H6>
            <H6>$19.9</H6>
        </div>
        <PinkButton>Proceed to checkout</PinkButton>
    </div>
  )
}

export default Cart