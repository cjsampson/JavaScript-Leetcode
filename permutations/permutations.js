export const permute = (nums) => {
    const result = [];
    const set = new Set();
    backtrack(nums, [], res, set);
    return result;
}


const backtrack = (nums, [], res, set) => {
    if (cur.length === nums.length) return res.push(cur);
     
}
