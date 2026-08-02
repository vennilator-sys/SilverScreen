// SilverScreen v0.01
// Core Life Engine

const family = {};

const names = [
    "Ethan Williams",
    "Sophia Carter",
    "Jackson Miller",
    "Olivia Parker",
    "Noah Anderson",
    "Emma Mitchell"
];


const locations = [
    "Los Angeles, California",
    "Atlanta, Georgia",
    "New York City",
    "London, England",
    "Toronto, Canada"
];


const events = [

    "You performed in a school play.",
    "A teacher noticed your creativity.",
    "You watched a movie that inspired you.",
    "You made a new friend.",
    "You practiced your acting skills.",
    "You gained confidence."

];


GameState.player = new Person();

const player = GameState.player;



function randomStat(){

    return Math.floor(Math.random()*41)+60;

}



function ageUp(){


    player.age++;


    let event =
    generateChildhoodEvent(player);
    
    
    if(event){
    
    event.effect(player);
    
    
    player.history.unshift(
    `Age ${player.age}: ${event.text}`
    );
    
    }


    
    render();

}



function statBar(name,value){


return `

<div class="stat">

<strong>${name}: ${value}%</strong>

<div class="bar">

<div class="fill" style="width:${value}%"></div>

</div>

</div>

`;

}




function render(){


const game=document.getElementById("game");


game.innerHTML = `


<div class="card">


<h2>${player.name}</h2>


<p>
Age: ${player.age}
</p>


<p>
📍 ${player.location}
</p>


<p>
💰 Money: $${player.money.toLocaleString()}
</p>


<h3>Attributes</h3>


${statBar("Looks",player.looks)}

${statBar("Intelligence",player.intelligence)}

${statBar("Charisma",player.charisma)}

${statBar("Creativity",player.creativity)}

${statBar("Discipline",player.discipline)}

<h3>Hollywood Potential</h3>

${statBar("Acting Talent",player.actingTalent)}

${statBar("Directing Talent",player.directingTalent)}

${statBar("Writing Talent",player.writingTalent)}


<h3>Personality</h3>

${statBar("Confidence",player.confidence)}

${statBar("Networking",player.networking)}

<button onclick="ageUp()">

Age Up

</button>

<button onclick="chooseActivity()">

Activities

</button>


</div>



<div class="card">

<h3>Life Events</h3>

${

player.history.length === 0

?

"<p>Your story has not begun yet.</p>"

:

player.history.map(e=>`

<div class="event">

${e}

</div>

`).join("")

}


</div>


`;

}

function chooseActivity(){

let choice =
prompt(
"Choose activity:\n\nDrama Club\nSports\nAcademic Club\nGaming"
);


if(choice){

doActivity(player, choice);

render();

}

}

player.family =
createFamily(player.name);

render();
