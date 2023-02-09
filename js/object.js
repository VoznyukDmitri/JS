// const playlist = {
//     name: [1,2,3],
//     b: 5,
//     c: 10
// };

//  const playlist = {
//      name: "Мой супер плейлыст",
//      rating: 5,
//      tracks: ['трек-1', "трек-2", "трек-3"],
//      trackCount: 3,
//  };

// const propertyName = "tracks"

// console.log(playlist);
//  console.log(playlist.name);

//  console.log(playlist.tracks);//['трек-1', "трек-2", "трек-3"]
//  console.log(playlist["tracks"]);//['трек-1', "трек-2", "трек-3"]
//  console.log(playlist[propertyName]);//['трек-1', "трек-2", "трек-3"]

// =======================Коротка запись
// const username = 'Mango';
// const email = 'mango@gmail.com';

// const signupData = {

//     // username: username,
//     // email: email,
//     // або коли одинакове імя ключа і змінної
//     username,
//     email,
// };
// console.log(signupData); //{username: 'Mango', email: 'mango@gmail.com'}

//=======================Вычесляемые свойства

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
// [inputName]: inputValue,
// };
// console.log(colorPickerData); // {color: 'tomato'}

//======================= Ссылочный тип (як  масив)

// const a = {
//     x: 1,
//     y: 2,
// };

// const b = a;

// console.log(b===a); //true

// a.hello =100;
// b.hello =150;

// console.log(b); // {x: 1, y: 2, hello: 150}
// console.log(a); // {x: 1, y: 2, hello: 150}

//===========================МЕТОДИ

// const playlist = {
//     name: "Мой супер плейлыст",
//     rating: 5,
//     tracks: ['трек-1', "трек-2", "трек-3"],
//     trackCount: 3,
//     getName() {
//         console.log("Ага це лдждллдждл ");
//     }
// };
// console.log(playlist);

// playlist.getName();


// const playlist = {
//         name: "Мой супер плейлыст",
//         rating: 5,
//         tracks: ['трек-1', "трек-2", "трек-3"],
//         trackCount: 3,
//         changeName(newName) {
//             console.log('this всередині changeName: ', this);
//             this.name = newName;  
//         },
//         addTrack(track){
//             this.tracks.push(track);
//         },
//     };

// playlist.changeName('нове імя')
// console.log(playlist);
// playlist.addTrack('новий трек')
// console.log(playlist);

//======================ПЕРЕДОР ОБЭКТА

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];

// }

// console.log("загальний відгук:", totalFeedback );//загальний відгук: 18


// const values = Object.values (feedback);
// console.log(values); // [5, 10, 3] масив значень

// for (const value of values) {
//     console.log(value);
//     totalFeedback += value;
// }

// console.log("загальний відгук:", totalFeedback ); //загальний відгук: 18

//========================МАСИВ ОБЄКТІВ 

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// +++++++++++++++++++задача - шукаэм друга

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         if (friend.name=== friendName){
//             return 'Нашли!!!';
//         }
//     }
// return 'Не нашли :-('
// }

// console.log(findFriendByName (friends, 'Poly') );
// console.log(findFriendByName (friends, 'Kiwi') );
// console.log(findFriendByName (friends, 'Opsd') );

//+++++++++++++++++++++++ задача -шукаэмо масив всіх імен

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// const getAllNames = function (allFriends){
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name)
//     }
//     return names; //['Mango', 'Kiwi', 'Poly', 'Ajax'] - масив імен
// }
// console.log(getAllNames(friends));

// ++++++++++++++++++++++++ Задача - отримати імя всіх друзіх хто онлайн

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// const getOnlineFriend = function (allFriend) {
//     const onlineFriends =[];
//     for (const friend of allFriend) {
//         console.log(friend.online)
//         if (friend.online){
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends; // (2) [{…}, {…}] 0: {name: 'Kiwi', online: true} 1: {name: 'Poly', online: true}
    
// }

// console.log(getOnlineFriend(friends));

//======================================Операція розпилення spred

// const number = [1,2,3,].concat([4,5,6],[7,8,9]);
// console.log(number);//object.js:209 (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const number = [...[1,2,3,], 4,5 ];
// console.log(number)//[1, 2, 3, 4, 5]

//=======пошук найбыльшоъ чи найменшої пемператури (метод не деструктивний)

// const temp = [18,14,12,21,17,29,24]
// console.log(Math.max(...temp));//29
// console.log(Math.min(...temp));//12

//======================Зшиваємо масив

// const lastWeekTemp = [1,2,3];
// const currentTemp = [4,5,6];
// const nextWeekTemp = [7,8,9];

// const allTemp = [...lastWeekTemp, ...currentTemp, ...nextWeekTemp];
// console.log(allTemp);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//=========================РОЗПИЛЕННЯ ОБЭКТІВ

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// const c = Object.assign (a, b );// старий синтаксис
// const d = {...a, ...b, };
// console.log(c); // {x: 0, y: 2, z: 3} одинакове значення x перезаписуэться
// console.log(d); // {x: 0, y: 2, z: 3}

//========================== ДЕСТРУКТУРИЗАЦІЯ 
// const playlist = {
//     name: 'мій  супер плейлист',
//     rating: 5,
//     track: ['трек-1','трек-2','трек-3'],
//     trackCount: 3, 
// };
// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.track,
//     playlist.trackCount
//     ); //мій  супер плейлист 5 (3) ['трек-1', 'трек-2', 'трек-3'] 3

// const {name,rating} = playlist; // деструктуризація
// console.log(rating);//5
// console.log(name);//мій  супер плейлист

// ========================ДЕСТРУКТУРИЗАЦІЯ МАСМИВУ==================

// const rgb = [255,100,80];
// const [a, b, c] = rgb;
// console.log(a, b, c); //255 100 80

////приклад
// const author = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango:6,
// };
// const entries = Object.entries(author);
// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }
// kiwi 4
//  poly 7
//  ajax 9
// mango 6

//========================ОПЕРАЦІЯ rest (збор)

// ==================КОРЗИНА===================


// function countProps(object) {
//     let  propCount = [];
//     for (const key in object) {
//         console.log(key);
//         if (object.hasOwnProperty(key)){
//             console.log(key);

//             propCount.push(key);


//         }
        
//     }
//     return propCount.length;
//   }

//   const rez = countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
//   console.log(rez);


// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значення властивості
//     console.log(book[key]);
//   }

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const rty = Object.keys(apartment);
//   for (const key of rty) {
//     console.log(key);
//     console.log(apartment[key]);
//   }
//   const keys = apartment;
  

  