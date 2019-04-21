/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.85%)
 * Total Accepted:    818.6K
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const removeOuterParentheses = (s) => {
    let result = '';
    let nextIndex = 0;
    while (nextIndex < s.length) {
        if (s[nextIndex + 1] === ')') {
            nextIndex = nextIndex + 2;
        } else {
            let arr = [];
            let count = nextIndex;
            let lastIndex = nextIndex;
            while (arr.join('') !== '()') {
                if (arr.join('') !== '()') {
                    arr.push(s[count]);
                    count++;
                }
                if (arr.join('') === '()') {
                    nextIndex = count;
                } else if (arr.length > 2 && arr.join('').includes('()')) {
                    arr.splice(-2, 2);
                }
            }
            result += s.substring(lastIndex + 1, count - 1);
        }
    }
    return result;
};

const removeOuterParentheses = (s) => {
    let result = '';
    let nextIndex = 0;
    while (nextIndex < s.length) {
        if (s[nextIndex + 1] === ')') {
            nextIndex = nextIndex + 2;
        } else {
            let arr = [];
            let temp = '';
            let count = nextIndex;
            let lastIndex = nextIndex;
            while (temp !== '()') {
                temp += s[count];
                count++;
                if (temp === '()') {
                    nextIndex = count;
                } else if (temp.length > 2 && temp.includes('()')) {
                    temp = temp.substring(0, temp.length - 2);
                }
            }
            result += s.substring(lastIndex + 1, count - 1);
        }
    }
    return result;
};
console.log(removeOuterParentheses('(()())(()())'))
// （ （  0
// （（ （（ 1
// （（） （ 2
// （（ （（ 3
// （（） （ 4
// （ ）  （） index 5



var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(number);

