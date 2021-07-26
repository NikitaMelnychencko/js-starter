function getExtremeElements(array) {
  const lastIndexElement = array.length - 1;
  const lastElement = array[lastIndexElement];
  const firstElement = array[0];
  const mass = [firstElement,lastElement];
  console.log(mass);

  return (mass);
}
getExtremeElements([1, 2, 3, 4, 5]);
getExtremeElements(["Earth", "Mars", "Venus"]);
getExtremeElements(["apple", "peach", "pear", "banana"]);


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  const word = message.split(" ").length*pricePerWord;
  
  
  console.log(word);

  return (word);


   // Change code above this line
}
calculateEngravingPrice("JavaScript is in my blood", 10);

function slugify(title) {
  // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");
  console.log(slug);
  return slug;
  


  // Change code above this line
}
slugify("Arrays for begginers");

function makeArray(firstArray, secondArray, maxLength) {
  const fullArray = firstArray.concat(secondArray);
  const fullArrayFull = fullArray.slice(0,maxLength)
  console.log(fullArrayFull);
  return fullArrayFull;
}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);





function calculateTotal(number) {
  let total = 0;
 // Change code below this line
  for (let i = 0; i <= number; i += 1) {
   total+= i;
  console.log(total);
  
}

return total;
  // Change code above this line
}

calculateTotal(24);

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total +=order[i];
    console.log(total);
  }
  // Change code above this line
  return total;
}

calculateTotalPrice([12, 85, 37, 4]);

function findLongestWord(string) {
  // Change code below this line
  const mass = string.split(" ");
  let total = mass[0];
  console.log(total);
  for (const strin of mass) {
    if (strin.length > total.length) {
      total = strin;
      
    }
    }
  console.log(total);
  return total;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
   for (let i = min; i <= max; i += 1) {
     numbers.push(i);
    }
  // Change code above this line
  console.log(numbers);
  return numbers;
}

createArrayOfNumbers(1, 3);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

function filterArray(numbers, value) {
  const mass = [];
   // Change code below this line
  for (const number of numbers) {
    if (number > value) {
      mass.push(number);
      
    }
  }
  
  console.log(mass);
  return mass;
  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 3);

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  const isInCass = fruits.includes(fruit);
  console.log(isInCass);
  return isInCass; // Change this line
}
checkFruit("plum");

function getCommonElements(array1, array2) {
  const mass = [];
  for (const array of array1) {
    if (array2.includes(array)) {
      mass.push(array);
    }
  }
  console.log(mass);
  return mass;
}
getCommonElements([1, 2, 3], [2, 4]);
getCommonElements([1, 2, 3], [2, 1, 17, 19]);

function getEvenNumbers(start, end) {
  const mass = [];
for (let i = start; i <= end; i += 1) {
  if (i %2===0) {
      mass.push(i);
    }
  }
  console.log(mass);
return mass;
}
  
getEvenNumbers(6, 12);

function includes(array, value) {
  let vav;
  for (const arrayNon of array) {
    if (arrayNon === value) {
      vav = true;
      console.log(vav);
      return vav;
    } 
    
    
  }
 return false;
}

includes([1, 2, 3, 4, 5], 3);




function countProps(object) {
  let propCount = Object.keys(object).length;
  return propCount;
}

countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })//3

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;

//   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })//3


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let price = null;
//   for (const product of products) {
//     if (productName === product.name) {
//       price = product.price;
//     }
//     console.log(price);
    
//   }
  
//     return price;
//   // Change code above this line
// }

// getProductPrice("Radar");
// getProductPrice("Scanner")
// getProductPrice("Engine");


const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const mass=[];
  for (const product of products) {
    mass.push(product.propName)
  
  }
  return mass;
  
  // Change code above this line
}
getAllPropValues("name");