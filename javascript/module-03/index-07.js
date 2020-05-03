/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let counter = 0;

const account = {
  balance: 0,

  transactions: [],

  counterId() {
    counter += 1;
    return counter;
  },

  createTransaction(amount, type) {
    const result = { sum: amount, act: type, id: this.counterId() };
    this.transactions.push(result);
  },

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Операция [+${amount}] прошла успешно.`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return `Снятие суммы [${amount}] не возможно :( Доступный баланс: ${this.balance}.`;
    }
    this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    return `Операция [-${amount}] прошла успешно.`;
  },

  getBalance() {
    return `Баланс: ${this.balance}`;
  },

  getTransactionDetails(id) {
    for (const val of this.transactions) {
      if (id === val.id) {
        return val;
      }
    }
    return `Не нашли такой id: '${id}' :(`;
  },

  getTransactionTotal(type) {
    let result = 0;
    for (const value of this.transactions) {
      if (type === value.act) {
        result += value.sum;
      }
    }
    return `Общая сумма [${type}] транзакций: ${result}`;
  },
};

console.log(account.deposit(110));
console.log(account.deposit(120));
console.log(account.deposit(130));
console.log(account.withdraw(50));
console.log(account.withdraw(90));

// console.table(account);

console.table(account.transactions);

console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getBalance());

// console.log(account.counterId());

console.log(account.getTransactionDetails(5));
