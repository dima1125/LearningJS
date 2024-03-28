/* function number(num) {
  return num ** 2;
}
console.log(number(5)); */

/* function sum(a, b) {
  return a + b;
}
const resultSum = sum(5, 9);
console.log(resultSum); */

/* function sub(a, b, c) {
  return (a - b) / c;
}
const resultSub = sub(50, 10, 2);
console.log(resultSub); */

/* const day = 5;
function dayWeek(day) {
  switch (day) {
    case 1:
      console.log("понедельник");

      break;
    case 2:
      console.log("вторник");

      break;
    case 3:
      console.log("среда");

      break;
    case 4:
      console.log("четверг");

      break;
    case 5:
      console.log("пятница");

      break;
    case 6:
      console.log("суббота");

      break;
    case 7:
      console.log("воскресенье");
  }
  return day;
}
dayWeek(day);
 */

/* function num(num1, num2) {
  return num1 == num2;
}
if (num(8, 13)) {
  console.log("верно");
} else {
  console.log("не верно");
} */

/* function num(num1, num2) {
  return num1 + num2 > 10;
}
if (num(1, 5)) {
  console.log("верно");
} else {
  console.log("не верно");
} */

/* function num(num) {
  if (num >= 0) {
    return "положительное";
  } else {
    return "отрицательное";
  }
}
console.log(num(5));
console.log(num(-5)); */

/* function isNumberInRange(num) {
  if (isNumberInRange > 0 && isNumberInRange < 10) {
    return "true";
  } else {
    return "false";
  }
}
console.log(isNumberInRange(100));
 */

function isEven(num) {
  if (num % 2 == 0) {
    return "четное";
  } else {
    return "не четное";
  }
}
num = 8;
console.log(isEven(num));
