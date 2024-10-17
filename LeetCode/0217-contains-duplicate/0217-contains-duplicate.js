/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
var containsDuplicate = function(nums) {
    const numberMap = {};

    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];

        numberMap[target] = numberMap[target] + 1 || 1;

        if (numberMap[target] > 1) return true;
    }

    return false;
};