// console.log("Hello World")

// var a=10;
// console.log(a);

// var a="name"
// console.log(a);
// let name="messi"
// console.log(name)

// const pi=3.14
// console.log(pi);

// //type conversion
// let valueOne=2;
// let valueTwo="2";
// console.log(valueOne+valueTwo);
// console.log(valueOne+parseInt(valueTwo));


// const pname="john";
// const age=30;
// const isCool="true";

// console.log(typeof pname)
// console.log(typeof age)

// //concatenate
// console.log('My name is ' +pname+ ' and age is ' +age);


console.log("Function");

function showString(){
console.log("Hello")
}

showString();

//arrow function
var showString=()=>{

console.log("Arrow Hello World")
}
showString();

//map
var numbers=[1,2,3,4,5,6];
var squares=numbers.map((num)=>{
    return num*num;
})
console.log(squares);

var fruits=["Apple","Orange","Banana"];
var uppercase=fruits.map((fruit)=>{
    return fruit.toUpperCase();

});

console.log(uppercase);

//enhanced literals

var name="Messi";
var age=37;
var person={
    name,
    age,
    isPlayer:true,
}
console.log(person);

var person={
    name:"Ronaldo",
    age:39,
    isPlayer:true,
}
var {name,age,isPlayer}=person;
console.log(name)
console.log(age)
console.log(isPlayer)

//spread operator

var numbers=[1,2,3,4,5,6];
var newnumbers=[...numbers,7,8,9,10];
console.log(newnumbers);