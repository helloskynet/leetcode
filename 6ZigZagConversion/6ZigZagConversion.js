/*
*  Created by lcn on 2017/12/19
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//注意第一行和最后一行
var convert = function (s, numRows) {
    var len = s.length;
    if (len <= numRows || numRows <= 1) {
        return s;
    }
    var result = "";
    var h = 2 * numRows - 2;
    for (var i = 1; i <= numRows; i++) {
        for (var m = i - 1; m < len; m = m + h) {
            result += s[m];
            if (i !== 1 && i !== numRows) {
                var temp = m + 2 * (numRows - i);
                if (temp < len) {
                    result += s[temp];
                }
            }
        }
    }
    return result;
};
console.log(convert("123456", 3));