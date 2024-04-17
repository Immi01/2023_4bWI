import React from 'react'

export default function Club({Club, points, img}) {
  return (
    <div className='relative border-[1px] border-dark rounded-[10px] w-[322px]
    min-h-[106px] shrink-0'>
        <img src={img} width="80px" className="w-[5rem] h-auto m-[10px] mr-0 float-left"/>
        <div className="mt-[14px] float-right mr-[5px] w-[13.5rem]">
            <span className="text-[1.25rem] font-medium ml-[6px]"> {Club} </span>
            <div className="mt-[1px]"><span className="text-[3rem] font-bold">{points}</span><span class="text-[2.25rem] font-medium"> Punkte</span></div>
        </div>
    </div>
  )
}
