//二叉树的最近公共祖先问题
//使用了哈希表，增加了空间复杂度
var lowestCommonAncestor = function (root, p, q) {
    if (!root || root == p || root == q) return root;
    let map = new WeakMap(),
        set = new Set(),
        queue = [root];
    for (let i = 0; i < queue.length; i++) {
        let size = queue.length
        while (size--) {
            let front = queue.shift()
            if (front.left) {
                queue.push(front.left)
                map.add(front.left, front)
            }
            if (front.right) {
                queue.push(front.right)
                map.add(front.right, front)
            }
        }
    }
    while (p) {
        set.add(p)
        p = map.get(p)
    }
    while (q) {
        if (map.has(q)) return q
        q = map.get(q)
    }

}
//使用深度优先遍历解决二叉树公共祖先问题
var lowestCommonAncestor2 = function(root, p, q){
    if(root == null || p == null || q == null) return root;
    let left = lowestCommonAncestor2(root.left, p, q)
    let right = lowestCommonAncestor2(root.right, p, q)
    if(left == null) return right
    else if(right == null ) return left
    else return root;
}
//使用二叉搜索树
var lowestCommonAncestor3 = function(root, p, q) {
    if(root == null || root == p || root == q) return root;
    // root.val 比 p 和 q 都大，找左孩子
    if(root.val > p.val && root.val > q.val) 
        return lowestCommonAncestor3(root.left, p, q);
    // root.val 比 p 和 q 都小，找右孩子
    if(root.val < p.val && root.val < q.val) 
        return lowestCommonAncestor3(root.right, p, q);
    else 
        return root;
};