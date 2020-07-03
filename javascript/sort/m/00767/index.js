/* 
给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""
注意:

S 只包含小写字母并且长度在[1, 500]区间内。

*/

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const map = {};
  const length2 = S.length / 2 + 1;
  // 统计各个字母个数，如果在统计过程中出现不符合条件的情况直接退出
  for (let i = 0; i < S.length; i++) {
    const element = S[i];
    if (map[element]) {
      map[element]++;
      if (map[element] >= length2) {
        return '';
      }
    } else {
      map[element] = 1;
    }
  }
  const mapList = Object.entries(map);
  // 对字母数量排序
  mapList.sort((a, b) => b[1] - a[1]);
  const result = [];
  let resIndex = 0,
    i = 0;
  // 从数量最多的字母开始拿 先填充偶数位再填充奇数位
  // 填充偶数位，
  while (resIndex < S.length) {
    if (mapList[i][1] > 0) {
      result[resIndex] = mapList[i][0];
      resIndex += 2;
      mapList[i][1]--;
    } else {
      i++;
    }
  }
  // 填充奇数位
  resIndex = 1;
  while (resIndex < S.length) {
    if (mapList[i][1] > 0) {
      result[resIndex] = mapList[i][0];
      resIndex += 2;
      mapList[i][1]--;
    } else {
      i++;
    }
  }

  return result.join('');
};

console.log(reorganizeString('ogccckcwmbmxtsbmozli'));
console.log(reorganizeString('aaab'));
console.log(reorganizeString('aabcccc'));
console.log(reorganizeString('acdd'));
console.log(reorganizeString('blflxll'));
