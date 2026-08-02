const firstNames = [

"James",
"Michael",
"Sarah",
"Emma",
"Olivia",
"Ethan",
"Noah",
"Sophia",
"Jackson",
"Ava",
"Daniel",
"William",
"Charlotte",
"Benjamin"

];


const lastNames = [

"Williams",
"Carter",
"Johnson",
"Mitchell",
"Brown",
"Taylor",
"Anderson",
"Wilson",
"Thomas"

];


function randomFirstName(){

return firstNames[
Math.floor(Math.random()*firstNames.length)
];

}


function randomLastName(){

return lastNames[
Math.floor(Math.random()*lastNames.length)
];

}


function generateName(){

return `${randomFirstName()} ${randomLastName()}`;

}
