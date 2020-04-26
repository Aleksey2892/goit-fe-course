let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else if (input === 0) {
    continue;
  }

  numbers.push(input);
}
if (numbers.length === 0) {
  console.log('Отменено пользователем!');
} else {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Введенные цифры: '${numbers.join(', ')}'`);
  console.log(`Общая сумма чисел равна [${total}].`);
}
