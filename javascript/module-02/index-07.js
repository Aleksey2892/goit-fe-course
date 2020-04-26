const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let loginLength;
let loginValid = false;
let loginUnique = false;

const isLoginValid = login => {
  loginLength = login.length;

  if (loginLength >= 4 && loginLength <= 16) {
    loginValid = true;
  }
  return loginValid;
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login) === false) {
    loginUnique = true;
  }
  return loginUnique;
};

const addLogin = function (allLogins, login) {
  isLoginValid(login);
  isLoginUnique(allLogins, login);

  if (loginValid === false) {
    return `Ошибка! Длина вашего логина: '${loginLength}' символ(ов). Логин должен быть от 4 до 16 символов.`;
  }

  if (loginUnique === false) {
    return 'Такой логин уже используется!';
  }
  if (loginValid === true && loginUnique === true) {
    logins.push(login);
    return 'Логин успешно добавлен!';
  }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(logins);
