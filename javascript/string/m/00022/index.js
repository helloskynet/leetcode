/* 
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
                        (
                   /                  \      
             ((                        ()
        /       \                     /
       (((          (()                 ()(
            \    /      \             /      \
           ((()   (()(     (())       ()((      ()()
        /        \       /            \      /
      ((())   (()()    (())(         ()(()   ()()(
        \        \       \               \        \
        ((()))  (()())  (())()          ()(())  ()()()



          */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  function bracket(path, leftc, rightc) {
    if (leftc === n && rightc === n) {
      res.push(path);
      return;
    }
    if (leftc < n) {
      bracket(path + '(', leftc + 1, rightc); // 增加左括号
    }
    if (rightc < leftc) {
      bracket(path + ')', leftc, rightc + 1); // 增加右括号
    }
  }
  bracket('', 0, 0);
  return res;
};

console.log(generateParenthesis(3));
