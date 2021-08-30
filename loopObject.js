const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isClean: true,
}
/* 
for(let i = 0; i < 10; i++){} ==> Regular For Loop

for( const num of numbers ){} ==> Array Ar khatre Use hoi

for( const prop in students ){} ==> Aita Objects ar Kahtre Use hoi

*/

for( const prop in bottle){
     console.log(prop,bottle[prop])
    // console.log(bottle["color"])
    // console.log(bottle.price)
} //==> ai 3 ta way te Object thake value ber kara jai



// Usign Keys method to find out objects properties also loop through for of loop

const keys = Object.keys(bottle);
// console.log(keys)
for( const prop of keys){
    console.log( prop, bottle[prop])
}


// Using entites for find Objects Data 


const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isClean: true,
}
const entries = Object.entries(bottle);
// console.log(entites);
// const [key,value] = ['color','yellow'];

for( const [key,value] of Object.entries(bottle)){
    console.log(key, value);
}