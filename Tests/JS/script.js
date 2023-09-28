function mergeSort(array, start, end) {
  if (end <= start) return;
  // console.log(array);
  let midpoint = (end + start) / 2;
  mergeSort(array, start, midpoint);
  mergeSort(array, midpoint + 1, end);
  merge(array, start, midpoint, end);
}

function merge(array, start, midpoint, end) {
  var i, j, k;
  let left_length = midpoint - start + 1;
  let right_length = end - midpoint;
  // console.log(array)

  var left_array = [];
  var right_array = [];

  for (i = 0; i < left_length; i++) {
    left_array[i] = array[start + i];
  }

  for (j = 0; j < right_length; j++) {
    right_array[j] = array[midpoint + 1 + j];
  }

  i = j = 0;
  k = start;

  while (i < left_length && j < right_length) {
    if (left_array[i] <= right_array[j]) {
      array[k] = left_array[i];
      i++;
    } else {
      array[k] = right_array[j];
      j++;
    }
    k++;
  }

  while (i < left_length) {
    array[k] = left_array[i];
    i++;
    k++;
  }

  while (i < right_length) {
    array[k] = right_array[i];
    j++;
    k++;
  }
}

let arr = [8, 65, 9, 7, 3, 5, 54];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
