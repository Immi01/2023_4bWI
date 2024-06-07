import React from 'react'

export default function Header() {
  return (
    <div className='bg-blue-500 p-4 px-100 flex flex-row'>
        <h1 className='font-semibold text-lg'>
            AnimeList
        </h1>
        <div className='flex flex-row-reverse w-full'>
            <div>list</div>
            <div></div>
        </div>
    </div>
  )
}
