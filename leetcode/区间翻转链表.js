/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head)return null;
    if(m===n)return head;
    let myHead = new ListNode()
    myHead.next = head
    let preNode = (myHead, m) => {
        if(m===1){
            return myHead
        }
        let initCur = myHead.next
        for(let i = 1;i<m-1;i++){
            initCur = initCur.next;
    }
    return initCur;
    }
    let pre = preNode.next
    let cur = pre.next
    
    for(let i=m;i<n;i++){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
        
    }
    
    preNode.next.next = cur
    cur.next = preNode
    return myHead.next

};