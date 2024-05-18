/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const seenInSet = new Set();
    for (let i = 0; i < nums.length; i++) 
    {
        if (seenInSet.has(nums[i]) === false) 
        {
            seenInSet.add(nums[i])
        }

        else if(seenInSet.has(nums[i]) === true){
            return true;
        }
    }

    return false;
};