import React from 'react'

export default function SectionHeader({title, mt}) {

  let margin = mt ? mt : 37;

  let style = `mt-[${margin}px] ml-[30px] text-h1 font-bold`;

  return (
    <div className={style}>{title}</div>
  )
}
