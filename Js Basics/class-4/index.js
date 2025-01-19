// console.log("hello ji");
// let uday= 12;

// // function declarations =====>>>

// function run(uday){
//     console.log("running" +" "+ uday);
// }

// run(uday);
// run(24);
// run(67);
// run();
// run();
// run();


// // Named function assignment ======>>
// let stand = function walk(){
//     console.log("walking");
//  }

//  //Anonymus function assignment ======>>
// let stand2 = function(){
//     console.log("walking2");
//  }

//  stand();

//  let jump = stand;

//  jump();

//  stand2();

//  function sum( ){
//     let total = 0;
//     for(let value of arguments){
//         total = total + value;
//     }
//     return total;
//  }

//  let ans = sum(4,5,6,6,7,7);

//  console.log(ans);


// Rest operator ====>>>


function sum(...args){
    console.log(args);
}

 sum(1,2,3,4,5,6);

// getter / setter

// getter = access properties;
// setter = change or mutate properties;

let person = {
    fName : "Uday",
    lName : "Yadav",

    get fullName() {
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

// console.log(person.fullName);

// person.fullName = 'Rahul Kumar';
// console.log(person.fullName);

// try catch 
try {
    person.fullName = 1;
   
} catch (e) {
    throw new Error("you have send a number");

    // alert("you have send a number");
    
}

console.log(person.fullName);
