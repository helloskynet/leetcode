/* 

给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。

如果符合下列情况之一，则数组 A 就是 锯齿数组：

每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
返回将数组 nums 转换为锯齿数组所需的最小操作次数。

 

示例 1：

输入：nums = [1,2,3]
输出：2
解释：我们可以把 2 递减到 0，或把 3 递减到 1。
示例 2：

输入：nums = [9,6,1,6,2]
输出：4
 

提示：

1 <= nums.length <= 1000
1 <= nums[i] <= 1000
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  const len = nums.length;
  if (len <= 1) {
    return 0;
  }
  if (len == 2 && nums[0] == nums[1]) {
    return 1;
  }
  let moves2 = 0;

  for (let i = 1; i < len; i = i + 2) {
    let downMin = 0;
    if (i + 1 == len) {
      downMin = nums[i - 1] > nums[i] ? nums[i] : nums[i - 1] - 1;
    } else {
      downMin = Math.min(nums[i - 1], nums[i + 1]) - 1;
    }
    if (nums[i] > downMin) {
      moves2 = moves2 + nums[i] - downMin;
    }
  }
  if (moves2 == 0) {
    return 0;
  }
  let moves4 = 0;
  for (let i = 0; i < len; i = i + 2) {
    let downMin = 0;
    if (i == 0) {
      downMin = nums[i] > nums[i + 1] ? nums[i + 1] - 1 : nums[i];
    } else if (i + 1 == len) {
      downMin = nums[i - 1] > nums[i] ? nums[i] : nums[i - 1] - 1;
    } else {
      downMin = Math.min(nums[i - 1], nums[i + 1]) - 1;
    }
    if (nums[i] > downMin) {
      moves4 = moves4 + nums[i] - downMin;
    }
  }
  if (moves4 == 0) {
    return 0;
  }
  return Math.min(moves2, moves4);
};

// console.log(movesToMakeZigzag([2, 7, 10, 9, 8, 9]));
// console.log(movesToMakeZigzag([3, 10, 7, 9, 9, 3, 6, 9, 4]));
// console.log(movesToMakeZigzag([3, 1, 7, 4, 4, 1, 1, 10, 10, 9]));
console.log(movesToMakeZigzag([1, 2, 3]));
