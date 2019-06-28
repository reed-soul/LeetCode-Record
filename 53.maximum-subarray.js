/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.22%)
 * Total Accepted:    504.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let orginNums = [...nums];
    let maxinum = nums.sort((a, b) => a > b)[nums.length - 1];
    let countLen = 2;
    while (countLen <= orginNums.length) {
        let startIndex = 0;
        while (startIndex + countLen <= orginNums.length) {
            if (orginNums.slice(startIndex, startIndex + countLen).reduce((a, b) => a + b) > maxinum) {
                maxinum = orginNums.slice(startIndex, startIndex + countLen).reduce((a, b) => a + b);
            }
            startIndex++
        }
        countLen++;
    }
    return maxinum
};

const maxSubArray = (nums) => {
    let maxinum = Math.max(...nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            maxinum = Math.max(maxinum, sum);
        }
    }
    return maxinum
};

var maxSubArray = function (nums) {
    var len = nums.length, max = undefined, sum = 0
    for (var i = 0; i < len; i++) {
        sum = 0
        for (var j = i; j < len; j++) {
            sum += nums[j]
            if (max === undefined) {
                max = sum
            }
            if (sum > max) {
                max = sum
            }
        }
    }
    return max
};

function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for (var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}

