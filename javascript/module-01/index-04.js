const pricePerDroid = 3000;
let credits = 23580;
let numberGoods;
let totalPrice;

numberGoods = prompt('Сколько дроидов вы хотите купить?');

if (numberGoods === null || numberGoods === '0') {
  console.log('Отменено пользователем!');
}

numberGoods = Number(numberGoods);

if (Number.isNaN(numberGoods) !== true) {
  totalPrice = numberGoods * pricePerDroid;
} else {
  console.log('Введите число');
}

if (totalPrice < 0) {
  console.log('Число не может быть отрицательным');
} else if (totalPrice >= credits) {
  console.log('Недостаточно средств на счету!');
} else if (totalPrice < credits && totalPrice !== 0) {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${numberGoods} дроид(ов) на сумму ${totalPrice} кредитов, на счету осталось ${credits} кредитов.`,
  );
}
