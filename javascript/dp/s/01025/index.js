/* 
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

 

示例 1：

输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
示例 2：

输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
 

提示：

1 <= N <= 1000

谁抓到偶数赢，
奇数的约数一定是奇数
奇数减去它的约数结果一定是一个偶数

*/

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  return !(N % 2);
};

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  const path = [];
  path[1] = false;
  path[2] = true;
  for (let i = 3; i <= N; i++) {
    path[i] = false;
    for (let j = 1; j < i; j++) {
      if (!(i % j) && !path[i - j]) {   // 如果前一步赢了，这个符合条件的话，对方就可以选择，然后你就输了  (╯‵□′)╯︵┻━┻
        path[i] = true;
        break;
      }
    }
  }
  return path[N];
};

console.log(divisorGame(3));
