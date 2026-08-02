const occupations = [

"Teacher",
"Accountant",
"Doctor",
"Engineer",
"Actor",
"Lawyer",
"Business Owner",
"Musician",
"Nurse",
"Software Developer",
"Writer",
"Artist"

];


function randomOccupation(){

return occupations[
Math.floor(Math.random()*occupations.length)
];

}
