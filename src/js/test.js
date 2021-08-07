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

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total +=order[i];
//     console.log(total);
//   }
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

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


//==========modul 3========================

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


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(productName) {
//   const mass = [];
//   const vav = productName;
//   for (const product of products) {
//     if (product.hasOwnProperty(productName)) {
//      mass.push(product[productName]); 
//     }
//   }
//   console.log(mass);
//   return mass;
  
//   // Change code above this line
// }
// getAllPropValues("quantity");
// getAllPropValues("category");

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let tottal = 0;
  
//   for (let product of products) {
//   //  console.log(productName === product.name);
//   //  console.log(product.hasOwnProperty("productName"));
    
//     if ( productName === product.name) {
//       tottal = product.price * product.quantity;
//       console.log(tottal);
//     }
//   }
  
  
//   return tottal;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Radar");

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line


// const {today:{low,high,icon:todayIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//        tomorrow:{low,high,icon:tomorrowIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}=forecast;

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';

  const doc = {
    completed,
    category,
    priority,
  }
  const mor = {...doc, ...data};
  console.log(mor);
  return mor
}


makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

function add(...args) {
  const mass = args;
  let total = 0;
    for (let elem of mass) {
      total += elem;
      
  }

  console.log(total);
  return total
   
}

add(15, 27);

// Change code below this line
function findMatches(a, ...args) {
  const matches = []; // Don't change this line
  for (let arg of args) {
    if (a.includes(arg)) {
      matches.push(arg)
     }


  }
  // Change code above this line
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    const value = this.books.indexOf(oldName);
    return this.books.splice(value,1,newName); 
	
	
    // Change code above this line
  },
  
};

bookShelf.updateBook("Haze", "Dungeon chronicles");
console.log(bookShelf);


// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (let mass of this.potions) {
//       if (mass.name === potionName) {
//         this.potions.splice(this.potions.indexOf(mass), 1)

//       }
      

//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let mass of this.potions) {
//       if (mass.name === oldName) {
//         //this.potions.splice(this.potions.indexOf(mass), 1,newName)
//         const rar = { ...mass, name: newName };
//         console.log(rar);
//         return this.potions.splice(this.potions.indexOf(mass), 1,rar)

//       }
//     }
    
//   }
// }
//   atTheOldToad.removePotion("Dragon breath")
//   console.log(atTheOldToad.potions);
//   atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
//   console.log(atTheOldToad.potions)


// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });



// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     for (let namePiza of this.pizzas) {
//       if (namePiza===pizzaName) {
//         return onSuccess(pizzaName)
//       }
//     }
//     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка!  ${error}`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// pizzaPalace.order('Венская', makePizza, onOrderError);


// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

//call

// вариант 1
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// const messages = [];

// function composeMessage(position) {

//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.` 
// }
     
// for (let i = 0; i < orders.length; i += 1) {
//   let num = i + 1;
//   const position = { email: orders[i].email, dish: orders[i].dish };
//   const call = composeMessage.call(position, num);
//   messages.push(call);
// }

//вариант 2
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.call(orders[i], i + 1);
//   messages.push(msg);
// }


//apply
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }


//bind

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');



const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};


function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}


const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

 console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
