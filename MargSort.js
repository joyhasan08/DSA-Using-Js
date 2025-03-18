// Merge two sorted arrays
function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements and merge
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements (if any)
    return merged
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }
  
  // Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    // Split the array into halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    // Merge the sorted halves
    return merge(left, right);
  }
  
  // Example
  const unsortedArray = [5, 3, 8, 4, 2, 1, 9];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8, 9]