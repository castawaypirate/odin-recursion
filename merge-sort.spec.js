const mergeSort = require("./merge-sort");

describe("Merge Sort algorithm", () => {
  it("sorts an array of random numbers correctly", () => {
    const arr = [
      3, 1, 2, 1234, 43, 341234, 434, 2, 4, 41234, 4, 5555, 1342, 3434343,
    ];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([
      1, 2, 2, 3, 4, 4, 43, 434, 1234, 1342, 5555, 41234, 341234, 3434343,
    ]);
  });

  it("handles an already sorted array", () => {
    const arr = [1, 2, 3, 4, 5];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles a reverse-sorted array", () => {
    const arr = [5, 4, 3, 2, 1];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles arrays with negative numbers", () => {
    const arr = [4, -1, 0, -8, 2];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([-8, -1, 0, 2, 4]);
  });

  it("handles an array with one element", () => {
    const arr = [42];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([42]);
  });

  it("handles an empty array", () => {
    const arr = [];
    mergeSort(arr, 0, arr.length - 1);

    expect(arr).toEqual([]);
  });
});
