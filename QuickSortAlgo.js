function quickSort(arr) {
  if (arr.length <= 1) return arr;

  // Select the middle element as the pivot
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const right = [];

  // Partition the array into left and right subarrays
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // Skip the pivot element
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  // Recursively apply quickSort to left and right, then combine
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [5, 3, 7, 2, 9, 1, 3];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 7, 9]