/* 
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

双指针法

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0,
    rnum = '',
    a = 0,
    b = 0,
    c = 0;
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    if (i >= 0) {
      carry += +num1[i];
    }
    if (j >= 0) {
      carry += +num2[j];
    }
    c = carry % 10;
    rnum = '' + c + rnum;
    carry = (carry - c) / 10;
  }
  if (carry > 0) {
    rnum = '' + carry + rnum;
  }
  return rnum;
};
console.log(addStrings('99', '999'));
