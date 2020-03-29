var isSymmetric = function(root){
    let help = (node1, node2) => {
        if(!node1 && !node2) return true;
        if(!node1 || node2 || node1.val !== node2.val) return false;
        return help(node1.right, node2.left) && (node1.left, node2.right)
    }
    if(!root) return true;
    help(root.left, root.right)
}
//使用非递归方式实现
var isSymmetric2 = function(root){
    if(!root) return true;
    let queue = [root.left, root.rigth];
    while(queue.length){
        let node1 = queue.shift(),
            node2 = queue.shift();
            if(!node1 && !node2 ) continue;
            if(!node1 || !node2 || node1.val == node2.val) return false;
            queue.push(node1.left)
            queue.psuh(node1.right)
            queue.push(node2.right)
            queue.push(node2.left)
    }
    return true;
}