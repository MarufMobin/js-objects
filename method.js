const student = {
    id: 101,
    name: 'Maruf',
    mejor: 'Mathmatics',
    isRich: false,
    subjects: ['English','Bangla','Math 1'],
    bestFriend: {
        name: 'Showrov',
        mejor: 'Mathmatics'
    },
    balance: 5000,
    // Object Ar function k method ble
    takeExample: function(){
        console.log(this.name,"Taking Exam")
    },
    // calculateBalance: function( amount ){
    //    const curntBlnc = this.balance;
    //    const restAmount = curntBlnc - amount;

    //    return `${restAmount} is Your Rest Amount  Also You Withdraw ${amount}`;
    // }
    treatDay: function( expense, boksis){
        this.balance = this.balance - expense - boksis;
        return this.balance;
    }
}

// student.takeExample()
// const result = student.calculateBalance( 100 );
// console.log(result)
const ocation = student.treatDay(500 , 100);
const ocation1 = student.treatDay(500 , 200);
console.log(ocation,ocation1)