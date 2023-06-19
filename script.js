function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b); // Sort the array in ascending order

  let closestSum = Infinity; // Variable to track the closest sum found

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Found exact sum equal to target
        return sum;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;
