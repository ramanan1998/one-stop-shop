import React from 'react'
import Slider from './slider/Slider'
import FeaturedProducts from './featured_products/FeaturedProducts'
import InfiniteStrip from './infinite_strip/InfiniteStrip'
import ImageSlider from './slider/ImageSlider'

function Home() {

  const featuredProducts = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1966688/pexels-photo-1966688.jpeg?auto=compress&cs=tinysrgb&w=600",
        img2: "https://images.pexels.com/photos/2119224/pexels-photo-2119224.jpeg?auto=compress&cs=tinysrgb&w=600",
        title: "Featured Long Sleeve for Women",
        isNew: true, 
        oldPrice: 19,
        currPrice: 12
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Featured Long Sleeve Tee's for Men",
      isNew: true, 
      oldPrice: 19,
      currPrice: 12
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/969373/pexels-photo-969373.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1620826/pexels-photo-1620826.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "New and improved collections for Kids",
      isNew: true, 
      oldPrice: 19,
      currPrice: 12
  },

  ]

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

  ]
  return (
    <>
    <div className='h-20'></div>
    <div>
        {/* <Slider/> */}
        <ImageSlider/>
        <InfiniteStrip/>
        <FeaturedProducts type="Featured" data={featuredProducts}/>
        <FeaturedProducts type="Trending" data={trendingProducts}/>
    </div>
    </>
  )
}

export default Home