/* 
在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和达到 100 的玩家，即为胜者。

如果我们将游戏规则改为 “玩家不能重复使用整数” 呢？

例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

给定一个整数 maxChoosableInteger （整数池中可选择的最大数）和另一个整数 desiredTotal（累计和），判断先出手的玩家是否能稳赢（假设两位玩家游戏时都表现最佳）？

你可以假设 maxChoosableInteger 不会大于 20， desiredTotal 不会大于 300。

示例：

输入：
maxChoosableInteger = 10
desiredTotal = 11

输出：
false

解释：
无论第一个玩家选择哪个整数，他都会失败。
第一个玩家可以选择从 1 到 10 的整数。
如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。

*/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin1 = function (maxChoosableInteger, desiredTotal) {
  const used = [];
  return dfs(0);

  function dfs(total) {
    if (total >= desiredTotal) {
      return true;
    }
    for (let i = 1; i < maxChoosableInteger; i++) {
      if (!used[i]) {
        used[i] = true;
        const temp = dfs(total + i);
        used[i] = false;
        if (temp) {
          return false;
        }
      }
    }
    return true;
  }
};

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  let use = [];
  for (let i = 1; i <= maxChoosableInteger; i++) {
    use[i] = true;
    if (findpath(i)) {
      return true;
    }
    use[i] = false;
  }
  return false;

  function findpath(total) {
    if (total >= desiredTotal) {
      return true;
    }
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (!use[i]) {
        use[i] = true;
        if (findpath(total + i)) {
          use[i] = false;
          return false;
        }
        use[i] = false;
      }
    }
    return true;
  }
};

console.log(canIWin(4, 6)); // true
console.log(canIWin(10, 11));
