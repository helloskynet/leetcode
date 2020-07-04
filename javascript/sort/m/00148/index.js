/* 
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

双指针法 寻找终点 归并排序

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  const temp = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(temp);
  const n = { next: null };
  let tp = n;

  while (left && right) {
    if (left.val < right.val) {
      tp.next = left;
      left = left.next;
    } else {
      tp.next = right;
      right = right.next;
    }
    tp = tp.next;
  }
  tp.next = left ? left : right;
  return n.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
  }
  const temp = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(temp);
  slow = new ListNode(0);
  fast = slow;

  while (left && right) {
    if (left.val < right.val) {
      fast.next = left;
      left = left.next;
    } else {
      fast.next = right;
      right = right.next;
    }
    fast = fast.next;
  }
  fast.next = left ? left : right;
  return slow.next;
};

let head = {
  val: 12,
  next: {
    val: 19,
    next: {
      val: 1,
      next: null
    }
  }
};

console.log(sortList(head));
