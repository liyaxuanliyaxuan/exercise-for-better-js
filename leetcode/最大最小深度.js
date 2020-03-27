//最大高度递归实现
var maxDepth = function(root){
    if(!root) return 0;
    return Math.max(maxDepth(root.left) + 1, maxDepth(root.right)+1)
}
//最大高度循环遍历实现
var maxDepth2 = function(root){
    if(!root) return null;
    let queue = [root];
    let level = 0;
    while(queue.length){
        let size = queue.length;
        while(size--){
            let front = queue.shift();
            if(front.left) queue.push(front.left);
            if(front.right) queue.push(front.right);
        }
        level++;
    }
    return level;
}
//最小高度递归实现
var minDepth = function(root){
    if(!root) return 0;
    if(root.left && root.right)
    return Math.min(minDepth(root.left)+1,minDepth(root.right)+1)
    else if(root.left)
    return minDepth(root.left)+1
    else if(root.right)
    return minDepth(root.right)+1
    else return 1;
}
//最小高度循环遍历实现
var minDepth2 = function(root){
    if(!root) return 0;
    let queue = [root],
        level = 0;
        while(queue.length){
            let size = queue.length;
            while(size--){
                let front = queue.push();
                if(!front.left && !front.right) return 1;
                if(front.left) queue.push(front.left);
                if(front.right) queue.push(front.right);
            }
            level++;
        }
        return level;
}