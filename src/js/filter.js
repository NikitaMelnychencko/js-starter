//Задача. Ниписать функцию которая принимает масив и удаляет  уникальные елементы

const arr1 = [1, 3, 3, 4, 5, 6, 4, 1]
const arr2 = ['Js', 'HTML', 'CSS', 'REACT', 'Node', 'Js']
//========1========
function getWithoutUnique(values) {
  //1
  const myValues = []
  for (let i = 0; i < values.length; i++) {
    if (myValues[values[i]] === undefined) {
      myValues[values[i]] = 0;
    }
    myValues[values[i]] += 1;//если индекс уже есть
  }


  //2
  // создаём результирующий масив которій вернём из функции
  const result = []
  for (let i = 0; i < values.length; i++) {
    
    if (myValues[values[i]] > 1) {
      result.push(values[i])
    }
    
  }
 console.log('result',result);
}
getWithoutUnique(arr1)
getWithoutUnique(arr2)

//========2=========


function getValues(values) {
  return values.filter((elem, idx, arr) =>( !(arr.lastIndexOf(elem) === idx) || !(arr.indexOf(elem) === idx)) && true )
  
}

// function getValues(values) {
//   return values.filter((el, idx, array) => {
//     // если индекс последнего такого значения не равен текущему
//     let lastIdx = !(array.lastIndexOf(el) === idx)
//     console.log(lastIdx);
//     let currentIdx = !(array.indexOf(el) === idx)
//     console.log(currentIdx);
//     let condition = (lastIdx || currentIdx) && true
//     return condition
//   })
  

// }

getValues(arr1)
console.log(getValues(arr1));
getValues(arr2)
console.log(getValues(arr2));