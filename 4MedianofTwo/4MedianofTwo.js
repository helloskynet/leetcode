/*
*  Created by lcn on 2017/12/7
*/

/*

* 第一次   /// 处 写成了n
* 第二次错误  判断的时候  直接  !nums1[m]  没有考虑 nums1[m]是0的情况 (╯‵□′)╯︵┻━┻
*
* for 和while 循环的 时间问题
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var m = 0, n = 0;
    var re = [];
    var len = nums1.length + nums2.length;
    while (m + n < len) {
        if (nums1[m] === undefined) {
            re = re.concat(nums2.slice(n));
            break;
        }
        if (nums2[n] === undefined) {
            re = re.concat(nums1.slice(m));///
            break;
        } else {
            if (nums1[m] > nums2[n]) {
                re.push(nums2[n]);
                n++;
            } else {
                re.push(nums1[m]);
                m++;
            }
        }
    }
    if (len % 2) {
        return re[len / 2 - 0.5];
    } else {
        return (re[len / 2] + re[len / 2 - 1]) / 2;
    }
};

console.log(findMedianSortedArrays([11], [10]));