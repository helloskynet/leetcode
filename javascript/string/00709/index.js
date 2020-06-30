/* 
实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

 

示例 1：

输入: "Hello"
输出: "hello"
示例 2：

输入: "here"
输出: "here"
示例 3：

输入: "LOVELY"
输出: "lovely"

*/


/**
 * @description 存在非字母的字符
 * @param {string} str
 * @return {string}
 */
var toLowerCase1 = function (str) {
  let nStr = '';
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    code = code >= 65 && code <= 90 ? code + 32 : code;
    nStr += String.fromCharCode(code);
  }
  return nStr;
};

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase2 = function (str) {
  return str.replace(/[A-Z]/g, (item) =>
    String.fromCharCode(item.charCodeAt() + 32)
  );
};

console.log(toLowerCase2('Hello'));
