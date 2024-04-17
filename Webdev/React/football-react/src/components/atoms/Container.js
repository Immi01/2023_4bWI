import React from 'react'

export default function Container({content}) {
  return (
    <div className='flex mt-[25px] ml-[65px] gap-x-[21px] gap-y-[24px] flex-wrap'>
        {content}
    </div>
  )
}
