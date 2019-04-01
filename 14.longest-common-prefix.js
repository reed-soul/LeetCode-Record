/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.16%)
 * Total Accepted:    429.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if (strs === undefined || strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    const shotStr = strs.sort((a, b) => (a.length > b.length))[0];
    let result = '';
    for (let i = 0; i < shotStr.length; i++) {
        let count = 0
        for (let item of strs) {
            if (item.startsWith(shotStr.substr(0, i + 1))) {
                count++
            }
        }
        if (count === strs.length) {
            result = shotStr.substr(0, i + 1);
        }
    }
    return result;

};
