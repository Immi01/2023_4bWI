import React from 'react'
import { Link } from 'react-router-dom'

export default function Masthead() {
  return (
    <div class="w-screen border-solid border-b-2 border-dark h-[87px]">
        <Link to="/" class="relative left-[20px] top-[22px] w-25rem">
            <span class="material-icons text-h1">
                sports_soccer
            </span>
            <h1 class="text-h1 font-semibold p-0 w-90 inline align-bottom">
                Football-Website
            </h1>
        </Link>
        
        <Link to="/table" class="text-h2 font-medium absolute left-[475px] top-[26px]">
            Tabelle
        </Link>
        
        <div class="absolute right-[30px] top-[36px]">
            <Link to="/imprint" class="w-[6rem]">
                Impressum
            </Link>
        </div>
    </div>
  )
}
