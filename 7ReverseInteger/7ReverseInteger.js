/*
*  Created by lcn on 2017/12/20
*/
/**
 * @param {number} x
 * @return {number}
 */
//测试后，，，，，网站中的，，最大的  2147483649  实际         32位的范围是  2147483647
var reverse = function (x) {
    var num = String(x).split("");
    var result = 0;
    if (num[0] === "-") {
        num.shift();
        result = Number("-" + num.reverse().join(""));
    } else {
        result = Number(num.reverse().join(""));
    }
    if (isNaN(result) || Math.abs(result) >= 2147483649) {
        return 0;
    } else {
        return result;
    }
};
console.log(reverse(4294967295));