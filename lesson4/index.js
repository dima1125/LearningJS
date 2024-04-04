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

/* function zeros(num, len) {
  let len_zer = len - (num + "").length,
    num_zer = "";
  for (; len_zer > 0; len_zer--) {
    num_zer += 0;
  }

  return sign === undefined || sign === ""
    ? num_zer + num + ""
    : sign + num_zer + num + "";
}
console.log(zeros(145, 5 "-"));
 */ //не правильно//

function comparison(str1, str2) {
  let result = str1.toUpperCase() === str2.toUpperCase();
  return result;
}
console.log(comparison("string", "sTrInG"));
