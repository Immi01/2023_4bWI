import React, { useEffect, useState } from 'react';
import './Home.css';
import Masthead from '../molecules/Masthead';
import Container from '../atoms/Container';
import SectionHeader from '../atoms/SectionHeader';
import Club from '../atoms/Club';
import TopScorer from '../atoms/TopScorer';
import NextGames from '../atoms/NextGames';

export default function Home() {

  const [Clubs, setClubs] = useState([]);

  useEffect(() =>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        });
    });
    /*fetch("https://api.openligadb.de/getgoalgetters/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillGoalGetters(data);
        });
    });
    fetch("https://api.openligadb.de/getmatchdata/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillNextGames(data);
        });
    });*/
  }, [])

  const fillTable = (data)=>{
    let html = ""

    for (let i = 0; i < 10; i++) {
        let points = ""
        if (data[i].points < 10) {
            points = "0" + data[i].points;
        } else {
            points = data[i].points;
        }

        html += <Club img={data[i].teamIconUrl} Club={data[i].teamName} points={points}/>
        setClubs(html);
    }
  }

  const fillGoalGetters = (data)=>{
    let html = ""
    
    for (let i = 0; i < 5; i++) {
        html += ""
    }
    document.getElementById("topScorerContainer").innerHTML = html;
  }

  const fillNextGames = (data)=>{
    let html = ""
    let element = 0;

    for (let i = 0; i < 5; i++) {

    }
    document.getElementById("nextGameContainer").innerHTML = html;
  }


  return (
    <div>
      <Masthead/>
      <SectionHeader title={"Vereine"}/>
      <Container content={Clubs}/>
      <SectionHeader title={"Top Torschützen"}/>
      <Container content={<TopScorer Scorer={"Manuel Neuer"} score={3} placment={1}/>}/>
      <SectionHeader title={"Nächste Spiele"}/>
      <Container content={<NextGames Club1={"FC Bayern"} Club2={"RB Leipzig"} Clubimg1={"https://i.imgur.com/jJEsJrj.png"} Clubimg2={"https://i.imgur.com/Rpwsjz1.png"}/>}/>
    </div>
  )
}
