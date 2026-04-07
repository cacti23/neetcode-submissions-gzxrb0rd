class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    wiggleSort(nums) {
        nums.sort((a, b) => a - b);
        // zero index does not matter
        for(let i = 1; i < nums.length - 1; i += 2) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        }

        return;

        // Odd index → nums[i] >= nums[i-1]
        // Even index → nums[i] <= nums[i-1]
        // for(let i = 1; i < nums.length; i++) {
        //     if(i % 2 === 1 && nums[i] < nums[i - 1] || i % 2 === 0 && nums[i] > nums[i - 1]) {
        //         [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        //     }
        // }

        // return;
    }
}
