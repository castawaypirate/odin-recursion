const fibonacci = function (n) {
  let seq = [];
  if (n === 0) {
    return seq;
  }
  seq.push(0);
  if (n === 1) {
    return seq;
  }
  seq.push(1);
  for (let i = 2; i <= n - 1; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(8));

const fibonacciRec = function (n) {
  return;
};

// Do not edit below this line
module.exports = fibonacci;
