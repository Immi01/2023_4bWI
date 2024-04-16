import React from 'react'

export default function Button({fn, id}) {
  return (
    <div className='hover:cursor-pointer'
        onClick={fn}
        id={id}>
        Button
    </div>
  )
}
