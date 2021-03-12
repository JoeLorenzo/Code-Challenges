// A slight variation on the classic two sums problem
// Find all the pairs of two integers in an unsorted array that sum up to a given sum.
// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program
// should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.
const sampleSum = 7;
const sampleArr = [3, 5, 2, -4, 8, 11];

const sumPairs = function (arr, sum) {
  let pairArr = [];
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairArr.push([arr[i], arr[j]]);
      }
    }
  }
  return pairArr;
};

const problem = console.log(sumPairs(sampleArr, sampleSum));
