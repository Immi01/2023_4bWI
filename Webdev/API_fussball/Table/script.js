document.getElementById("Header").addEventListener("click", () => {
    location.href = "/Webdev/API_fussball/index.html";
})
document.getElementById("Impressum").addEventListener("click", () => {
    location.href = "/Webdev/API_fussball/Imprint/imprint.html";
})


const loadData = ()=>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            fillTable(data);
        });
    });
};

const fillTable = (data)=>{
    let html = "";

    for (let i = 0; i < data.length; i++) {
        let points = ""
        if (data[i].points < 10) {
            points = "0" + data[i].points;
        } else {
            points = data[i].points;
        }
        html += "<div class='ClubContainer'>\
<img src='"+ data[i].teamIconUrl +"' class='Banner'>\
<div class='center'>\
<div class='GeneralContainer'>\
<div class='txt top'>\
" + data[i].shortName + "\
</div>\
<div>\
<span class='Points'>" + points + "</span> <span class='PointsTxt'> Punkte</span>\
</div>\
</div>\
</div>\
<div class='seperator'></div>\
<div class='MatchesContainer'>\
<div>\
<div class='top kda'>Siege</div>\
<div class='notPoints'>"+ data[i].won +"</div>\
</div>\
<div>\
<div class='top kda'>Unentschieden</div>\
<div class='notPoints'>"+ data[i].draw +"</div>\
</div>\
<div>\
<div class='top kda'>Niederlagen</div>\
<div class='notPoints'>"+ data[i].lost +"</div>\
</div>\
</div>\
<div class='seperator'></div>\
<div class='MatchesContainer'>\
<div>\
<div class='top kda'>Tore</div>\
<div class='notPoints'>"+ data[i].goals + ":" + data[i].opponentGoals +"</div>\
</div>\
<div>\
<div class='top kda'>Differenz</div>\
<div class='notPoints'>"+ data[i].goalDiff +"</div>\
</div>\
<div>\
<div class='top kda'>Spiele</div>\
<div class='notPoints'>"+ data[i].matches +"</div>\
</div>\
</div>\
</div>"
    }

    document.getElementById("clubContainer").innerHTML = html;
}

loadData()
