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