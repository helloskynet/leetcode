/* 
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。

 

示例：

输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 

提示：

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000
 
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let swap = 0;

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      if (A[i] % 2 === 1) {
        for (let j = i + 1; j < A.length; j++) {
          if (A[j] % 2 === 0) {
            swap = A[i];
            A[i] = A[j];
            A[j] = swap;
            break;
          }
        }
      }
    } else {
      if (A[i] % 2 === 0) {
        for (let j = i + 1; j < A.length; j++) {
          if (A[j] % 2 === 1) {
            swap = A[i];
            A[i] = A[j];
            A[j] = swap;
            break;
          }
        }
      }
    }
  }
  return A;
};

/**
 * @description 一个奇数位放了偶数，后面必然有一个偶数位放了奇数
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII2 = function (A) {
  let swap = 0;

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      if (A[i] % 2 === 1) {
        for (let j = i + 1; j < A.length; j = j + 2) {
          if (A[j] % 2 === 0) {
            swap = A[i];
            A[i] = A[j];
            A[j] = swap;
            break;
          }
        }
      }
    } else {
      if (A[i] % 2 === 0) {
        for (let j = i + 1; j < A.length; j = j + 2) {
          if (A[j] % 2 === 1) {
            swap = A[i];
            A[i] = A[j];
            A[j] = swap;
            break;
          }
        }
      }
    }
  }
  return A;
};

/**
 * @description 一个奇数位放了偶数，必然有一个偶数位放了奇数，，偶数位置全部正确之后，奇数位置必然正确
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII2 = function (A) {
  let swap = 0;
  let j = 1;

  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1) {
        j += 2;
      }

      swap = A[i];
      A[i] = A[j];
      A[j] = swap;
    }
  }
  return A;
};
