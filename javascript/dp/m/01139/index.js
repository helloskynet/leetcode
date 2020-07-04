/* 
给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0。

 

示例 1：

输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
输出：9
示例 2：

输入：grid = [[1,1,0,0]]
输出：1
 

提示：

1 <= grid.length <= 100
1 <= grid[0].length <= 100
grid[i][j] 为 0 或 1

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  let maxLen = 0;

  const map = [];

  for (let i = 0; i < grid.length; i++) {
    map[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      let a = 0,
        b = 0;
      for (let k = j; k < grid[i].length; k++) {
        if (grid[i][k] === 1) {
          a++;
        } else {
          break;
        }
      }
      for (let k = i; k < grid.length; k++) {
        if (grid[k][j] === 1) {
          b++;
        } else {
          break;
        }
      }

      map[i][j] = [b, a];
    }
  }
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      item = map[i][j];
    }
  }

  console.log(map);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  let length = grid.length; //矩阵的长
  if (length == 0) return 0;
  let width = grid[0].length; //矩阵的宽

  //用dp[i][j][0]来表示第i行第j列的 左边 连续的1的个数
  //用dp[i][j][1]来表示第i行第j列的 上面 连续的1的个数
  let dp = [];

  let maxLen = 0;
  for (let i = 1; i <= length; i++) {
    if (!dp[i]) {
      dp[i] = [[[0, 0]]];
    }
    for (let j = 1; j <= width; j++) {
      if (!dp[i][j]) {
        dp[i][j] = [0, 0];
      }
      if (grid[i - 1][j - 1] == 1) {
        dp[i][j][0] += (dp[i][j - 1][0] || 0) + 1;
        dp[i][j][1] += (dp[i - 1][j][1] || 0) + 1;
        //尝试以第i行第j列(当前点)为右下角构成正方形
        let len = Math.min(dp[i][j][0], dp[i][j][1]); //最大可能长度
        while (len > 0) {
          //判断这个可能的正方形右上角左侧是否有连续len个1 && 左下角的上方是否有连续len个1
          if (dp[i - len + 1][j][0] >= len && dp[i][j - len + 1][1] >= len)
            break;
          len--;
        }
        maxLen = Math.max(maxLen, len);
      }
    }
  }
  return maxLen * maxLen;
};

largest1BorderedSquare([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]);
largest1BorderedSquare([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 0]
]);
