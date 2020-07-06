/* 

给定一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

示例 1:

输入: nums = [3, 4, 2]
输出: 6
解释: 
删除 4 来获得 4 个点数，因此 3 也被删除。
之后，删除 2 来获得 2 个点数。总共获得 6 个点数。
示例 2:

输入: nums = [2, 2, 3, 3, 3, 4]
输出: 9
解释: 
删除 3 来获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
注意:

nums的长度最大为20000。
每个整数nums[i]的大小都在[1, 10000]范围内。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = [];
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let a = 0;
  let b = a[1] || 0;
  let temp = 0;
  for (let i = 1; i < map.length; i++) {
    temp = a;
    a = b;
    b = Math.max(a, temp + i * (map[i] || 0));
  }
  return b;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = [];
  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += nums[i];
    } else {
      map[nums[i]] = nums[i];
    }
  }
  let a = 0;
  let b = a[1] || 0;
  let temp = 0;
  for (let i = 1; i < map.length; i++) {
    temp = a;
    a = b;
    b = Math.max(a, temp + (map[i] || 0));
  }
  return b;
};

console.log(deleteAndEarn([1, 3])); // 6 9
console.log(deleteAndEarn([1, 3, 4, 2, 10000, 0])); // 6 9
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
console.log(deleteAndEarn([1, 9]));
console.log(deleteAndEarn([2]));
