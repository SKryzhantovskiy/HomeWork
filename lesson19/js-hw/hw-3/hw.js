/*
    Данный код выводит неверное сообщение о возрасте
    исправте ошибку и так же перепишите код
    используя новый синтаксис
    используя подходящие оператоы
    следуя рекомендациям по именованию переменных
*/

//var age = 20;
let age = 20;
//var text = 'Ваш возраст: ' + Age + ' лет';
let text = `Ваш возраст: ${age} лет`;
alert(text); // Должен вывести: Ваш возраст: 20 лет

//var hours = 12;
let hours = 12;
//var minutes = 45;
var minutes = 45;
hours = hours + 1;
//var textwithtime = 'Текущее время: ' + hours + ':' + minutes;
let textWithTime = `Текущее время: ${hours}:${minutes}`;
//alert(textwithtime); // Должен вывести: Текущее время: 13:45
alert(textWithTime);