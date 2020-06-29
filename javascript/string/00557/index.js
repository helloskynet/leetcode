/* 
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const list = s.split(' ');
  list.forEach((item, index) => {
    list[index] = item.split('').reverse().join('');
  });
  return list.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
  return s.split('').reverse().join('').split(' ').reverse().join(' ');
};

/**
 * @description 原生方法是 C++实现的速度肯定快些，，
 * ，手动拼接字符串，每次都要销毁原字符串创建新的字符串，速度会慢点
 * @param {string} s
 * @return {string}
 */
var reverseWords3 = function (s) {
  let l = '';
  let l2 = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '') {
      l = s[i] + s[i];
    } else {
      l2 = l2 + l + ' ';
      l = '';
    }
  }
  return l2 + l;
};

console.log(reverseWords3("Let's take LeetCode contest"));
