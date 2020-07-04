/* 
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  function subSe(subIndex, strIndex) {
    while (
      t[strIndex] === s[subIndex] &&
      strIndex < t.length &&
      subIndex < s.length
    ) {
      strIndex++;
      subIndex++;
    }
    if (strIndex <= t.length && subIndex === s.length) {
      return true;
    }
    if (strIndex === t.length && subIndex <= s.length) {
      return false;
    }

    return subSe(subIndex, strIndex + 1);
  }
  return subSe(0, 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let strIndex = -1,
    subIndex = 0;
  const sLength = s.length,
    tLength = t.length;
  while (strIndex < tLength && subIndex < sLength) {
    strIndex++;
    while (
      t[strIndex] === s[subIndex] &&
      strIndex < tLength &&
      subIndex < sLength
    ) {
      strIndex++;
      subIndex++;
    }
  }
  // 子字符串已遍历完，父字符串未遍历完或者刚好遍历完，则视为成功,其余则不是
  if (strIndex <= tLength && subIndex === sLength) {
    return true;
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let strIndex = 0,
    subIndex = 0;
  const sLength = s.length,
    tLength = t.length;
  while (strIndex < tLength && subIndex < sLength) {
    if (t[strIndex] === s[subIndex]) {
      strIndex++;
      subIndex++;
    } else {
      strIndex++;
    }
  }
  return subIndex === sLength;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  t = ' ' + t;
  const map = []; // 建立映射表

  for (let j = 0; j < 26; j++) {
    let position = -1;
    for (let i = t.length - 1; i >= 0; i--) {
      if (!map[i]) {
        map[i] = [];
      }
      const index = t[i].charCodeAt() - 97;
      map[i][j] = position;
      if (index === j) {
        position = i;
      }
    }
  }
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    j = map[j][s[i].charCodeAt() - 97];
    if (j === -1) {
      return false;
    }
  }
  return true;
};

/**
 * 大量子序列时
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  t = ' ' + t;
  const map = []; // 建立映射表
  for (let i = 0; i < t.length; i++) {
    map[i] = Array(26);
  }

  for (let j = 0; j < 26; j++) {
    let position = -1;
    for (let i = t.length - 1; i >= 0; i--) {
      const index = t[i].charCodeAt() - 97;
      map[i][j] = position;
      if (index === j) {
        position = i;
      }
    }
  }
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    j = map[j][s[i].charCodeAt() - 97];
    if (j === -1) {
      return false;
    }
  }
  return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
console.log(isSubsequence('abc', 'abc'));
