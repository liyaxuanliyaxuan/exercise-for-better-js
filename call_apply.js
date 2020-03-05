// //1、改变this指向
// var obj1 = {
//     name:'lyx'
// }
// var obj2 = {
//     name:'xyl'
// }
// window.name = 'window'
// var getName = function(){
//     alert( this.name )
// }
// getName();//window
// getName.call( obj1 );//lyx
// getName.call( obj2 );//xyl

//this 指向该元素节点
// var div1 = document.getElementById('div1')
// div1.onclick = function(){
//     alert( this.id );//div1 
// }

// //当该事件函数中有一个内部函数，内部函数定义后被内部调用

// div1.onclick = function(){
//     alert(this.id);
//     var inner = function(){
//         console.log(this);
//     }
//     inner();//window
// }
//2、这个时候使用call来修正this
div1.onclick = function(){
    alert(this.id)
    var inner = function(){
        console.log(this);
    }
    inner.call(this);//alert(div1)
}
//自定义getId函数
var getId = (function(fn){

    return function(){
        return fn.apply( document, arguments)//让this固定指向doc
    }
})(document.getElementById)
var testDiv = getId('div1')
console.log(testDiv);

//模拟bind函数
Function.prototype.myBind = function( host ){
    var bindFn  = this
    return function(){
        return bindFn.apply(host)
    }
}
var obj = {
    name:'lyx'
}
var objFn = function(){
    console.log(this.name);
}.myBind(obj)
objFn();
getId2 = document.getElementById.myBind(document)
var testDiv2 = getId('div2')
console.log(testDiv2);
//3、借用其他对象的方法
var A = function(name){
    this.name = name
}
var B = function(){
    A.apply( this, arguments)
}
B.prototype.getName = function(){
    return this.name
}
var b = new B('-lyx-')
console.log(b.getName());
//借用构造函数，类似继承的效果
//借用Array原型链上的方法
(function(arr){
    Array.prototype.push.call( arr, 1)
    console.log(arr);
})([1,2,3])
