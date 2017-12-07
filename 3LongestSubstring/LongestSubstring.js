/*
*  Created by lcn on 2017/12/7
*/
//第一次错误，没有考虑 空字符串的情况
//第二次错误，第三次，结尾忘记添加  分号。 以及包含了一个中文的逗号。 (╯‵□′)╯︵┻━┻
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var now = 0, max = 0,len = 0;
    for (var i = 0; i < s.length; i++) {
        len = s.substring(now, i).indexOf(s[i]);
        if (len !== -1) {
            now = now + len + 1;
        }
        if (i - now + 1 > max) {
            max = i - now + 1;
        }
    }
    return max;
};
console.log(lengthOfLongestSubstring("bbbbmnabcd"));