/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const numsList = nums.map((e, index) => [index, e]);
    const sortedList = [...numsList].sort((a, b) => a[1] - b[1]);

    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex !== rightIndex) {
        const [firstIndex, firstValue] = sortedList[leftIndex];
        const [secondIndex, secondValue] = sortedList[rightIndex];

        const twoSum = firstValue + secondValue;
        
        if (twoSum > target) {
            rightIndex -= 1;

            continue;
        }

        if (twoSum < target) {
            leftIndex += 1;

            continue;
        }

        return [firstIndex, secondIndex];
    }
};