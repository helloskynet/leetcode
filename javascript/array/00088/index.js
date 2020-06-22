/* 
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let a = m - 1,
    b = n - 1,
    i = m + n - 1;
  for (; i >= 0 && a >= 0 && b >= 0; i--) {
    if (nums1[a] > nums2[b]) {
      nums1[i] = nums1[a];
      a--;
    } else {
      nums1[i] = nums2[b];
      b--;
    }
  }
  while (b >= 0) {
    nums1[i--] = nums2[b--];
  }
};

const nums1 = [1, 2, 7, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
