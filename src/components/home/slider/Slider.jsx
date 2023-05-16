import React, { useState } from 'react';
import { motion } from "framer-motion";

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1328545/pexels-photo-1328545.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const mobileData = [
        "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/952214/pexels-photo-952214.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <>
    <motion.div className="h-screen overflow-hidden"
      initial={{
        y: 500,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1
        }
      }}
    >
      <div className="hidden sm:flex flex-row h-[130vh] w-[300vw] transition-all duration-1000 ease-in" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="img" className='w-[100%] h-[100%] object-cover' />
        <img src={data[1]} alt="img" className='w-[100%] h-[100%] object-cover' />
        <img src={data[2]} alt="img" className='w-[100%] h-[100%] object-cover' />
      </div>
      <div className='sm:hidden flex flex-row h-[100vh] w-[300vw] transition-all duration-1000 ease-in' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={mobileData[0]} alt="img" className='max-w-[100vw] h-[100%] object-cover' />
        <img src={mobileData[1]} alt="img" className='max-w-[100vw] h-[100%] object-cover' />
        <img src={mobileData[2]} alt="img" className='max-w-[100vw] h-[100%] object-cover' />
      </div>
      {/* <div className="hidden sm:flex flex-row h-[130vh] w-[300vw] transition-all duration-1000 ease-in" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <video className='h-[100%] w-[auto] object-contain' src="https://player.vimeo.com/external/500788394.sd.mp4?s=179ca5e4535cf32d9be7bb3636d7180b73a88d61&profile_id=164&oauth2_token_id=57447761" autoPlay></video>
        <video className='h-[100%] w-[auto] object-contain' src="https://player.vimeo.com/external/440307399.sd.mp4?s=548bf83d2fb20b494e8331c3376ef083031ccd6d&profile_id=164&oauth2_token_id=57447761" autoPlay></video>
        <video className='h-[100%] w-[auto] object-contain' src="https://player.vimeo.com/external/565231644.sd.mp4?s=5d95c7980dfeef2de4adb84ed1e41dc89d496059&profile_id=164&oauth2_token_id=57447761" autoPlay></video>
      </div> */}

      <div className="absolute bottom-40 flex flex-row left-[40%] sm:left-[50%] gap-5">
        <div className="border-2 p-1 cursor-pointer" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </div>
        <div className="border-2 p-1 cursor-pointer" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Slider