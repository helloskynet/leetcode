/* 
给你一个字符串 s，请你对 s 的子串进行检测。

每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。 

如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。

返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。

注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）

 

示例：

输入：s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
输出：[true,false,false,true,true]
解释：
queries[0] : 子串 = "d"，回文。
queries[1] : 子串 = "bc"，不是回文。
queries[2] : 子串 = "abcd"，只替换 1 个字符是变不成回文串的。
queries[3] : 子串 = "abcd"，可以变成回文的 "abba"。 也可以变成 "baab"，先重新排序变成 "bacd"，然后把 "cd" 替换为 "ab"。
queries[4] : 子串 = "abcda"，可以变成回文的 "abcba"。
 

提示：

1 <= s.length, queries.length <= 10^5
0 <= queries[i][0] <= queries[i][1] < s.length
0 <= queries[i][2] <= s.length
s 中只有小写英文字母

*/

/**
 * @descript 字符串超长的的时候 会超时
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  let result = [];
  let query = [];
  let map = {};
  let flag = 0;
  console.log(queries.length);
  for (let i = 0; i < queries.length; i++) {
    query = queries[i];
    map = {};
    for (let j = query[0]; j <= query[1]; j++) {
      if (!map[s[j]]) {
        map[s[j]] = 0;
      }
      map[s[j]]++;
    }
    let odd = 0;
    Object.values(map).forEach((item) => {
      if (item % 2) {
        odd++;
      }
    });
    if (odd % 2) {
      odd--;
    }
    odd = odd / 2;
    if (odd <= query[2]) {
      result[i] = true;
    } else {
      result[i] = false;
    }
    flag++;
    if (flag > 1000) {
      flag = 0;
      console.log('查找中', i, queries.length);
    }
  }
  return result;
};

/**
 * @description 先计算各个长度，每个字符出现的次数，缓存起来
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries2 = function (s, queries) {
  let map = [Array(26).fill(0)];
  for (let i = 0; i < s.length; i++) {
    map[i + 1] = [];
    for (let j = 0; j < 26; j++) {
      map[i + 1][j] = map[i][j];
    }
//    map[i + 1][s[i].charCodeAt() - 97]++;
    map[i + 1][s[i].charCodeAt() - 97] ^= 1; // 我们主要在意字母个数是奇数个还是偶数个，并不在意具体个数
  }
  let result = [],
    charNum = 0, // 单个字符出现的次数
    odd = 0; // 出现次数为奇数的字符个数,,出现奇数次的字符 最多有 26 所以最多需要翻转13即可
  //  queries[i][2] 一旦大于13 可以直接为break 无需判断
  // 测试用例里面好像没有大于13的数据  O(∩_∩)O哈哈~

  for (let i = 0; i < queries.length; i++) {
    odd = 0;
    result[i] = true;
    for (let j = 0; j < 26; j++) {
      charNum = map[queries[i][1] + 1][j] + map[queries[i][0]][j];
      if (charNum % 2) {
        odd++;
      }
      if ((odd % 2 ? odd - 1 : odd) / 2 > queries[i][2]) {
        result[i] = false;
        break;
      }
    }
  }
  return result;
};


console.log(
  canMakePaliQueries2('abcda', [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1]
  ])
);