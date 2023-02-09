// const star = 12;
// let price;
// if (star === 1) {
//     price = 20;
// } else if (star === 2) {
//     price = 30;
// } else if (star === 3) {
//     price = 50;
// } else if (star === 4) {
//     price = 70;
// } else if (star === 5) {
//     price = 120;
// } else {
//     console.log('такого немає');
// }

// const star = 5;
// let price;
// switch (star) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('такого немає');
// }
// console.log(price);

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
  
//     switch (password) {
//       case password === null:
//       message = "Canceled by user!";
//       break;
//       case password === ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//       default: message = "Access denied, wrong password!";
//     }
// const res = checkPassword(null)
// console.log(res);

// const star = 2;
// let price;
// switch (star) {
//     case 1: // так робиться "або" \\
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('такого немає');
// }
// console.log(price);

//==================Цикл for=========

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

//задача

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 0; i < employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary} `);
// }
//задача2

// const min = 0;
// const max = 20;
// let total = 0;
// // фор от min до max з кроком 1
// for (let i = min; i <= max; i += 1) {
//     // провіряємо залишов від діленння
//     if (i % 2 !== 0) {
//         console.log('не парне', i);
//         continue; //пропускає ітерацію
//     }
//     console.log('парне', i);
//     total += i;
// }
// console.log('сума парних', total);

// задача 3

// let totalSpent = 30000;
// let payment = 500;
// let discount = 0;
// if (totalSpent < 100) {
//     console.log('Не партнер, скидка 0%');
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовий партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Срібний партнер, скидка 5%');
//     discount = 0.05;
// } else {
//     console.log('Золотий партнер, скидка 10%');
//     discount = 0.1;
// }
// payment = payment - payment * discount;

// console.log(`Оформляємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Загальна сума потрачених грошей в магазині: ${totalSpent} `);


