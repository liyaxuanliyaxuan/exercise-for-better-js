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
//利用队列，实现无权图的广度遍历
//最大平方数问题

var numSquares = function(n) {
    let queue = []
    let map = new Map()
    queue.push([n,0])
    map.set(n,true)
    while(queue.length){

        let [num, step] = queue.shift();
        for(let i = 0;;i++){
            nextNum = num - i*i;
            if(nextNum < 0)break;
            if(nextNum == 0) return step++;
            if(!(map.get(nextNum))){
                queue.push(nextNum, step++)
                map.set(nextNum, true)
            }
        }
    }
}

var ladderLength = function(beginWord, endWord, wordList) {
    // 两个单词在图中是否相邻
    const isSimilar = (a, b) => {  
        let diff = 0
        for(let i = 0; i < a.length; i++) {
            if(a.charAt(i) !== b.charAt(i)) diff++;
            if(diff > 1) return false; 
        }
        return true;//判断为真的结果可能是两个单词相邻或者相等
    }
    let queue = [beginWord];
    let index = wordList.indexOf(beginWord);
    if(index !== -1) wordList.splice(index, 1);
    let res = 2;
    while(queue.length) {
        let size = queue.length;
        while(size --) {
            let front = queue.shift();
            for(let i = 0; i < wordList.length; i++) {
                if(!isSimilar(front, wordList[i]))continue;
                // 找到了
                if(wordList[i] === endWord) {
                    return res;
                }
                else {
                    queue.push(wordList[i]);
                }
                // wordList[i]已经成功推入，现在不需要了，删除即可
                // 这一步性能优化，相当关键，不然100%超时
                wordList.splice(i, 1);
                i --;//wordList 本身已经改变，这里需要对i进行修正
            }
        }
        // 步数 +1
        res += 1;
    }
    return 0;
};