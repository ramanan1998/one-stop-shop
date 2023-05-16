import React from 'react';
import { motion } from "framer-motion";

function InfiniteStrip() {
  return (
    <div className="h-52 w-[auto] overflow-hidden flex justify-start items-center">
      <motion.h1 className='font-outfit text-9xl whitespace-nowrap'
        initial={{
            x: 1500
        }}
        
        animate={{
            x: -3000,
            transition: {
                duration: 50,
                repeat: Infinity
            }
        }}
      >
        Style is a <span className='text-[#d500f9]'>Reflection</span> of your <span className='text-[#d500f9]'>Attitude</span> and <span className='text-[#d500f9]'>Personality</span> 
      </motion.h1>
    </div>
  )
}

export default InfiniteStrip