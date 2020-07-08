/* 
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 3叉树 :

      1
   3  2  4
5  6



 

我们应返回其最大深度，3。

说明:

树的深度不会超过 1000。
树的节点总不会超过 5000。

*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root.children) {
    return 0;
  } else if (root.children.length === 0) {
    return 1;
  } else {
    const length = [];
    root.children.forEach((item) => {
      length.add(maxDepth(item));
    });
    return Math.max.apply(length) + 1;
  }
};
