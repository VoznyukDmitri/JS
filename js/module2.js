// Задача - перебюрати і додати масив
// const cart = [54, 28, 105, 70, 92, 120, 78, 97, 988];
// let total = 0;

// for (let i = 0; i < cart.length; i+=1) {
//     console.log (cart[i])
//     total += cart[i]

// }
// for (const carts of cart) {
// total += carts
// }
// console.log("сумма", total);

// задача 2 - перебрати і просумувати парні числа масиву

// const numbers = [54, 28, 105, 70, 92, 120, 77, 97, 981, 10, 16, 260];
// let total = 0;

// for (let i = 0; i < numbers.length; i+=1) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0){
//         console.log('це парне число');
//         total += numbers[i];
//     }

// }
// або через фор оф

// for (const number of numbers) {
//     if (number % 2 === 0){
//          console.log('це парне число', number);
//           total += number;
        
//         }
//     else {
        console.log("не парпні", number);
//     }
    
// }

// console.log("сумма парних", total);
// function formatMessage(message, maxLength) {
//     let result;
//   if(message.length <= maxLength) {
//     result = message;
//   }
//     else if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "..." ;
  
//   }
// //    let result = message.length <= maxLength ? result = message : result = message.slice(0, maxLength) + "..." ;
  
    
    
//     return result;
//   }
//   formatMessage("Curabitur ligula sapien", 16)
//   formatMessage("Curabitur ligula sapien", 23)
//   formatMessage("Vestibulum facilisis purus nec", 20)
//   formatMessage("Vestibulum facilisis purus nec", 30)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
//   formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)