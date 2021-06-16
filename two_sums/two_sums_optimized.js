// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// https://leetcode.com/problems/two-sum/

const nums = [2, 3, 11, 15, 5, 7];
const target = 9;

const twoSum = function (nums, target) {
  dict = {};
  for (i = 0; i < nums.length; i++) {
    dict[nums[i]] = i;
  }
  for (i = 0; i < nums.length; i++) {
    for (const property in dict) {
      console.log(`${property}: ${object[property]}`);
    }
  }
  return dict;
};

const example = twoSum(nums, target);
console.log(example);
