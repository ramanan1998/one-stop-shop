import React, { useEffect, useRef } from 'react'
import { H1, H2, H3, H5 } from '../../reusable_components/Typography'
import Card from '../card/Card'
import { PurpleButton } from '../../reusable_components/Buttons'
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'framer-motion';

function FeaturedProducts({type, data}) {


  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="px-2 sm:px-20 py-10 flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 overflow-hidden">
      <motion.div className="flex flex-col items-start gap-10"

        animate={{
          x: isInView ? 0 : -500,
          transition: {
            delay: 0.5,
            damping: 2
          }
        }}
      >
        <H2>{type}</H2>
        <div className='max-w-3xl'>
          <H5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          </H5>
        </div>
        <PurpleButton>SHOP NOW</PurpleButton>
        {/* <PinkButton>SHOP NOW</PinkButton> */}
      </motion.div>
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          :  */}
      <motion.div className='flex flex-col sm:flex-row gap-10 items-start'
        animate={{
          x: isInView ? 0 : 1000,
          transition: {
            delay: 0.5,
            damping: 2
          }
        }}
      >
        {data?.map((item) => <Card item={item} key={item.id} />)}
      </motion.div>
    </div>
  )
}

export default FeaturedProducts