import React from 'react'
import { H2, H4, H6 } from '../reusable_components/Typography'
import ScrollableList from './ScrollableList'

function Products() {
  
    const trendingProducts = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/9789384/pexels-photo-9789384.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/8483832/pexels-photo-8483832.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Trending Collections for Women",
            isNew: true, 
            oldPrice: 19,
            currPrice: 20
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Trending Collections for Men",
          isNew: true, 
          oldPrice: 19,
          currPrice: 18
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/7169754/pexels-photo-7169754.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Trending Collections for Children",
          isNew: true, 
          oldPrice: 19,
          currPrice: 12
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/7169754/pexels-photo-7169754.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Trending Collections for Children",
            isNew: true, 
            oldPrice: 19,
            currPrice: 12
          },
          {
            id: 5,
            img: "https://images.pexels.com/photos/7169754/pexels-photo-7169754.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Trending Collections for Children",
            isNew: true, 
            oldPrice: 19,
            currPrice: 12
          },
        
        
    ]

  return (
    <>
    <div className='h-20'></div>
    <div className='relative flex flex-row justify-between' >
        <div className='hidden sm:flex flex-col gap-5 p-10 h-full sticky top-10'>
            <div>
                <H6>Hot and Trendy collections for</H6>
                <H2>Men</H2>
            </div>
            <div>
                <H4>Product Categories</H4>
                <div className='py-2 flex flex-row items-center justify-start'>
                    <input className='cursor-pointer' type="checkbox" name="casuals" id="casuals" value="casuals" />
                    <label className='ml-2 cursor-pointer' htmlFor="casuals">
                        <H6>Casuals</H6>
                    </label>
                </div>
                <div className='py-2 flex flex-row items-center justify-start'>
                    <input className='cursor-pointer' type="checkbox" name="trendy" id="trendy" value="trendy" />
                    <label className='ml-2 cursor-pointer' htmlFor="trendy">
                        <H6>Trendy</H6>
                    </label>
                </div>
                <div className='py-2 flex flex-row items-center justify-start'>
                    <input className='cursor-pointer' type="checkbox" name="professional" id="professional" value="professional" />
                    <label className='ml-2 cursor-pointer' htmlFor="professional">
                        <H6>Professional</H6>
                    </label>
                </div>
            </div>
            <div>
                <H4>Filter by Price</H4>
                <div className='py-2 flex flex-row items-center justify-start gap-5'>
                    <H6><span>0</span></H6>
                    <input type="range" name="" id="" min={0} max={1000} />
                    <H6><span>1000</span></H6>
                </div>
            </div>
            <div>
                <H4>Sort by</H4>
                <div className='py-2 flex flex-row items-center justify-start gap-5'>
                    <input className='cursor-pointer' type="radio" name="sort" id="price-lowest" value="price-lowest" />
                    <label className='ml-2 cursor-pointer' htmlFor="price-lowest">
                        <H6>Price (Lowest first)</H6>
                    </label>
                </div>
                <div className='py-2 flex flex-row items-center justify-start gap-5'>
                    <input className='cursor-pointer' type="radio" name="sort" id="price-highest" value="price-highest" />
                    <label className='ml-2 cursor-pointer' htmlFor="price-highest">
                        <H6>Price (Highest first)</H6>
                    </label>
                </div>
            </div>
        </div>
        <div className='max-w-[100%] sm:max-w-[75%] flex flex-col gap-10 p-2 sm:p-10'>
            <div className='h-52 w-[100%]'>
                <img className='h-[100%] w-[100%] object-cover' src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" />
            </div>
            <div className='h-auto max-w-[100%]'>
                <ScrollableList data={trendingProducts}></ScrollableList>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products