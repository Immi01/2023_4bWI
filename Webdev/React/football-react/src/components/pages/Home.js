import React from 'react'
import './Home.css'
import Masthead from '../molecules/Masthead';
import SectionHeader from '../atoms/SectionHeader';

export default function Home() {
  return (
    <div>
      <Masthead/>
      <SectionHeader title={"Vereine"}/>
      <SectionHeader title={"Top Torschützen"}/>
      <SectionHeader title={"Nächste Spiele"}/>
    </div>
  )
}
