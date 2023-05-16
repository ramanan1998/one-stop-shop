import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { H6 } from '../../reusable_components/Typography'
import { motion } from 'framer-motion'
import { CustomCursor } from '../../reusable_components/CustomCursor'
import { useDispatch } from 'react-redux'
import { switchCursor } from '../../redux/cursorSlice'

function Card({item}) {

  const dispatch = useDispatch();

  // console.log(customCursor);
  
  return (
    <>
    {/* <Link to={`/products/${item.id}`}> */}
      <div className="h-auto w-[95vw] sm:w-[250px]">
        <motion.div className="relative h-[400px] sm:h-[350px] w-[100%] cursor-none"
          onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "View"}))}
          onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
          onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
          {/* {item?.isNew && <span className=''>New Season</span>} */}
          <motion.img
            src={item.img}
            alt="img"
            className="absolute w-[100%] h-[100%] object-cover"
            
          />
          <motion.img
            src={item.img2}
            alt="img"
            className="absolute w-[100%] h-[100%] object-cover"
            whileHover={{
              opacity: 0
            }}
          />
        </motion.div>
        <div className="text-center p-5">
          <H6>{item?.title}</H6>
          <H6 className="text-slate-600 text-xl font-outfit">From ${item?.currPrice}</H6>
        </div>
      </div>
    {/* </Link> */}
    </>
  )
}

export default Card

