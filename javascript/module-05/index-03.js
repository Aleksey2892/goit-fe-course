class Storage {
  constructor(items) {
    this.items = items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  getItems() {
    return this.items;
  }

  removeItem(item) {
    this.items.forEach(function(itemVal, index) {
      if (itemVal.includes(item)) {
        this.items.splice(index, 1);
      }
    }, this);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
