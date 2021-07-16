console.log('Primitive values to Boolean');

// == to Boolean ==

// any string value to Boolean

let value = "bla bla bla";
// 1-th lap
let toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

// any string number to  Boolean

value = "123";
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

// empty string to Boolean

value = "";
// 1-th lap
toBoolean = Boolean(value);
console.log(`empty string ${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data empty string ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`empty string ${value}, through !!():`, toBoolean);
console.log(`type data empty string ${value}, through !!():`, typeof toBoolean);

// space string to Boolean

value = " ";
// 1-th lap
toBoolean = Boolean(value);
console.log(` space string ${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data space string ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(` space string ${value}, through !!():`, toBoolean);
console.log(`type data space string ${value}, through !!():`, typeof toBoolean);

//Number to Boolean

//0

value = 0;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

//1

value = 1;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

//Nan

value = NaN;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

//Infinity

value = Infinity;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);

//undefined to Boolean

value = undefined;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);


//null to Boolean

value = null;
// 1-th lap
toBoolean = Boolean(value);
console.log(`${value}, through the constructor Boolean():`, toBoolean);
console.log(`type data ${value}, through the constructor Boolean():`, typeof toBoolean);

// 2-th lap
toBoolean = !!value;
console.log(`${value}, through !!():`, toBoolean);
console.log(`type data ${value}, through !!():`, typeof toBoolean);