const ADMIN__PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пароль');

if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else if (message !== 'jqueryismyjam') {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
