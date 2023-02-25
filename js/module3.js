// function countProps(object) {
//     let propCount = Object.keys(object);
//     propCount = propCount.length;
//     console.log(propCount);
//     return propCount
    
//   }

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
//   propCount = keys.length;
//     // for (const key of keys) {
      
//     //     propCount += 1;
      
//     // }
//   console.log(propCount);
//     return propCount;
//     // Change code above this line
//   }
// countProps({});
// countProps({ name: "Mango", age: 2 }) ;
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// console.log(countProps);

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
//   const {
//     today: {low,  high, icon : todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },  
//     tomorrow: { low,  high, tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, 
//   } = forecast;
  
//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;
  
//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;