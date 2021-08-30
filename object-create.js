// literal Object create / Object initialization
let student = { name: 'Md Maruf', job: 'web Developer'};
// console.log(student)

// Constructor
const person = new Object();
// console.log(person)

// 
// const human = Object.create(null);

const arr = { fullName: "maruf", lastName: "hussian"}
const human = Object.create(student);
console.log(human.job); 


// Using class to make a Object  / syntextical sugar

class People  {
    constructor( name, age){
        this.name  = name;
        this.age  = age;
    }
}

const peop = new People( 'Maruf', 25 );
console.log(peop)

// Using fuction to see how to work class

function ClassWorking(name){

    this.name = name;
}

const result = new ClassWorking("Maruf");
console.log(result);