import React from 'react'

export default function SectionHeader({title, mt}) {

  let margin = {marginTop: mt};
  let style = "ml-[30px] text-h1 font-bold";

  return (
    <div className={style} style={margin}>{title}</div>
  )
}
