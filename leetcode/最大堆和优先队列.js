//实现一个最大堆
//使用数组存放这个特殊的二叉树
class MaxHeap {
    constructor(arr = [], compare = null) {
      this.data = arr;//某个状态下的最大堆数组
      this.size = arr.length;
      this.compare = compare;
    }
    getSize() {
      return this.size;
    }
    isEmpty() {
      return this.size === 0;
    }
    // 增加元素
    add(value) {
      this.data.push(value);
      this.size++;
      // 增加的时候把添加的元素进行 siftUp
      this._siftUp(this.getSize() - 1);
    }
    // 找到优先级最高的元素
    findMax() {
      if (this.getSize() === 0)
        return;
      return this.data[0];
    }
    // 让优先级最高的元素(即队首元素)出队
    extractMax() {
      // 1.保存队首元素
      let ret = this.findMax();
      // 2.让队首和队尾元素交换位置
      this._swap(0, this.getSize() - 1);
      // 3. 把队尾踢出去，size--
      this.data.pop();
      this.size--;
      // 4. 新的队首 siftDown
      this._siftDown(0);
      return ret;
    }
  
    toString() {
      console.log(this.data);
    }
    _swap(i, j) {
      [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    _parent(index) {
      return Math.floor((index - 1) / 2);
    }
    _leftChild(index) {
      return 2 * index + 1;
    }
    _rightChild(index) {
      return 2 * index + 2;
    }
    _siftUp(k) {
      // 上浮操作，只要子元素优先级比父节点大，父子交换位置，一直向上直到根节点
      while (k > 0 && this.compare(this.data[k], this.data[this._parent(k)])) {
        this._swap(k, this._parent(k));
        k = this._parent(k);
      }
    }
    _siftDown(k) {
      // 存在左孩子的时候
      while (this._leftChild(k) < this.size) {
        let j = this._leftChild(k);
        // 存在右孩子而且右孩子比左孩子大
        if (this._rightChild(k) < this.size &&
          this.compare(this.data[this._rightChild(k)], this.data[j])) {
          j++;
        }
        if (this.compare(this.data[k], this.data[j]))
          return;
        // 父节点比子节点小，交换位置
        this._swap(k, j);
        // 继续下沉
        k = j;
      }
    }
  }
  //实现一个优先队列
  
  class PriorityQueue {
    // max 为优先队列的容量
    constructor(max, compare) {
      this.max = max;
      this.compare = compare;
      this.maxHeap = new MaxHeap([], compare);
    }
  
    getSize() {
      return this.maxHeap.getSize();
    }
  
    isEmpty() {
      return this.maxHeap.isEmpty();
    }
  
    getFront() {
      return this.maxHeap.findMax();
    }
  
    enqueue(e) {
      
      if (this.getSize() === this.max) {
        if (this.compare(e, this.getFront())) return;// 比当前最高的优先级的还要高，直接不处理
        this.dequeue();
      }
      return this.maxHeap.add(e);
    }
  
    dequeue() {
      if (this.getSize() === 0) return null;
      return this.maxHeap.extractMax();
    }
  }
  //优先队列，进队列进行堆排序，得到一个按照优先级排序的状态队列（大顶堆）
  //优先队列，出队列，取出队首元素，也就是优先级最大的元素
  //优先队列的应用，前K个高频元素
var topKfrequent = (nums, k)=>{
    let map = {}
    let pq = new PriorityQueue(k, (a,b)=>map[a]-map[b]<0)
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]]) map[nums[i]] = 1;
        else map[nums[i]] = map[nums[i]]++;
    }
    let arr = Array.from(new Set(nums));
    for(let i = 0; i < arr.length; i++){
        pq.enqueue(arr[i]);
    }
    return pq.maxHeap.data;
}
//使用优先队列合并K个有序链表
var mergeKLists = (lists) => {
    var dummyHead = p = new NodeList()
    let pq = new PriorityQueue(lists.length,(a,b)=> a.val<=b.val);
    for(let i = 0; i < lists.length; i++){
        pq.enqueue(lists[i])
    }
    while(pq.getSize()){
        let min = pq.dequeue
        p.next = min;
        p = p.next;
        if(min.next) pq.enqueue(min.next)
    }
    return dummyHead.next;

}