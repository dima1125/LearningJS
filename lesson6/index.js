//1. Что выведет функция?

/* function f() {
  alert(this);
}

let user = {
  g: f.bind(null),
};

user.g();

Ответ null т.к. внутри исходная функция будет вызвана с this=null */

// 2.Можем ли мы изменить this дополнительным связыванием?

/* function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();*/

// ответ Вася, т.к. запоминает контекст (и аргументы) при первом вызове f.bind, можно сделать новую привязку, но нельзя изменить существующую.

// 3. В свойство функции записано значение. Изменится ли оно после применения bind?

/* function sayHi() {
  alert( this.name );
 }
 sayHi.test = 5;
 
 let bound = sayHi.bind({
  name: "Вася"
 });
 
 alert( bound.test ); */

//Ответ: undefined. Результатом работы bind является другой объект. У него уже нет свойства test.

// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему?

/* function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); */

//Ответ askPassword получает функции loginOk/loginFail без контекста. необходимо использовать bind, чтобы передать в askPassword функции

// 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false). Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
/* function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

/*askPassword(
  () => user.login(true),
  () => user.login(false)
);*/
/* askPassword(user.login.bind(user, true), user.login.bind(user, false)); */

// 6.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.из переменной elem.

/* const elem = {value: ‘Привет’}

function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}
let newFunc = func.bind(elem)
newFunc("Иванов, Иван", "Петров, Петр"); */

// 7. Есть функция которая складывает три числа.Выполните каррирование

/* let curry = (a) => {
  return (curry = (b) => {
    return (curry = (c) => {
      return a + b + c;
    });
  });
};

console.log(curry(2)(3)(3)); */
