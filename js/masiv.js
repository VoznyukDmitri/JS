// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends);

// === Перебрати масив

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }

// for (let friend of friends) {
// }
// console.table(friends);

// ===Задача
// сума всіх елементів масива
// const number = [1, 5, 65, 55, 23, 54, 98, 456];
// let total = 0;

// for (let summ of number) {
//     total += summ;
//     console.log(summ);
// }
// console.log('сума', total);

// const makeMessage = function (name, price) {
//     const message = ` You picked ${name}, price per item is ${price} credits`;
//     return message;
// };
// const r1 = makeMessage('Radar', 6150);
// console.log(r1);

// function makeMessage(name, price) {
//     console.log(`You picked ${name}, price per item is ${price} credits`);
// }
// makeMessage('Scanner', 3500);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice;
// }
// calculateTotalPrice(6, 50);

// function calculateEngravingPrice(message, pricePerWord) {
//     let string = message.split(' ');
//     string = string.join("");
//     console.log(string);
//     string = string.length;
//     console.log(string);
//     return string * pricePerWord;
// }

// const rez = calculateEngravingPrice('JavaScript is in my blood', 10);
// console.log(rez);


// function calculateEngravingPrice(message, pricePerWord) {
//     let string = message.split(" ");
//     console.log(string);
//     string = string.length;
//     console.log(string);
//     return string * pricePerWord;
 
//  }

//  const rez = calculateEngravingPrice('JavaScript is in my blood', 10);
// console.log(rez);

// function makeArray(firstArray, secondArray, maxLength) {
//     let result =  firstArray.concat(secondArray);
  
//     return result.slice(0, maxLength);
    
//   }

// function calculateTotal(number) {
//     for (let i = 1 ; i <= number; i +=1 ) { 
//      console.log(i);
//    }


//=================== СУМА ЧИСЕЛ МАСИВУ ЧЕРЕЗ ЦИКЛ

// function calculateTotalPrice(order) {
//     let total = 0;
//    for (let i = 0; i < order.length; i += 1){
//        console.log(order[i]);
//        total += order[i] 
//    }
//     return total;
//   }
//   const rez = calculateTotalPrice([12, 85, 37, 4]);
// console.log(rez);

//=================================НАЙДОВШЕ СЛОВО
// function findLongestWord(string) {
//     let words = string.split(' ');
//     let longest = ''; 
  
//     for (let i = 0; i < words.length; i+=1) {
//       if (words[i].length > longest.length) { 
//         longest = words[i]; 
//       }
//     }
//     return longest;
//   }

//   const rez = findLongestWord(" quick brown fox jumpedjkШХЗШХЗШ over the lazy dog")
//  console.log(rez);

//++++++++++++++++++++==============================================
//Доповни код функції createArrayOfNumbers(min, max) таким чином, 
//щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
   
//     for (let i = min; i <= max; i += 1){
//        numbers.push(i);
//     }
    
//     console.log(numbers);
    
//     return numbers;
//   }

// const rez = createArrayOfNumbers(1, 3);
// console.log(rez);

//+++++++++++++++++++++++++++++
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел
// (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи 
//масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//     const number = [];
//     for (let i = 0; i < numbers.length; i += 1){

//         console.log(numbers[i]);
//         if(value < numbers[i]){
//             number.push(numbers[i]);
//         }
        
 
//     }
//     return number;
//  }
//  const rez = filterArray([12, 24, 8, 41, 76], 38);
//  console.log(rez);

//================================================================
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit),
//  і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit); 
//   }

//========================================================================
//Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, 
// оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної 
// довжини в параметри array1 і array2, і повертає новий масив, що складається з тих
//  елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
//     const number = [];
//    for (let i = 0; i < array1.length; i += 1){
   
//      if(array2.includes(array1[i])){
//        number.push(array1[i]);
//      }
   
//    }
//    return number;
   
//    }

//============================================================================
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. 
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// function getEvenNumbers(start, end) {
//     const evenNumbers =[];
//     for (let i = start; i <= end; i += 1){
//       if(i%2 === 0){
//         evenNumbers.push(i);
//       }
//     }
//     return evenNumbers;
 
//    }

//==========================================================================
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// function findNumber(start, end, divisor) {
//     // let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//         // number = i;
//         // break;
//       }
//     }
  
//     // return number;
//     // Change code above this line
//   }
  

