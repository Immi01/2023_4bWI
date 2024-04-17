import React from 'react'
import './Home.css'
import Masthead from '../molecules/Masthead';
import Container from '../atoms/Container';
import SectionHeader from '../atoms/SectionHeader';
import Club from '../atoms/Club';
import TopScorer from '../atoms/TopScorer';

export default function Home() {
  return (
    <div>
      <Masthead/>
      <SectionHeader title={"Vereine"}/>
      <Container content={<Club Club={"FC Bayern"} points={30} img={"https://i.imgur.com/jJEsJrj.png"}/>}/>
      <SectionHeader title={"Top Torschützen"}/>
      <Container content={<TopScorer/>}/>
      <SectionHeader title={"Nächste Spiele"}/>
    </div>
  )
}
