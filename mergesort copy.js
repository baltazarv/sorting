function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, middle));
  var right = mergeSort(arr.slice(middle));
  var results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  if (left.left) {
    results.concat(left);
  }
  if (left.right) {
    results.concat(right);
  }

  // console.log(left, right);
  return results;
}

console.log(mergeSort([2, 1, 0]));
