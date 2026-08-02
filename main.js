// SilverScreen v0.01
// Core Life Engine

GameManager.initialize();


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


    
    Renderer.render();

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


function chooseActivity(){

let choice =
prompt(
"Choose activity:\n\nDrama Club\nSports\nAcademic Club\nGaming"
);


if(choice){

doActivity(player, choice);

Renderer.render();

}

}

player.family =
createFamily(player.name);

Renderer.render();
