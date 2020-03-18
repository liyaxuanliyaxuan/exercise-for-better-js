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
//二叉树层次Z形遍历
var ZlevelOrder = function (){
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
            if(level % 2)res[level].reverse()
            level++;
        } 
}
//二叉树右视图，永远让右边的节点首先进入队列，永远只拿右边的第一个节点
function rightView(root){
    if(!root) return null
    let res = [],
        queue = [],
        level = 0;
        queue.push(root)
        while(queue.length){
            res.push(queue[0])
            let size = queue.length
            while(size--){
                let front = queue.shift()
                if(front.right) queue.push(front.right)
                if(front.left) queue.push(front.left)
            }
            level++;
            
        }
return res;
}