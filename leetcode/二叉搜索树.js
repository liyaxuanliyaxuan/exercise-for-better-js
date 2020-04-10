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
//使用定边界的方法，访问左孩子，使用当前节点值作为更新的上界；访问右孩子，使用当前值作为有孩子的下界

var isValidBst2 = function(root) {
    const help = (node, min, max) =>{
        if (!node) return true;
        if(node.val>max || node.val<min) return false;
        return help(node.left, min, node.val) && help(noed.right, node.val, max)
    }
    help(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
//使用栈实现，非递归
 var isValidBst3 = function(root) {
     if(!root) return null;
     let max = Number.MAX_SAFE_INTEGER,
        min = Number.MIN_SAFE_INTEGER;
        let stack = [root];
        root.max = max
        root.min = min
        while(stack.length){
            let node = stack.pop();
            if(node.val > max || node.val < min) return false;
            if(node.left){
                stack.push(node.left);
                node.left.max = node.val
                node.left.min = min
            }
            if(node.right){
                stack.push(node.right);
                node.right.max = max
                node.right.min = node.val
            }

        }
        return true;
 }
 //将一个升序排列的数组转化为平衡二叉树
 var sortedArrayToBST = function( nums ) {
     const help = (start, end) =>{
         if(start > end) return null;
         if(start === end) return new TreeNode(nums[start])
         let mid = Math.floor((end - start)/2)
         let node = new TreeNode(nums[mid]);
         node.left = help(start, mid - 1)
         node.right = help(mid + 1, end)
         return node
     }
     help(0, nums.length-1)
 }
 //二叉搜索树原地转换为链表

 var flatten = function( root ) {
     if( root == null ) return null;
     flatten( root.left );
     flatten( root.right );
     if(root.left){
         let p = root.left
         while(p.right){
             p = p.right
         }
         p.right = root.right
         root.right = p
         root.left = null
     } 
 }

//生成不同的二叉搜索树

