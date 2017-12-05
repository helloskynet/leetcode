/*
*  Created by lcn on 2017/12/5
*/
var twoSum = function (nums, target) {
    var temp = 0;
    for (var i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            if (temp === nums[j]) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([1, 2, 3, 2, 5, 8], 5));