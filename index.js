function FindMissingNumbers(nums) {
  const maxNum = Math.max(...nums);
  const missingNumbers = [];

  for (let i = 0; i <= maxNum; i++) {
    if (!nums.includes(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

const nums = [0, 10];
const missingNumbers = FindMissingNumbers(nums);
console.log("Missing numbers:", missingNumbers);

const nums1 = [3, 0, 1];
const missingNumbers1 = FindMissingNumbers(nums1);
console.log("Missing numbers:", missingNumbers1);

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const missingNumbers2 = FindMissingNumbers(nums2);
console.log("Missing numbers:", missingNumbers2);

const nums3 = [0, 1];
const missingNumbers3 = FindMissingNumbers(nums3);
console.log("Missing numbers:", missingNumbers3);
