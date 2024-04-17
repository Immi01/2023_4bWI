import React, { useEffect, useState } from 'react';
import './Home.css';
import Masthead from '../molecules/Masthead';
import Container from '../atoms/Container';
import SectionHeader from '../atoms/SectionHeader';
import Club from '../atoms/Club';
import TopScorer from '../atoms/TopScorer';
import NextGames from '../atoms/NextGames';

export default function Home() {

  const [clubs, setclubs] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  var counter = 0;

  useEffect(() =>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            data.splice(10);
            setclubs(data);
          });
    });
    fetch("https://api.openligadb.de/getgoalgetters/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            data.splice(5);
            setTopScorers(data);
        });
    });
    /*fetch("https://api.openligadb.de/getmatchdata/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillNextGames(data);
        });
    });*/
  }, [])

  return (
    <div>
      <Masthead/>
      <SectionHeader title={"Vereine"}/>
      <Container content={clubs.map((data)=>{
        console.log("yes")
        let points = ""
        if (data.points < 10) {
            points = "0" + data.points;
        } else {
            points = data.points;
        }
        return(<Club img={data.teamIconUrl} Club={data.teamName} points={points}/>)
      })}/>
      <SectionHeader title={"Top Torschützen"}/>
      <Container content={topScorers.map((data)=>{
        counter++;
        return(<TopScorer Scorer={data.goalGetterName} score={data.goalCount} placment={counter}/>)
      })}/>
      <SectionHeader title={"Nächste Spiele"}/>
      <Container content={<NextGames Club1={"FC Bayern"} Club2={"RB Leipzig"} Clubimg1={"https://i.imgur.com/jJEsJrj.png"} Clubimg2={"https://i.imgur.com/Rpwsjz1.png"}/>}/>
    </div>
  )
}
