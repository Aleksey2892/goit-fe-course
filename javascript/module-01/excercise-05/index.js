let cost;
let delivery;
let country;

delivery = prompt('Укажите страну доставки');
// console.log(delivery.toLowerCase());
if (delivery === null) {
  console.log('Отменено пользователем!');
} else delivery = delivery.toLowerCase();

switch (delivery) {
  case 'китай':
    delivery = '"Китай"';
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    delivery = '"Чили"';
    break;

  case 'австралия':
    cost = 170;
    delivery = '"Австралия"';
    break;

  case 'индия':
    cost = 80;
    delivery = '"Индия"';
    break;

  case 'ямайка':
    cost = 120;
    delivery = '"Ямайка"';
    break;

  default:
    if (delivery !== null) {
      alert(
        'В вашей стране доставка не доступна. Доставка возможна в: "Китай", "Чили", "Австралия", "Индия", "Ямайка"',
      );
    }
}

if (
  delivery === '"Китай"' ||
  delivery === '"Австралия"' ||
  delivery === '"Индия"' ||
  delivery === '"Ямайка"'
) {
  alert(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
}
