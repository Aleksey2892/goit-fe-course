const ADMIN__PASSWORD = 'jqueryismyjam';
let message;

do {
  message = prompt('Введите пароль');
  if (message === null) {
    console.log('Отменено пользователем!');
    break;
  }
  message = message.toLowerCase();
  if (message !== ADMIN__PASSWORD) {
    console.log('Доступ запрещен, неверный пароль!');
  }
} while (message !== ADMIN__PASSWORD);

if (message !== null) {
  console.log('Добро пожаловать!');
  alert(message);
}
