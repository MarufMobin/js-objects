const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isClean: true,
}
// getting All properties Names
    const keys = Object.keys(bottle);
    // console.log(keys)

// getting all values Names
    const value = Object.values(bottle)
    // console.log(value)

// getting all entites / keyValue Pair
    const entites = Object.entries(bottle)
    // console.log(entites)


// Seal 
Object.seal(bottle)

// Thougth i can't Delete Bottle property any kind of value and property but i can chage value of this object 

bottle.price = 200;

// Although i can change Bottle property value but i can't add any kind of antities 

bottle.heigth  = "20 Inches";

// Also if i can use freeze then i can forget add/delet also reassign
Object.freeze(bottle);
delete bottle.color;
bottle.price = 20;

// delete 
delete bottle.isClean
console.log(bottle)