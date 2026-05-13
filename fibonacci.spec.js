const { fibonacci, fibonacciRec } = require("./fibonacci");

describe("Fibonacci algorithms", () => {
  it("returns an empty array for n = 0", () => {
    const iterativeResult = fibonacci(0);
    const recursiveResult = fibonacciRec(0);

    // 1. Check against the expected mathematical outcome
    expect(iterativeResult).toEqual([]);

    // 2. Compare the two algorithms against each other
    expect(iterativeResult).toEqual(recursiveResult);
  });

  it("returns [0] for n = 1", () => {
    const iterativeResult = fibonacci(1);
    const recursiveResult = fibonacciRec(1);

    expect(iterativeResult).toEqual([0]);
    expect(iterativeResult).toEqual(recursiveResult);
  });

  it("returns [0, 1] for n = 2", () => {
    const iterativeResult = fibonacci(2);
    const recursiveResult = fibonacciRec(2);

    expect(iterativeResult).toEqual([0, 1]);
    expect(iterativeResult).toEqual(recursiveResult);
  });

  it("returns the correct sequence for n = 8", () => {
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13];
    const iterativeResult = fibonacci(8);
    const recursiveResult = fibonacciRec(8);

    expect(iterativeResult).toEqual(expectedSequence);
    expect(iterativeResult).toEqual(recursiveResult);
  });

  it("generates identical sequences for larger inputs (n = 15)", () => {
    const iterativeResult = fibonacci(15);
    const recursiveResult = fibonacciRec(15);

    // For larger numbers, checking length and final calculation is often enough
    expect(iterativeResult.length).toBe(15);
    expect(iterativeResult[14]).toBe(377);

    // The ultimate comparison test
    expect(iterativeResult).toEqual(recursiveResult);
  });
});
