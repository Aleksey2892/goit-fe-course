let input;
let total = 0;

while (true) {
  input = prompt('Введите произвольное число');

  if (input === null) {
    console.log('Задача завершена пользователем!');
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) !== true) {
    console.log(`Было введено: ${input}`);
    total += input;
  } else {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
}

alert(`Общая сумма чисел равна ${total}`);
