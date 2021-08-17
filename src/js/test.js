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



// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };


// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }


// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

//  console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']



// const changeEven=(numbers, value)=>{
//     // Пиши код ниже этой строки
//     const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//         newArray.push(number + value);
//     }else{newArray.push(number);}
    
//     });
//     return newArray;
   
//  // так проще 
//     // numbers.forEach(number => {
//     //   newArray.push(number % 2 === 0 ? number + value : number);
//     // });
//     // return newArray
  
//     // Пиши код выше этой строки
// }
  
// changeEven([1, 2, 3, 4, 5], 10);
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value % 2===0);
// const oddNumbers = numbers.filter(value => value % 2!==0);

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
//   console.log(allGenres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueGenres);
// const getUsersWithAge = (users, minAge, maxAge) => 
//  users.filter((user)=> user.age>=minAge && user.age<=maxAge)
  
// const users=[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39
//   }
// ]
// const getUsersWithFriend = (users, friendName) => {
//   const nameArr = [];
//   users.filter((user,index,array) => {
//     if (user.friends.includes(friendName)) {
//       nameArr.push(array[index])
//     }
//   })
//   return nameArr;
// };
// getUsersWithFriend(users, 'Briana Decker')
// getUsersWithFriend(users, 'Goldie Gentry')
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// const allCourses = students.flatMap(student => student.courses);
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// const getFriends = (users) => {
//   const listFriend =  users.flatMap((listFriend)=>listFriend.friends).filter((course, index, array) => array.indexOf(course) === index)

// };


// const nameArr = [];
//   users.filter((user,index,array) => {
//     if (user.isActive) {
//       nameArr.push(array[index])
//     }
//   })
//   return nameArr;
// const users=[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const getUserWithEmail = (users, email) =>  console.log(users.find((user) => user.email === email));
// console.log(getUserWithEmail(users,'shereeanthony@kog.com'));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray=>firstArray.every(value=>value%2===0);
// const eachElementInFirstIsOdd = firstArray=>firstArray.every(value=> value%2!==0);

// const eachElementInSecondIsEven = secondArray=>secondArray.every(value=> value%2===0);
// const eachElementInSecondIsOdd = secondArray=>secondArray.every(value=> value%2!==0);

// const eachElementInThirdIsEven = thirdArray=>thirdArray.every(value=> value%2===0);
// const eachElementInThirdIsOdd = thirdArray=>thirdArray.every(value => value%2!== 0);

// console.log(eachElementInFirstIsEven(firstArray));
// console.log(eachElementInFirstIsOdd(firstArray));


// const users=[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const isEveryUserActive = (users) => users.every(user=>user.isActive=== true)
// console.log(isEveryUserActive(users));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(value=>value%2===0);
// const anyElementInFirstIsOdd = firstArray.some(value=>value%2!==0);

// const anyElementInSecondIsEven = secondArray.some(value=>value%2===0);
// const anyElementInSecondIsOdd = secondArray.some(value=>value%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(value=>value%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(value=>value%2!==0);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);;

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, players) => {
//   let value = players.playtime/players.gamesPlayed;
//   return total + value;
// }, 0);


// const users=[
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
// const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);

// console.log(calculateTotalBalance(users));
// console.log(getTotalFriendCount(users));


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

  
  // const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
  // const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author) );

// const sortedByAscendingRating = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.rating - secondAuthor.rating);

// const sortedByDescentingRating = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.rating - firstAuthor.rating );


// const sortByAscendingBalance = users => {
//   const balanceUsers = [...users].sort((firstAuthor, secondAuthor) => firstAuthor.balance - secondAuthor.balance);
//   return balanceUsers;
// };

// const sortByDescendingFriendCount = users => {
//    const friendsUsers = [...users].sort((firstAuthor, secondAuthor) =>secondAuthor.friends.length- firstAuthor.friends.length);
//   return friendsUsers;
// };

// const sortByName = users => {
//   const nameUsers = [...users].sort((firstAuthor, secondAuthor) =>firstAuthor.name.localeCompare(secondAuthor.name));
//   return nameUsers;
// };

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author))
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((books) => books.author);
// ;
//   console.log(names);
const users=[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
const getNamesSortedByFriendCount = users => {
  const names = [... users]
  .sort((firstFriends, secondFriends) => firstFriends.friends.length-secondFriends.length )
  .map((users) => users.name);
  return names
  
};

const getSortedFriends = users => {
  const names = [...users]
    .flatMap((users) => users.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((firstFriends, secondFriends) => firstFriends.localeCompare(secondFriends));
  return names
};



const getTotalBalanceByGender = (users, gender) => {
   const names = [...users]
   
    .filter((user) => user.gender === gender)
    .map((users) => users.balance)
    .reduce((total, balance) => total + balance);
  return names
};

console.log(getTotalBalanceByGender(users, 'male'));
//const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);