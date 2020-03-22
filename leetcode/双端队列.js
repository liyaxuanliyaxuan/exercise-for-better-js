 //滑动窗口问题
var maxSlidingWindow = function(nums, k){
    if(nums.length === 0 || !k) return [];
    let window = [], res = [];
    for(let i = 0; i < nums.length; i++){
        //考虑队列为空的情况
        //每次关注的都是队首元素，只需要检验队首元素是否在窗口内
        //窗口每次移动一步，保证队首元素不仅是最大的而且是index最小的
        if(window[0] !== undefined && window[0] <= i - k) window.shift();
        while(nums[window[window.length - 1]] <= nums[i]) window.pop();
        window.push(i);
        if(i >= k-1) res.push(nums[window[0]])
    }
    return res;
}