/* 

给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3



   二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树： 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。二叉搜索树作为一种经典的数据结构，它既有链表的快速插入与删除操作的特点，又有数组快速查找的优势；所以应用十分广泛，例如在文件系统和数据库系统一般会采用这种数据结构进行高效率的排序与检索操作

   G(i) = G(j-1) * G(i-j)
  */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const G = [];
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (!G[i]) {
        G[i] = 0;
      }
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var numTrees1 = function (n) {
  function findPath(start, end) {
    if (start > end) {
      return 1;
    }
    let result = 0;
    for (let i = start; i <= end; i++) {
      const left = findPath(start, i - 1);
      const right = findPath(i + 1, end);
      result += left * right;
    }
    return result;
  }
  return findPath(1, n);
};

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const path = [];
  function findPath(start, end) {
    if (start > end) {
      return 1;
    }
    if (path[end - start]) {
      return path[end - start];
    }
    let result = 0;
    for (let i = start; i <= end; i++) {
      const left = findPath(start, i - 1);
      const right = findPath(i + 1, end);
      result += left * right;
    }
    path[end - start] = result;
    return result;
  }
  return findPath(1, n);
};

console.log(numTrees1(20));
