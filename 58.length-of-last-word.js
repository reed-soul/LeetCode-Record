/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

/* Category	Difficulty	Likes	Dislikes
algorithms	Easy (32.22%)	350	1459
Tags
Companies
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5 */


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s)=> {
    return s.trim().split(" ").pop().length;
    
};
