//求解二叉树的最大直径

var diameterofBinaryTree = function (root){
    let maxDepth = function(root){
        if(!root) return 0;
        return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
    }
    let help = function (root){
        if (!root) return 0;
        let rootSum = maxDepth(root.left) + maxDepth(root.right)
        let childSum = Math.max(help(root.left), help(root.right))
        return Math.max(rootSum, childSum);
    }
    if(! root) return 0;
    help(root);
}

//优化解法
//自底向上
// 使用一个全局变量保存当前的最大高度
var diameterofBinaryTree2 = function (root){
    let help = function(node){
        if(!node) return 0;
        let left  = node.left?help(node.left) + 1:0;
        let right = node.right? help(node.right) + 1 :0;
        let cur = left + right;
        if(cur > max) max = cur;
        return Math.max(left, right)
    }
    let max = 0;
    if(!root) return 0;
    help(root);
    return max;
}
//二叉树的所有路径
//递归，使用深度优先遍历
var binaryTreePath = function(root){
    let path = []
    let res = [];
    let dfs = function (node){
        path.push(node)
        if(!node) return ;
        dfs(node.left);
        dfs(node.right);
        if(!node.left && !node.right)
        res.push(path.map((item)=>item.val).join('->'))
        path.pop();
    }
    dfs(root);
    return res;
}
//使用非递归的后续遍历实现


//返回二叉树的最大路径和
var maxPathSum = function(root){
    let help = function(node){
        if(!node) return 0;
        let left = Math.max(help(node.left), 0)
        let right = Math.max(help(node.right), 0)
        let cur = left + right + node.val;
        if(cur > max) max = cur //转折
        return Math.max(left, right) + node.val//没有转折
    }
    let max = Number.MIN_SAFE_INTEGER
    help(root)
    return max;
}