/* 
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

            3
         5      1
    6    2      9   8
       7   4

举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

 

提示：

给定的两颗树可能会有 1 到 200 个结点。
给定的两颗树上的值介于 0 到 200 之间。

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const a = [],
    b = [];
  findPath(root1, a);
  findPath(root2, b);
  return a.length === b.length && a.every((item, index) => item === b[index]);

  function findPath(node, leves) {
    if (node == null) {
      return;
    }
    if (node.left == null && node.right == null) {
      leves.push(node.val);
    }
    findPath(node.left, leves);
    findPath(node.right, leves);
  }
};


console.log(leafSimilar(new TreeNode(1), new TreeNode(2)));