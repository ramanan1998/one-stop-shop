import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

export const CustomCursor = (props) => {

  const { cursor } = useSelector(data => data);
  const [ mousePosition, setMousePosition ] = useState({
    x: -100,
    y: -100
  });

  useEffect(() => {
    const moveMouse = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    window.addEventListener("mousemove", moveMouse);

    return () => window.removeEventListener("mousemove", moveMouse)
  },[]);

  const variant = {
    default: {
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 1000,
          damping: 30
        }
    }
  }

  return (
    <motion.div className={`${cursor.setCustomCursor ? "block" : "hidden"} bg-[#d500f9] text-white font-outfit p-2 rounded-3xl w-fit fixed left-[-20px] top-[-15px] z-[1000] pointer-events-none`}
        variants={variant}
        animate="default"
    >
        {cursor.setCursorText}
    </motion.div>
  )
}
