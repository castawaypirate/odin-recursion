const mergeSort = function (arr, start, end) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor(start + (end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
  return arr;
};

const merge = function (arr, start, mid, end) {
  let i = start;
  let j = mid + 1;
  const temp = [];

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let k = start, l = 0; k <= end; k++, l++) {
    arr[k] = temp[l];
  }
};

let u = [3, 1, 2, 1234, 43, 341234, 434, 2, 4, 41234, 4, 5555, 1342, 3434343];
let s = mergeSort(u, 0, u.length - 1);
console.log(s);

module.exports = mergeSort;
