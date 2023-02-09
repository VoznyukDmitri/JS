// -------------------Числа-------
// let element = '50px';
// const result = Number.parseInt(element);
// console.log(result);

// let element = '200.74px';
// element = Number.parseFloat(element);
// console.log(element);



// ----------------степінь
// const base = 5;
// const power = 2;
// const result = Math.pow(base, power);
// const result2 = base ** power; //25
// console.log(result); //25
// console.log(result2);
// або
// console.log(5 ** 2); //25

// ----Задача
// let base = prompt('введіть число');
// base = Number(base);
// console.log(base);
// let power = prompt('Введіть степінь');
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);

// Випаткові числа
// const max = 270;
// const min = 0;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result)); // заокруглення математичне

// ========================СТРОКИ===================

// const message = 'в етой строке 26 символов.';
// console.log(message.length);

// const firstName = 'Voznyuk';
// const lastName = 'Dmytro';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const room = 716;
// const type = 'VIP';
// const welcome = `Гость ${firstName} ${lastName} поселяєтся в ${type} номер ${room}`; //--- (``)-шаблонна строка
// console.log(welcome);

// ====нормалізація строк===

// const brand = 'SamSunG';
// const result = brand.toLowerCase();
// const result2 = brand.toUpperCase();
// console.log(result); //samsung
// console.log(result2); // SAMSUNG

// let brand2 = 'SamSunG';
// brand2 = brand2.toLowerCase();
// console.log(brand2); //samsung
// console.log(brand2.slice(1)); // amsung

// let brand3 = 'SaMsUnG';
// brand3 = brand3[0] + brand3.slice(1).toLowerCase();
// console.log(brand3); // Samsung

// let brand4 = prompt('Введіть бренд');
// brand4 = brand4[0] + brand4.slice(1).toLowerCase();
// console.log(brand4); // якщо перша буква буде велика то залишеться всі решту маленькі

// ========Пошук в тексті методом includes===========

// const text1 = 'спам';
// const text2 = 'распродажа';

// const string1 = 'Привет я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите';
// const string3 = 'Рекламная компания #samsung';

// console.log(string1.includes(text1));
// console.log(string1.includes(text2));

// console.log(string2.includes(text1));
// console.log(string2.includes(text2)); //false
// console.log(string2.toLowerCase().includes(text2)); //true

// console.log(string3.includes(text1));
// console.log(string3.includes(text2));

// ===========Оператори порівняння=========

// console.log('10' > 5); //true - приводить строку до числа
// console.log(1 == true); //true - не строга рівність - прирівнюються типи
// console.log(1 === true); //false - строга рівність

// ==========Логічні оператори============

// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні:
//  0, NaN, null, undefined, порожній рядок " " і false. Абсолютно все інше приводиться до true.

// console.log(Boolean(NaN)); // false

// логычний оператор "і" - запинається на брехні fals і дає то на чому запнулося або останню правду.
// console.log(5 && 6 && 7 && 'hello'); // hello

//  логічне "або" - запинається на правді і дає її і якщо не знайде правди дає останнє

// console.log(false || 0 || null || 10); // 10

// логічне "НІ" !

// console.log(!0); //true

// ==задачка==

// const x1 = 10;
// const x2 = 30;
// const number = 32;

// console.log(`Число ${number} попадає у відрізок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадає у відрізок після ${x1}? `, number < x2);

// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}? `, res1);

// const res2 = number < x1 || number > x2;
// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}? `, res2);

// =======Оператор розгалуженння=====

// if (5 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }
// якщо if тру то виконуэться тіло іфа якщо ні то тіло else.

// =======Тернарний оператор=========

// const balance = -1000;
// const message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';
// console.log(message);
