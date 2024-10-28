/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const copyNums = [...nums].sort((a, b) => a - b);
    const tripletMap = {};
    const result = [];

    for (let i = 0; i < copyNums.length; i++) {
        if (i > 0 && copyNums[i] === copyNums[i - 1]) continue;

        let target;

        const sliceList = copyNums.filter((_, index) => {
            if (index === i) {
                target = copyNums[i];

                return false;
            }

            return true;
        });

        let left = 0
        let right = sliceList.length - 1;

        while (left < right) {
            let sum = target + sliceList[left] + sliceList[right];

            if (sum === 0) {
                const triplet = [target, sliceList[left], sliceList[right]].sort();

                if (!tripletMap[triplet]) {
                    tripletMap[triplet] = true;
                    result.push(triplet);
                }
                
                left += 1;
                continue;
            }

            if (sum > 0) {
                right -= 1;

                continue;
            }

            if (sum < 0) {
                left += 1;

                continue;
            }
        }
    }

    return result;
};
