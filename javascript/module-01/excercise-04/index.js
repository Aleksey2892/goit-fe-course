const pricePerDroid = 3000;
let credits = 23580;
let numberGoods;
let totalPrice;

numberGoods = prompt('Сколько дроидов вы хотите купить?');

if (numberGoods === null || numberGoods === '' || numberGoods < 1) {
  console.log('Отменено пользователем!');
}

totalPrice = numberGoods * pricePerDroid;

if (totalPrice >= credits) {
  console.log('Недостаточно средсив на счету!');
} else if (totalPrice < credits && totalPrice !== 0) {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${numberGoods} дроид(ов) на сумму ${totalPrice} кредитов, на счету осталось ${credits} кредитов.`,
  );
}
