//使用栈实现队列


var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.push  = function(x){
    this.stack1.push(x)
}
MyQueue.prototype.transform = function(){
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
}
MyQueue.prototype.pop = function (){
    if(!this.stack2.length) this.transform();
    this.stack2.pop();
}
MyQueue.prototype.peek = function(){
    if(!this.stack2.length) this.transform();
    return this.stack2[this.stack2.length - 1]
}
MyQueue.prototype.empty = function() {
    return this.stack1.length && this.stack2.length
}


//队列实现栈
//只是关注状态，queue是否为空
//在不同状态下的操作有所不同
//transform是内部的私有方法
var MyStack = function(){
    this.queue1 = [];
    this.queue2 = [];
}
MyStack.prototype.push = function(x) {
    if(!this.queue2.length) {
        this.queue1.push(x)
    }else{
        this.queue2.push(x)
        this.queue1.push(this.queue2.shift());
    }
}
MyStack.prototype.transform = function (){
    while(this.queue1.length !== 1){
        this.queue2.push(this.queue1.shift())
    }
    var temp = this.queue2
    this.queue2 = this.queue1
    this.queue1 = temp
}
MyStack.prototype.pop = function(){
    if(!this.queue2.length) this.transform();
    this.queue2.shift();
}
MyStack.prototype.top = function(){
    if(!this.queue2.length) this.transform();
    return this.queue2[0]
}
MyStack.prototype.empty = function (){
    return this.queue1.length && this.queue2.length
}