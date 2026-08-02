const childhoodEvents = [

{
minAge:0,
maxAge:5,

text:
"Your parents took you to your first movie. You were fascinated by the actors.",

effect:function(player){

player.creativity += 3;

}

},


{
minAge:6,
maxAge:12,

text:
"Your teacher noticed you had a natural ability to perform in front of others.",

effect:function(player){

player.charisma += 4;
player.creativity += 5;

}

},


{
minAge:6,
maxAge:12,

text:
"You joined a school activity and made new friends.",

effect:function(player){

player.discipline += 2;

}

},


{
minAge:13,
maxAge:17,

text:
"You performed in a school play and discovered your love for acting.",

effect:function(player){

player.creativity += 5;
player.charisma += 5;

player.history.push(
"You discovered acting through school theater."
);

}

}


];


function generateChildhoodEvent(player){


let possible =
childhoodEvents.filter(event =>

player.age >= event.minAge &&
player.age <= event.maxAge

);


if(possible.length===0){

return null;

}


return possible[
Math.floor(Math.random()*possible.length)
];

}
