//使用终须遍历,保存前一个节点的值，如果全部满足比前一个节点大就是搜索二叉树
//中序遍历判断是否是搜索二叉树
 var isValidBst = function(root){
     let prev = null;
     let help = function(node){
         if(!node) return true;//到达叶子节点返回true
         if(!help(node.left)) return false;
         if(prev !== null && prev >= node.val) return false;
         prev = node.val;
         return help(node.right);
     }
     return help(root)
 }
