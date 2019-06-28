/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.62%)
 * Total Accepted:    379.5K
 * Total Submissions: 934.4K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else{
        if(target<nums[0]){
            return 0;
        }else if(target>nums[nums.length-1]){
            return nums.length;
        }else{
            for(let i=0;i<nums.length;i++){
                if(target>nums[i]&&target<nums[i+1]){
                    return i+1;
                }
            }
        }
    }
};



function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
	 // If the target is less then the very last item then insert it at that item index
	 // because anything index less then that has already been confirmed to be less then the target.
	 // Otherwise insert it at that item index + 1
	 // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);
    
	// found target
    if (array[midPoint] === target) return midPoint;
    
	// search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
