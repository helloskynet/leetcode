/*
*  Created by lcn on 2017/12/20
*/
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var result = 0;
    if (str) {
        var m = parseInt(str,10);
        if (m) {
            if (m > 2147483647) {
                result =  2147483647;
            } else if (m < -2147483648) {
                result = -2147483648;
            } else {
                result = m;
            }
        }

    }
    return result;
};
console.log(myAtoi("1"));

// return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)  //别人写的，，还不错