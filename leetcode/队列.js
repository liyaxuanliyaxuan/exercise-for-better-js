//二叉树的层次遍历
var levelOrder = function(root) {
    if(!root) return false;
    let queue = [],
        res = [],
        level = 0;
        queue.push(root)
        while(!queue.length){
            res.push([])
            let size = queue.length
            while(size--){
                let front = queue.shift()
                res[level] = front;
                if(front.left) queue.push(front.left)
                if(front.right) queue.push(front.right)
            }
            level++;
        }
}