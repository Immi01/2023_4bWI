
document.getElementById("Impressum").addEventListener("click", () => {
    location.href = "/Webdev/API_fussball/Imprint/imprint.html";
})
document.getElementById("Table").addEventListener("click", () => {
    location.href = "/Webdev/API_fussball/Table/table.html";
})

const loadData = ()=>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        });
    });
    fetch("https://api.openligadb.de/getgoalgetters/bl1/2022").then((result)=>{
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
    });
};

const fillTable = (data)=>{
    let html = ""

    for (let i = 0; i < 10; i++) {
        let points = ""
        if (data[i].points < 10) {
            points = "0" + data[i].points;
        } else {
            points = data[i].points;
        }

        html += "<div class='club'>\
<img src='"+ data[i].teamIconUrl +"' width='80px' class='clubImg'>\
<div class='clubTxtCont'>\
<div class='clubName' id='clubName" + i + "'> " + data[i].teamName +" </div>\
<div class='clubPointsCont'><span class='clubPoints' id='clubPoints" + i + "'> " + points + " </span><span class='clubPointsTxt'> Punkte</span></div>\
</div>\
</div>"

    }

    document.getElementById("clubContainer").innerHTML = html;
}

const fillGoalGetters = (data)=>{
    let html = ""
    
    for (let i = 0; i < 5; i++) {
        html += "<div class='club'>\
<div class='topScorer'> " + data[i].goalGetterName + " </div>\
<div class='topScorerScoreContainer'>\
<div class='topScorerPlacement'> #" + i + " </div>\
<div class='topScorerScore'> " + data[i].goalCount + " <span class='topScorerGoals'> Tore </span> </div>\
</div>\
</div>"
    }
    document.getElementById("topScorerContainer").innerHTML = html;
}

const fillNextGames = (data)=>{
    let html = ""
    let element = 0;

    for (let i = 0; i < 5; i++) {

        /*while (data[element].matchIsFinished) {
            element++;
        }
        console.log("test");*/

        html += "<div class='club nextGame'>\
        <div class='nextGameClub'>\
            <img src='5mhxk6cr.bmp' width='80px'>\
            <div class='nextGameText'> FC Bayern </div>\
        </div>\
        <span class='nextGameVs'>VS</span>\
        <div class='nextGameClub'>\
            <img src='5mhxk6cr.bmp' width='80px'>\
            <div class='nextGameText'> FC Bayern </div>\
        </div>\
    </div>"
    }
    document.getElementById("nextGameContainer").innerHTML = html;
}

loadData()