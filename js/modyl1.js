// 1 ввести число і зберегти в змінній
// 2 ввести степінт і зберегти в змінній
// 3 піднести число у степінь
// let base = prompt ('введіть число');
// base = Number(base);
// console.log(base);
// let power = prompt ('введіть степінь');
// power = Number(power);
// console.log(power);
// const result = base **power;
// console.log(result);

// ---Псевдо випадкове число--
// Math.random();
// Math.round();
// const max =50000;
// const min =1;
// const result = Math.random()*(max - min) + min;
// console.log(Math.round(result));
console.log("hjk");
function formatMessage(message, maxLength) {
    let result;
//   if(message.length <= maxLength) {
//     result = message;
//   }
//     else if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "..." ;
  
//   }
  result = message.length <= maxLength ? result = message : result = message.slice(0, maxLength) + "..." ;
  
    
    
    return result;
  }
  console.log(formatMessage("Curabitur ligula sapien", 16));
  console.log(formatMessage("Curabitur ligula sapien", 23));
  console.log(formatMessage("Vestibulum facilisis purus nec", 20));
  console.log(formatMessage("Vestibulum facilisis purus nec", 30));