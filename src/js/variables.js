console.log('variables')

console.log(student); //undefined
var student = "Nikita";
console.log(student);

var count;//variable declaration without initialization
console.log(count); //undefined

count=1;
console.log(count);//1

count=2;
console.log(count);//2

//console.log(number); //uncaught ReferenceError: Cannot access 'number' before initialization 
let number = 30;
console.log(number);

let age; //variable declaration without initialization
console.log(age); //undefined

age = 18;
console.log(age);//18
age = 20;
console.log(age);//20
//console.log(userName); //Uncaught ReferenceError: Cannot access 'userName' before initialization
const userName = 'Soma';
console.log(userName);

//userName = ""; //Uncaught TypeError: Assignment to constant variable.

//const user; //index.js:19 Uncaught SyntaxError: Missing initializer in const declaration