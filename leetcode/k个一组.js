var kGroupReverse = function(head, k){
    let count = 0
    let p = dummyHead = new NodeList()
    dummyHead.next = head
    for(let p = head;p !== null; p = p.next){
        if(p==null&&count<k) return head;
        count ++;
    }
    let loop = Math.floor(count/k);
    for(let i = 0;i<loop;i++){
        let pre = null, cur = p.next//head
        for(let j = 0;j<k;j++){
            let next = cur.next
            cur.next = pre
            cur = next
            pre = cur
        }
        let start = p.next
        p.next = pre
        start.next = cur
        p = start//p和dummyHead分离  
    }
    return dummyHead.next
}