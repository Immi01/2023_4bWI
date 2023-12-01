
document.getElementById("Impressum").addEventListener("click", () => {
    location.href = "/Webdev/API_fussball/Imprint/imprint.html";
})


const loadData = ()=>{
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result)=>{
        result.json().then((data)=>{
            console.log(data);
            //fillTable(data);
        });
    });
};

const fillTable = (data)=>{
    let html = "";
    
    data.forEach((element) => {
        html += "<div class='club'>" + element.points + " by Team " + element.teamName + "</div>"
    });

    document.getElementById("clubContainer").innerHTML = html;
}

loadData()