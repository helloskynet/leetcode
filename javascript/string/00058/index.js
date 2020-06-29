/* 
给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。

 

示例:

输入: "Hello World"
输出: 5

*/

/**
 * @description 注意去除空格
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const list = s.trim().split(' ');
  return list[list.length - 1].length;
};

/**
 * @description 注意去除空格
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = function (s) {
  return s.trim().split(' ').pop().length;
};

/**
 * @description 循环从最后一个字符开始查找,,还是直接掉原生的更快
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  let endChar = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (endChar !== -1) {
        return endChar - i;
      }
    } else if (endChar === -1) {
      endChar = i;
    }
  }
  return endChar === -1 ? 0 : endChar + 1;
};

console.time('a');
console.log(lengthOfLastWord('hello world'));
console.timeEnd('a');
console.time('a1');
console.log(lengthOfLastWord1('hello world'));
console.timeEnd('a1');
console.time('a12');
console.log(lengthOfLastWord2('hello world'));
console.timeEnd('a12');
