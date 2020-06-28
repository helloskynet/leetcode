/* 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？



例如，上图是一个7 x 3 的网格。有多少可能的路径？

 

示例 1:

输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
示例 2:

输入: m = 7, n = 3
输出: 28
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 10 ^ 9

使用排列组合解决问题可能会 溢出

C(m,n),,,下标为m上标为n

C(m+n-2,m-1)

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = [[]];
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 0; i < m; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

/**
 * @description 上面的简化版
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
  const dp = [Array(n).fill(1)];
  for (let i = 1; i < m; i++) {
    dp[i] = [1];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

/**
 * @description 递归,,缓存计算结果,,不缓存的话，数据过大就超时了
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths3 = function (m, n) {
  const dp = [];
  for (let i = 1; i <= m; i++) {
    dp[i] = [[1]];
  }
  const findPath = function (m1, n1) {
    if (m1 == 1 || n1 == 1) {
      return 1;
    }
    if (dp[m1][n1] && dp[m1][n1] > 0) {
      return dp[m1][n1];
    }
    const m2 = m1 - 1;
    const n2 = n1 - 1;
    dp[m2][n1] = findPath(m2, n1);
    dp[m1][n2] = findPath(m1, n2);
    return dp[m2][n1] + dp[m1][n2];
  };
  return findPath(m, n);
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths4 = function (m, n) {
  const row = Array(m).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      row[j] = row[j] + row[j - 1];
    }
  }
  return row[row.length - 1];
};

console.log(uniquePaths(91, 9));

console.log(uniquePaths2(91, 9));

console.log(uniquePaths3(91, 9));

console.log(uniquePaths(91, 9));
