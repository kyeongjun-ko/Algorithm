/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 초기 접근방식 - O(n)
    // return nums.indexOf(target)

    // 개선 접근방식 - 이진탐색    
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {    
        mid = Math.floor((left + right) / 2);    
        
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right = mid - 1;

            continue;
        }

        if (nums[mid] < target) {
            left = mid + 1;

            continue;
        }

        break;
    }

    return nums[mid] === target ? mid : -1;
};