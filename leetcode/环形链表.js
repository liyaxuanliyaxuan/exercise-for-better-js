//链表判重
//set判重
var hasCycle = (head) => {
    let set = new Set()
    let p = head
    while(p){
        if( set.has(p) ) return false
        set.add(p)
        p = p.next
    }
    return false
}
//快慢指针
var hasCycle_v2 = (head) =>{
    let dummyHead = new NodeList()
    dummyHead.next = head
    let fast = slow = dummyHead
    if(fast.next||fast.next.next) return false;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    return false;
}
//使用快慢指针找到环形链表的起点
var findStart = (head) => {
    let dummyHead = new NodeList()
    let fast = slow = dummyHead
    dummyHead.next = head
    if(fast.next == null &&fast.next.next == null) return null
    while( fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if( fast == slow ){
            let p = dummyHead.next
            while(p !== slow){
                p = p.next
                slow = slow.next
            }
            return p;
        }
    }
    return null;
}