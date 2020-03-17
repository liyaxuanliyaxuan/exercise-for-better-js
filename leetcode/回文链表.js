//求链表中间节点，判断回文链表
//找中点、翻转、比较
var isPalindrome = function(){
    let reverse = (pre, cur) =>{
        if(!cur) return null;
        let next = cur.next;
        cur.next = pre;
        return reverse(cur, next)
    }
    let dummyHead = slow = fast = head;
    dummyHead.next = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let next = slow.next;
    slow.next = null;
    let newStart = reverse( null, next)
    for(let p = head, newP = newStart;newP != null; newP = newP.next, p = p.next){
        if(p.val != newP.val) return false
    }
    return true;
}