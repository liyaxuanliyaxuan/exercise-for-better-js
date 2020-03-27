//寻找两数之和
var twoNums = function(nums, target){
    var map = {};
    for(let i = 1; i < nums.length; i++){
        if(map[nums[i]] !== undefined) return [i, map[nums[i]]];
        map[target-nums[i]] = i; 
    }
}
//寻找三数之和
 var threeNums = function(nums){
     let res = []
     let set = new Set();
     for(let i = 0; i < nums.length-2; i++){
         if(i >= 1 && nums[i] === nums [i-1]) continue;
         let map = new Map();
         for(let j = i + 1; j < nums.length; j++){
             if(map[nums[j]]){
                 let arr = [nums[i], nums[j], 0-nums[i]-nums[j]]
                 arr.sort()
                 set.add(arr.toString());
             }else{
                 map[0-nums[i]-nums[j]] = 1;
             }
         }
     }
     set.forEach((item)=>{
         res.push(item.split(','))
     })
     return res;
 }
 //使用排序+双指针求三数之和
var threeNums2 = function (nums){
    nums.sort((a,b)=>a - b)
    if(nums[0] > 0 || nums[nums.length - 1] < 0)return [];
    let res = [];
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] > 0) break;
        let target = 0 - nums[i],
            start = i + 1,
            end = nums.length - 1;

            while(start !== end){
                let cur = nums[start] + nums[end];
                if(cur < target) start++;
                if(cur > target) end--;
                res.push([nums[i], nums[start], nums[end]])
                while(start < end && nums[start] === nums[start] + 1) start++;
                while(start < end && nums[end] === nums[end] - 1) end--;
                start++;
                end--;
            }
    }
    return res;
}
//求四个数之和，原理和求三个数之和相同
var fourNums = function(nums){
    nums.sort((a,b)=> a-b)
    if(nums[0] > 0 || nums[length - 1] < 0) return [];
    let res = [];
    for(let i = 0; i < nums.length -3;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        for(let j = i+1; j < nums.length - 2; j++){
            if(j>i+1 && nums[j] === nums[j-1]) continue;
            let target = 0 - nums[i] - nums[j];
            let start = j + 1,
                end = nums.length - 1;
                while(start !== end){
                    let cur = nums[start] + nums[end]
                    if(cur < target) start++;
                    if(cur > target) end--;
                    res.push(nums[i], nums[j], nums[start], nums[end])
                    while(start < end && nums[start] === nums[start+1])start++;
                    while(start < end && nums[end] === nums[end-1])end--;
                    start++;
                    end--;
                }
        }
    }
    return res;
}