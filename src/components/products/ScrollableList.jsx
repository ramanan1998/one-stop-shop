import React from 'react'
import Card from '../home/card/Card'

function ScrollableList(props) {

  return (
    <div className='flex flex-row justify-between gap-y-5 flex-wrap overflow-x-hidden w-[100%]'>
        {props.data.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default ScrollableList