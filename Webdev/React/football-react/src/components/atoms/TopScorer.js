import React from 'react'

export default function topScorer({Scorer, placment, score}) {
  return (
    <div>
        <div class="relative border-[1px] border-dark rounded-[10px] w-[322px]
    min-h-[106px] shrink-0">
            <div class="relative top-[10px] w-100% text-center text-[1.5rem] font-medium"> {Scorer} </div>
            <div class="relative top-[10px] flex justify-around">
                <div class="text-[2.8125rem] font-bold"> #{placment} </div>
                <div class="text-[2.8125rem] font-bold"> {score} <span class="text-[2.25rem] font-medium"> Tore </span> </div>
            </div>
        </div>
    </div>
  )
}
