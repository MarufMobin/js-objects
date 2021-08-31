const rocky = {
    id: 101,
    name: 'Rocky',
    balance: 5000,
    treatDay: function( expense,boksis){
        this.balance = this.balance - expense - boksis;
        console.log(this)
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

// call
// rocky.treatDay.call( mukit, 500, 20)
// rocky.treatDay.call( maruf, 2000,100)

// apply

rocky.treatDay.apply( maruf, [500,20]);
rocky.treatDay.apply( mukit, [200, 10])