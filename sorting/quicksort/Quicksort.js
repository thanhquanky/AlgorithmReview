
function Quicksort(arr, left, right, reverse, comparator) {
  reverse = typeof reverse !== 'undefined' ? reverse : false;
  comparator = typeof comparator !== 'undefined' ? comparator : null;
  if (left < right) {
    var pivot = partition(arr, left, right, reverse, comparator);
    Quicksort(arr, left, pivot - 1, reverse, comparator);
    Quicksort(arr, pivot + 1, right, reverse, comparator);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right, reverse, comparator) {
  var mid = (left + right) >> 1;
  var pivotIndex = mid;
  var storeIndex = left;
  var pivotValue = arr[pivotIndex];
  swap(arr, pivotIndex, right);
  for (var i=left; i<right; i++) {
    if (!reverse) {
      if (comparator === null) {
        if (arr[i] < pivotValue) {
          swap(arr, i, storeIndex);
          storeIndex++;
        }
      }
      else {
        if (comparator(arr[i], pivotValue) < 0) {
          swap(arr, i, storeIndex);
          storeIndex++;
        }
      }
    }
    else {
      if (comparator === null) {
        if (arr[i] > pivotValue) {
          swap(arr, i, storeIndex);
          storeIndex++;
        }
      }
      else {
        if (comparator(arr[i], pivotValue) > 0) {
          swap(arr, i, storeIndex);
          storeIndex++;
        }
      }
    }
  }
  swap(arr, storeIndex, right);
  return storeIndex;
}
