/*
 const first = { a: 1 };
const second = { a: 1 };
const third = first; */
/* 
if( first === second ){ //==> ai khatre else print hobe kron hoche j js ar Object Memory Refarancial Intrigity ==> mane same jaigai ache ki na ta chek dei
    console.log("Both are same")
}else{
    console.log("Both are not Equal")
} */

/*
 if( first === third ){ //==> ai khatre ai ta true
    console.log("Both are Same");
}else{
    console.log("Both are not Same");
} */


const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

const strigifiedObjectOne = JSON.stringify( first );
const strigifiedObjectTwo = JSON.stringify( second );

if( strigifiedObjectOne === strigifiedObjectTwo){
    console.log("Both are Equal") // ==> both are Equal because position and value are equal
}else{
    console.log("Both are not Equal")
}


const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1};
JSON.stringify(first2);
JSON.stringify( second2);

if( JSON.stringify(first2) === JSON.stringify(second2)){
    console.log("Both are Equal");
}else{
    console.log("Both are not Equal") //==> Both Are not Equal because position
}



const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1};

function compareTwoObject( first, second ){
    
    if( Object.keys(first).length !== Object.keys(second).length){
        return false;
    }
    for( const element in first){
        if( first[element] !== second[element]){
            return false;
        }
    }
    return true;
}

const isEqual = compareTwoObject( first2,second2);
console.log(isEqual)