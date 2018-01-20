function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (typeof arr[j] !== 'undefined' && typeof arr[j + 1] !== 'undefined') {
        if (arr[j] > arr[j + 1]) {
          var tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 1, 0, -1]));
