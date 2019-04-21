/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (40.02%)
 * Total Accepted:    272.2K
 * Total Submissions: 679.5K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let orgin = {};
    for (let i = 1; i <= 30; i++) {
        if (i === 1) {
            orgin[i]= '1';
        } else {
            const dushu = orgin[i - 1];
            let str = '';
            let arr = [];
            for (let j = 0; j < dushu.length; j++) {
                if (j === dushu.length - 1 || dushu[j] !== dushu[j + 1]) {
                    str += dushu[j];
                    arr.push(str);
                    str = '';
                } else if(dushu[j] === dushu[j + 1]) {
                    str += dushu[j]
                }
            }
            let say = '';
            for (let item of arr) {
                say += item.length.toString() + item[0];
            }
            orgin[i] = say;
        }
    }
    return orgin[n]
};


