// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/

const nums = [2, 3, 11, 15, 5, 7];
const target = 9;

const twoSum = function (nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const example = twoSum(nums, target);
console.log(example);

/* 
Time complexity of this solution is O(n^2).  The nested loop is a dead give away
that the time complexity will be large.  

The space complexity of this solution is 
O(n)
*/
