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
    let right = nums.length;
    let mid;

    while (left !== right) {
        mid = Math.floor((left + right) / 2);
        console.log("mid", mid);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right--;

            continue;
        }

        if (nums[mid] < target) {
            left++;

            continue;
        }

        break;
    }

    return -1;

    
};