function generateTransactionId() {
  let count = 0;
  return function () {
    let random = Math.random();
    const transactionString = `transaction_${++count}_${random}`;
    return Symbol(transactionString);
  };
}

const getTransactionId = generateTransactionId();

const transaction1 = getTransactionId();
console.log(transaction1);

const transaction2 = getTransactionId();
console.log(transaction2);

const transaction3 = getTransactionId();
console.log(transaction3);
