/* 
给定一个包含 非负数 的数组和一个目标 整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为 n*k，其中 n 也是一个整数。

 

示例 1：

输入：[23,2,4,6,7], k = 6
输出：True
解释：[2,4] 是一个大小为 2 的子数组，并且和为 6。
示例 2：

输入：[23,2,6,4,7], k = 6
输出：True
解释：[23,2,6,4,7]是大小为 5 的子数组，并且和为 42。
 

说明：

数组的长度不会超过 10,000 。
你可以认为所有数字总和在 32 位有符号整数范围内。

*/

/* 

执行用时：
7420 ms
, 在所有 JavaScript 提交中击败了
5.73%
的用户
内存消耗：
130.3 MB
, 在所有 JavaScript 提交中击败了
50.00%
的用户
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = {};
  const sumA = [];
  let s = 0;
  nums.forEach((item) => {
    s += item;
    sumA.push(s);
  });
  function findPath(start, end) {
    if (end >= nums.length) {
      return false;
    }
    const key = `${start}s+e${end}`;
    if (map[key]) {
      return false;
    }
    let sum = sumA[end] - sumA[start] + nums[start];
    if (sum === 0 || sum % k === 0) {
      return true;
    }
    map[key] = true;
    if (findPath(start + 1, end + 1)) {
      return true;
    }
    if (findPath(start, end + 1)) {
      return true;
    }
    return false;
  }
  return findPath(0, 1);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum1 = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === 0 || sum % k === 0) {
        return true;
      }
    }
  }
  return false;
};

const sq = checkSubarraySum1;

console.log(sq([1, 2, 3], 5)); // true
console.log(sq([5, 0, 0], 0)); // true
console.log(sq([0, 0], 0)); // true
console.log(sq([23, 6, 2], 6)); // false
console.log(sq([23, 2, 6, 4, 7], 6)); // true
