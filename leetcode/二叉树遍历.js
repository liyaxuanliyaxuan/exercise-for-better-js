//前序遍历
//递归方式
var preOrderTranversal = function(root){
    let res = []
    const tranversal = (node)=>{
        if(!node) return null;
        res.push(node.val)
        if(node.left) tranversal(node.left);
        if(node.right) tranversal(node.right);
    }
    tranversal(root);
    return res;
}
//循环解法
var preOrderTranversal2 = function(root){
    if(root == null)return null;
    let stack = [],
        res = [];
        stack.push(root);
        while(stack.length){
            let node = stack.pop();
            res.push(node.val);
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        return res;
}
//中序遍历
var inOrderTrancersal = function(root){
    let res = []
    const tranversal = function(node){
        if(node == null) return null; 
        if(node.left) tranversal(node.left);
        res.push(node.val);
        if(node.right) tranversal(node.right);
    }
    tranversal(root);
    return null;
}
var inOrderTrancersal2 = function(root){
    if(!root) return null;
    let res = [],
        stack = [];
        while(stack.length){
            let node = stack.pop();
            if(node.left) res.push(node.left);
            stack.push(node.val);
            if(node.right) res.push(node.right);
        }
        return res;
}