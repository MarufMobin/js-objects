const rocky = {
    id: 101,
    name: 'Rocky',
    balance: 5000,
    treatDay: function( expense){
        this.balance = this.balance - expense;
        return this.balance;
    }
};

const mukit = {
    id: 102,
    name: "Mukit",
    balance: 8000
};

const maruf ={
    id: 103,
    name: "Maruf",
    balance: 15000
};

const mukitResult = rocky.treatDay.bind(mukit);
console.log(mukitResult(500))

const marufResult = rocky.treatDay.bind(maruf);
console.log(marufResult(3000));