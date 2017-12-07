/*
*  Created by lcn on 2017/12/5
*/

/*Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    var head1 = l1;
    var head2 = l2;
    var result = new ListNode(0);
    var head3 = result;
    var temp = 0;
    while(head1 !== null || head2 !== null){
        var a = 0;
        if(head1){
            a = head1.val;
            head1 = head1.next;
        }
        var b = 0;
        if(head2){
            b = head2.val;
            head2 = head2.next;
        }
        var s = a + b + temp;

        head3.next = new ListNode(s%10);
        head3 = head3.next;
        temp = parseInt(s/10);
    }
    if(temp >0){
        head3.next = new ListNode(1)
    }
    return result.next;
};

//生成链表  用于自测
function liu(m) {
    var liu = new ListNode(0);
    var step = liu;
    for (var i = 0; i < m.length; i++) {
        step.next = new ListNode(m[i]);
        step = step.next;
    }
    return liu.next;
}
//链表转换成数组输出
function change(list) {
    var head = list,
        result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
console.log(change(addTwoNumbers(liu([2, 4]), liu([5, 6, 4]))));