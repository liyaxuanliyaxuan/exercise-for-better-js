function mergeList(l1, l2) {

    if(l1 === null)return l2;
    if(l2 === null)return l1;
    if(l1.value > l2.value){
        l2.next = mergeList(l1, l2.next)
        return l2
    }else{
        l1.next = mergeList(l2, l1.next)
        return l1

    }
}

//合并k个有序链表
function mergeKLists(lists){
    var mergeTwo = mergeList;//利用已经实现的两个链表的合并
    //对参数做一层更具体的处理
    const _mergeLists = (start, end, lists)=>{
        if(end-start<0) return null;
        if(end == start) return lists[end];
        let mid  = Math.floor(start + (end-start)/2)
        return mergeTwo(_mergeLists(start, mid, lists), _mergeLists(mid+1, end, lists))
//自上而下，分而治之，第一次划分是手动划分

    }
    _mergeLists(0, lists.length-1, lists)

}
//使用自下向上的方法实现，利用for循环

var merfeKListsFromBottom = function(lists){
    var mergeTwo = mergeList;//利用已经实现的两个链表的合并
    if(!lists || !lists.length) return false;
    let dummyHeads = []
    for(let i = 0;i<lists.length; i++){
        let node = new NodeList()
        node.next = lists[i]
        dummyHeads[i] = node
    }
    for(let size = 1;size<lists.length;size += size){
        for(let i = 0;i+size<lists.length;i += 2*size){
            dummyHeads[i].next = mergeTwo(dummyHeads[i].next,dummyHeads[i+size].next)
        }
    }
    return dummyHeads[0].next;
}