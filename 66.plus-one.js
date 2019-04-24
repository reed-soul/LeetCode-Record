/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

/* Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321. */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
 /*  1、先判断特殊情况，最后一个字符是不是9，如果是，循环一直找出不是9的那个数，同时把999这样的数组改为1000,如果不是纯999，而是8999，则将8改为9，后面的9改为0
  2、如果不是9，则直接在最后一位的基础上加一 */
  if(digits.length>0){
      count = 0;
      for(let i= digits.length-1;i<digits.length;i--){
          if(digits[i] === 9){
            count++;
          }else{
              break;
          }
      }
      if(count>0){
        digits.splice(digits.length-count,count);
        if(digits.length===0){
            digits.push(1);
        }else{
            digits.splice(digits.length-1,1,digits[digits.length-1]+1)
        }
        digits.push(...new Array(count).fill(0))

      }else{
          digits.splice(digits.length-1,1,digits[digits.length-1]+1)
      }
      return digits;
  }
};

