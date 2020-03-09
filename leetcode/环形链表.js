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