import React from 'react'

export default function NextGames({Club1, Club2, Clubimg1, Clubimg2}) {
  return (
    <div className="relative border-[1px] border-dark rounded-[10px] w-[322px]
    min-h-[106px] shrink-0 flex h-[135px] justify-evenly items-center">
        <div className="flex flex-col items-center">
            <img src={Clubimg1} width="80px"/>
            <div className="mt-[4px] text-[1.25rem] font-medium"> {Club1} </div>
        </div>
        <span className="text-[1.25rem] font-medium">VS</span>
        <div className="flex flex-col items-center">
            <img src={Clubimg2} width="80px"/>
            <div className="mt-[4px] text-[1.25rem] font-medium"> {Club2} </div>
        </div>
    </div>
  )
}
