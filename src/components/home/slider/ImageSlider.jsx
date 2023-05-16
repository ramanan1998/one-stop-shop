import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { switchCursor } from '../../redux/cursorSlice';

function ImageSlider() {

  const dispatch = useDispatch();
  const [ activeItem, setActiveItem ] = useState(0);
  const motionPropsLeftToRight = {
    initial: {
        opacity: 0.3,
        x: "-100%",
    },
    animate: {
        opacity: 1,
        x: "0%",
        transition: {
            type: "tween",
            stiffness: 10,
            duration: 1
        }
    },
    exit: {
        opacity: 0.3,
        x: "200%",
        transition: {
            type: "tween",
            stiffness: 10,
        }
    }
  }
  const motionPropsRightToLeft = {
    initial: {
        opacity: 0.3,
        x: "200%",
    },
    animate: {
        opacity: 1,
        x: "0%",
        transition: {
            type: "tween",
            stiffness: 10,
            duration: 1
        }
    },
    exit: {
        opacity: 0.3,
        x: "-100%",
        transition: {
            type: "tween",
            stiffness: 10,
        }
    }
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => setActiveItem(activeItem + 1), 4000)

  return (
    <motion.div class="h-[100vh] w-auto grid grid-rows-4 grid-flow-col gap-2"
      initial={{
        y: 500,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 1,
          staggerChildren: 1
        }
      }}
    >
        <div class="relative row-span-2 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "For Men"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight}
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"  
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/2975401/pexels-photo-2975401.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img" 
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
        </div>

        

        <div class="relative row-span-2 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "Shoes"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            {/* <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> */}
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
        </div>

        <div class="relative row-span-4 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "New Collections"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            {/* <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/3489129/pexels-photo-3489129.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> */}
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/3489129/pexels-photo-3489129.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/14476224/pexels-photo-14476224.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsLeftToRight} 
                />}
            </AnimatePresence>
        </div>

        <div class="relative row-span-2 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "For Women"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            {/* <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> */}
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/6923536/pexels-photo-6923536.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/8396728/pexels-photo-8396728.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
        </div>

        <div class="relative row-span-2 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "Accessories"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            {/* <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> */}
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1212048/pexels-photo-1212048.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
        </div>

        <div class="relative row-span-4 col-span-3 overflow-hidden cursor-none"
            onMouseEnter={() => dispatch(switchCursor({setCustomCursor: true, setCursorText: "For Children"}))}
            onMouseLeave={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
            onClick={() => dispatch(switchCursor({setCustomCursor: false, setCursorText: ""}))}
        >
            {/* <img className='w-[100%] h-[100%] object-cover' src="https://images.pexels.com/photos/4450326/pexels-photo-4450326.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> */}
            <AnimatePresence>
                {activeItem % 3 === 0 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/4450326/pexels-photo-4450326.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 1 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/6437818/pexels-photo-6437818.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem % 3 === 2 && <motion.img 
                    className='w-[100%] h-[100%] object-cover absolute' 
                    src="https://images.pexels.com/photos/7139183/pexels-photo-7139183.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="img"
                    {...motionPropsRightToLeft} 
                />}
            </AnimatePresence>
        </div>
    </motion.div>
  )
}

export default ImageSlider