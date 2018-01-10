/*
*  Created by lcn on 2018/1/10
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var m = 0, n = height.length - 1,max = 0;
    while (m < n) {
        max = Math.max(max, (n - m) * Math.min(height[n], height[m]));
        if (height[n] > height[m]) {
            m++;
        } else {
            n--;
        }
    }
    return max;
};
var heig = [1, 1];
console.log(maxArea(heig));
