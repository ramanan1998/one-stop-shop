import React from 'react';
import { motion } from "framer-motion";

export const PurpleButton = (props) => {

  return (
    <motion.button className='bg-[#d500f9] text-white font-outfit py-3 px-8 rounded-3xl shadow-md shadow-neutral-400 flex flex-row gap-2'
        whileHover={{
            y: -5
        }}

        whileTap={{
            y: 0
        }}
    >
        {props.children}
    </motion.button>
  )
}

export const PinkButton = (props) => {
    return (
      <motion.button className='bg-[#e91e63] text-white font-outfit py-3 px-8 rounded-3xl shadow-md shadow-neutral-400 flex flex-row gap-2'
        whileHover={{
            y: -5
        }}

        whileTap={{
            y: 0
        }}
      >
          {props.children}
      </motion.button>
    )
  }
