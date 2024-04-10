/* let arr = ["Капуста", "Репа", "Редиска", "Морковка"];

let newArr = arr.map(function (piece) {
  return piece.length;
});

console.log(newArr); */

/* const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(numbers) {
  let result = [];
  numbers.reduce(function (sum, current, i) {
    return (result[i] = sum + current);
  }, 0);

  console.log(result);
}

currentSums(numbers); */

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

/* const str = "Каждый охотник желает знать, где сидит фазан";
function firstChar(value, index, arr) {
  if (index == 0) return true;
  else return arr[index - 1] === " ";
}
let array = [].filter.call(str, firstChar);

console.log(array); */

/* const word = "фазан";
function getChars(value, index, str) {
  return str.substring(index - 1, index + 2);
}
let arr = Array.prototype.map.call(word, getChars);
console.log(arr); */

/* let numerics = [3, 5, 7, 2, 9, 1, 8];
function matching(first, second) {
  if (first == second) return 0;
  if (first > second) return -1;
  else return 1;
}

numerics = numerics.sort(matching);
console.log(numerics); */

/* let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
function getArr(a, b, c) {
  let d = a.concat(b, c);
  let f = d.pop();
  while (f != undefined) {
    console.log(f + " ");
    f = d.pop();
  }
}
getArr(a, b, c); */

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
