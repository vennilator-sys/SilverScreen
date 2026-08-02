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
