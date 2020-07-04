/* 
数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

示例 1:

输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 示例 2:

输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
注意：

cost 的长度将会在 [2, 1000]。
每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。

*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs3 = function (cost) {
  function findPath(path, a, b) {
    if (path >= cost.length) {
      return Math.min(a, b);
    }
    return findPath(path + 1, b, Math.min(a, b) + cost[path]);
  }
  return findPath(0, 0, 0);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const path = [];
  path[0] = 0;
  path[1] = Math.min(cost[0], cost[1]);
  for (let i = 2; i < cost.length; i++) {
    const a = path[i - 1] + cost[i];
    const b = path[i - 2] + cost[i - 1];
    path[i] = Math.min(a, b);
  }
  return path[cost.length - 1];
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs1 = function (cost) {
  let a = 0,
    b = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    temp = cost[i] + Math.min(a, b);
    b = a;
    a = temp;
  }
  return Math.min(a, b);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let a = 0,
    b = 0,
    swap = 0;
  for (let i = 0; i < cost.length; i++) {
    swap = cost[i] + Math.min(a, b);
    a = b;
    b = swap;
  }
  return Math.min(a, b);
};

console.log(minCostClimbingStairs3([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
