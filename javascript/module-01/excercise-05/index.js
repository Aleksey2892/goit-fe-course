let cost;
let delivery;

delivery = prompt('Укажите страну доставки');
console.log(delivery.toLowerCase());
delivery = delivery.toLowerCase();

switch (delivery) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    alert(
      'В вашей стране доставка не доступна. Доставка возможна в: "Китай", "Чили", "Австралия", "Индия", "Ямайка"',
    );
}

console.log(cost`Доставка в ${delivery} будет стоить ${cost} креитов`);
