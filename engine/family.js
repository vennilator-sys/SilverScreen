
function createParent(name){

return {

name:name,

age:
Math.floor(Math.random()*15)+28,

job:
randomOccupation(),

relationship:
Math.floor(Math.random()*31)+70

};

}



function createFamily(playerName){


let last =
playerName.split(" ")[1];


return {


father:
createParent(
generateName()
),


mother:
createParent(
generateName()
),


siblings:
generateSiblings(last),


wealth:
Math.floor(Math.random()*90000)+20000


};


}




function generateSiblings(last){


let amount =
Math.floor(Math.random()*4);


let siblings=[];


for(let i=0;i<amount;i++){


siblings.push({

name:
`${randomFirstName()} ${last}`,

age:
Math.floor(Math.random()*8),

relationship:
Math.floor(Math.random()*40)+60

});


}


return siblings;


}
