//1.Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

/* const str = "Hello, World!";
function stringToarray(str) {
  return str.split(" ");
}

console.log(stringToarray(str)); */

//2.Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

/* const str = "Hello, World!";
function deleteСharacters(str, length) {
  return str.slice(0, length);
}

console.log(deleteСharacters(str, 9)); */

//3.Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

/* let str = "Hello, Lad academy";
function insertDash(str) {
  return str
    .toUpperCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, "-");
}

console.log(insertDash(str)); */

//4.Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний

/* const str = "academy";
const result = str.charAt(0).toUpperCase([]) + str.slice(1);
console.log(result); */

//5.Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

/* const str = "строка в качестве аргумента";
function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

console.log(capitalize(str)); */

//6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

/* let str = "КаЖдЫй ОхОтНиК";
function changeRegister(str) {
  let new_str = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
      new_str += str[i].toUpperCase();
    } else {
      new_str += str[i].toLowerCase();
    }
  }
  return new_str;
}
console.log(changeRegister(str)); */

//7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

/* const str = "str1ingify%3S$tr(fdgfdf5st4r$";
function removeChar(str) {
  return str.replace(/[^a-zA-Z0-9]/gi, "");
}
console.log(removeChar(str)); */

//8.Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента

/* const zeros = (num, len, sign = "+") => {
  if (String(num).length > len) return sign + num;
  return sign + num + "0".repeat(len - String(num).length);
};

console.log(zeros(111, 3, "-")); */

//9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

/* function comparison(str1, str2) {
  let result = str1.toUpperCase() === str2.toUpperCase();
  return result;
}
console.log(comparison("string", "sTrInG")); */

//10.Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

/* function insensitiveSearch(str1, str2) {
  let search_str = new RegExp(str2, "gi");
  let result = str1.search(search_str);

  return result > 0 ? "Содержит" : "Не Содержит";
}
console.log(
  insensitiveSearch("Изучаю web разработку на JavaScript", "javascript")
); */

//11.Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в camelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

/* let str = "hEllo woRld";
function initCap(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, "");
  });
}

console.log(initCap(str)); */

//12.Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из camelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы
/* const str = "exampleCamelCaseString";

const initSnake = (str) =>
  str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
console.log(initSnake(str)); */

/* const str = "exampleCamelCaseString";
const initSnake = (str) => {
  let tempStr = "";
  for (let i of str) {
    tempStr =
      i === i.toUpperCase() ? tempStr + "_" + i.toLowerCase() : tempStr + i;
  }
  return tempStr;
};

console.log(initSnake(str)); */

//13.Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

/* function repeatStr(str, n) {
  let new_str = "";
  while (n-- > 0) new_str += str;
  return new_str;
}

console.log(repeatStr("Hello!", 3)); */

//14. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "/" ) из полного пути к файлу

/* let pathname = "/lad/academy/js/course";

function path(pathname) {
  var name = pathname.split("/").pop();
  return name;
}

console.log(path(pathname)); */

//15.Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

//16. Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "/" ) из полного пути к файлу

/* let str = "Юриспруденция — это наука, изучающая свойства государства и права";

function getSubstr(str, char, pos) {
  if (pos == "after") return str.slice(str.indexOf(char) + 1);
  else if (pos == "before") return str.slice(0, str.indexOf(char));
  else return str;
}

console.log(getSubstr(str, "—", "before")); */

//17.Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

/* function insert(str, substr, pos) {
  let array = str.split("");
  array.splice(pos, 0, substr);
  return array.join("");
}
console.log(insert("Казнить нельзя", "Помиловать ", 8)); */

//18. Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

/* function limitStr(str, n, symb) {
  if (!n && !symb) return str;
  symb = symb || "...";
  return str.substr(0, n - symb.length) + symb;
}
console.log(limitStr("Каждый охотник желает знать.", 10)); */

//19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

//20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

/* let str = "Каждый      охотник желает                знать.";
str = str.replace(/\s{2,}/g, " ");
console.log(str); */

//21.Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

/* let str = "Каждый охотник желает знать.";
function cutString(str, n) {
  return str.split(" ").splice(0, n).join(" ");
}

console.log(cutString(str, 2)); */

//22.Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word

/* const findWord = (word, str) => (str.includes("word") ? true : false);
console.log(findWord("word", "hello word !!!")); */
