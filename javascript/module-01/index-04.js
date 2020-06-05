const pricePerDroid = 3000;
let credits = 23580;
let numberGoods;
let totalPrice;

numberGoods = prompt('Сколько дроидов вы хотите купить?');

if (numberGoods === null || numberGoods === '0') {
  console.log('Отменено пользователем!');
} else {
  totalPrice = numberGoods * pricePerDroid;
}

if (totalPrice >= credits) {
  console.log('Недостаточно средств на счету!');
} else if (numberGoods < 0) {
  console.log('Число не может быть отрицательным!');
}

if (numberGoods > 0 && totalPrice < credits) {
  credits -= totalPrice;
  console.log(
    `Вы купили ${numberGoods} дроид(ов), на счету осталось ${credits} кредитов.`,
  );
}
