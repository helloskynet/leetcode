/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。

示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

f(x) = f(x-1) + f(x-2)

*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let path = 0;
  function findPath(n) {
    if (n === 0) {
      path++;
      return;
    }
    if (n - 1 >= 0) {
      findPath(n - 1);
    }
    if (n - 2 >= 0) {
      findPath(n - 2);
    }
  }
  findPath(n);
  return path;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) {
    return 1;
  }
  if (n <= 3) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 0; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function findPath(path, a, b) {
    if (path <= 1) {
      return b;
    }
    return findPath(path - 1, b, a + b);
  }
  return findPath(n, 1, 1);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  /**
   * 
   * @param {*} path 台阶高度
   * @param {*} a 到达path台阶 方法数
   * @param {*} b 到达path-1处台阶 方法数
   */
  function findPath(path, a, b) {
    if (path >= n) {
      return a;
    }
    return findPath(path + 1, a + b, a);
  }
  return findPath(0, 1, 0);
};

console.log(climbStairs(44));
// console.log(climbStairs(44));
