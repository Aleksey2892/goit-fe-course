const total = 100;
const price = 49;
let ordered;

ordered = 99;

if (total < ordered) {
  console.log('На складе недостаточно товаров');
} else {
  let finalPrice = price * ordered;
  console.log(
    `Заказ оформлен на сумму ${finalPrice} рублей, с вами свяжется менеджер`,
  );
}
