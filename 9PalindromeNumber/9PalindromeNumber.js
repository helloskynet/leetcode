/*
*  Created by lcn on 2017/12/20
*/
/**
 * @param {number} x
 * @return {boolean}
 */
//分割了字符串   其他语言可能比较麻烦
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    return Number(String(x).split("").reverse("").join("")) === x;
};
console.log(isPalindrome(9));

/**
 * @param {number} x
 * @return {boolean}
 */
//别人的答案
var isPalindrome2 = function (x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    if (x % 10 === 0) {
        return false;
    }
    var _x = x;
    var num = 0;
    while (num < x) {
        num = num * 10 + Math.floor(_x % 10);
        _x = Math.floor(_x / 10);
    }
    return num === x;
};