/* const str = "Hello, World!";
function stringToarray(str) {
  return str.split(" ");
}

console.log(stringToarray(str)); */

/* const str = "Hello, World!";
function deleteСharacters(str, length) {
  return str.slice(0, length);
}

console.log(deleteСharacters(str, 9)); */

/* const str = "Hello, Lad academy";
function insertDash(str) {
  return str
    .toUpperCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, "-");
}

console.log(insertDash(str)); */

/* const str = "academy";
const result = str.charAt(0).toUpperCase([]) + str.slice(1);
console.log(result); */

/* const str = "строка в качестве аргумента";
function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

console.log(capitalize(str)); */

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

/* const str = "str1ingify%3S$tr(fdgfdf5st4r$";
function removeChar(str) {
  return str.replace(/[^a-zA-Z0-9]/gi, "");
}
console.log(removeChar(str)); */

/* function comparison(str1, str2) {
  let result = str1.toUpperCase() === str2.toUpperCase();
  return result;
}
console.log(comparison("string", "sTrInG")); */

/* function insensitiveSearch(str1, str2) {
  let search_str = new RegExp(str2, "gi");
  let result = str1.search(search_str);

  return result > 0 ? "Соответствует" : "Не соответствует";
}
console.log(
  insensitiveSearch("Изучаю web разработку на JavaScript", "javascript")
); */

/* let str = "hEllo woRld";
function initCap(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (m) {
    return m.toUpperCase().replace(/\s+/g, "");
  });
}

console.log(initCap(str)); */

/* function repeatStr(str, n) {
  let new_str = "";
  while (n-- > 0) new_str += str;
  return new_str;
}

console.log(repeatStr("Hello!", 3)); */

/* let pathname = "/lad/academy/js/course";

function path(pathname) {
  var name = pathname.split("/").pop();
  return name;
}

console.log(path(pathname)); */
