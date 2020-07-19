// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
  let a = Object.keys(firstObject).reduce((obj, key) => ({ ...obj, [firstObject[key]]: key }), {});
      return a;
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(secondObject) {
  let b = Object.keys(secondObject).reduce((obj, key) => ({ ...obj, [secondObject[key]]: key }), {});
      return b;
};

const result2 = resolve2(secondObject);
console.log(result2); 
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(secondObject);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const year = 1905;
function centuryFromYear(year) {
  return Math.ceil(year / 100)
}; // 20
console.log(centuryFromYear(year));

const year2 = 1700;
function centuryFromYear2(year2) {
  return Math.ceil(year2/100)
}; // 17.
console.log(centuryFromYear2(year2));
