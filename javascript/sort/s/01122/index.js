/* 
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 

提示：

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中

*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  for (let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i;
  }
  const buckets = [];
  const others = [];
  for (let i = 0; i < arr1.length; i++) {
    if (map[arr1[i]] >= 0) {
      buckets[map[arr1[i]]] = buckets[map[arr1[i]]]
        ? buckets[map[arr1[i]]] + 1
        : 1;
    } else {
      others.push(arr1[i]);
    }
  }
  const res = [];
  for (let i = 0; i < buckets.length; i++) {
    while (buckets[i] > 0) {
      res.push(arr2[i]);
      buckets[i]--;
    }
  }
  return res.concat(others.sort((a, b) => a - b));
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    let aindex = arr2.indexOf(a);
    let bindex = arr2.indexOf(b);
    if (aindex === -1 && bindex === -1) {
      return a - b;
    } else if (aindex === -1) {
      return 1;
    } else if (bindex === -1) {
      return -1;
    } else {
      return aindex - bindex;
    }
  });
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
