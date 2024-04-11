//1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

/* let arr = ["Капуста", "Репа", "Редиска", "Морковка"];

let newArr = arr.map(function (piece) {
  return piece.length;
});

console.log(newArr); */

//2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Используя метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

/* const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(numbers) {
  let result = [];
  numbers.reduce(function (sum, current, i) {
    return (result[i] = sum + current);
  }, 0);

  console.log(result);
}

currentSums(numbers); */

//3.Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

function sumSeven(numbers) {
  let obj = {};
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let elem = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      let item = numbers[j];

      if (elem + item != 7) continue;

      let num = elem + ":" + item;
      obj[num] = num;
    }
  }

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
}

console.log(sumSeven(numbers));
 */

//4.Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

/* const str = "Каждый охотник желает знать, где сидит фазан";
function firstChar(value, index, arr) {
  if (index == 0) return true;
  else return arr[index - 1] === " ";
}
let array = [].filter.call(str, firstChar);

console.log(array); */

//5.Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

/* const word = "фазан";
function getChars(value, index, str) {
  return str.substring(index - 1, index + 2);
}
let arr = Array.prototype.map.call(word, getChars);
console.log(arr); */

//6.Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

/* let numerics = [3, 5, 7, 2, 9, 1, 8];
function matching(first, second) {
  if (first == second) return 0;
  if (first > second) return -1;
  else return 1;
}

numerics = numerics.sort(matching);
console.log(numerics); */

//7.Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

/* let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
function getArr(a, b, c) {
  getArr = [];
  let d = a.concat(b, c);
  {
    let result = d.sort((a, b) => b - a);
    console.log(result);
  }
}
getArr(a, b, c); */

//8.Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

/* let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let matrixSum = matrix.map((item) => {
  return item.reduce((sum, matrix) => sum + matrix, 0);
});
let result = matrixSum.reduce((accumulator, current) => accumulator + current);

console.log(result); */

//9.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

/* let arr = [0, 1, 2, 3, 4, 5, 6, 7];
arr.sort((a, b) => b - a);
console.log(arr); */

//10.Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/* let arr = [0, 1, 2, 3, 4, 5, 6, 7];
index = arr.find(
  (
    (sum) => (value) =>
      (sum += value) > 10
  )(0)
);
console.log(index + 1); */

//11.Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.

/* let arr = Array.from(new Array(4), () => ({ name: "имя", position: null }));
arr[0].name = "Dima";
console.log(arr); */

/* function arrayFill(x, count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(x);
  }
  return arr;
}
console.log(arrayFill("x", 5)); */
