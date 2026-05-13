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

const fibonacciRec = function (n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const prevFib = fibonacciRec(n - 1);
    return [...prevFib, prevFib[n - 3] + prevFib[n - 2]];
  }
};

console.log(fibonacci(1));
console.log(fibonacciRec(1));
console.log(fibonacci(8));
console.log(fibonacciRec(8));

module.exports = { fibonacci, fibonacciRec };
