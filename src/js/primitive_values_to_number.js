console.log('Primitive values to Number');

// == to number ==

// any string value to number

let value = "bla bla bla";
// 1-th lap
let toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);

// any string number to number

 value = "123";
// 1-th lap
 toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);

// empty string to number

 value = "";
// 1-th lap
 toNumber = Number(value);
console.log(`empty string ${value}, through the constructor Number():`, toNumber);
console.log(`type data empty string ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`empty string${value}, through unary + :`, toNumber);
console.log(`type data empty string ${value}, through unary + :`, typeof toNumber);

// space string to number

 value = " ";
// 1-th lap
 toNumber = Number(value);
console.log(`space string${value}, through the constructor Number():`, toNumber);
console.log(`type data space string ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);

//Boolean(logic) true to number

value = true;
// 1-th lap
toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);

//false to number
value = false;
// 1-th lap
toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);

//undefined to number

value = undefined;
// 1-th lap
toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);


//null to number

value = null;
// 1-th lap
toNumber = Number(value);
console.log(`${value}, through the constructor Number():`, toNumber);
console.log(`type data ${value}, through the constructor Number():`, typeof toNumber);

// 2-th lap
toNumber = +value;
console.log(`${value}, through unary + :`, toNumber);
console.log(`type data ${value}, through unary + :`, typeof toNumber);