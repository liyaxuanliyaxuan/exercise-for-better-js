//高阶函数：函数以参数形式传递
//1、回调函数
//2、委托
var appendDiv = function(){
    for( var i = 0; i<10; i++){
        var div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
        div.style.display = 'none';
    }
}
appendDiv();
//使用传递函参数改进
var appendDiv2 = function(callback){
    for( var i = 0; i<10; i++){
        var div = document.createElement('div');
        div.innerHTML = i;
        document.body.appendChild(div);
    }
    if(typeof callback === 'function'){
        //检验
        callback(div)
    }
}
appendDiv(function(node){
    node.style.display = 'none'
    //向callback传入的参数是由委托函数准备好的
})
//3、定制规则 Array.prototype.sort
//函数作为返回值输出
//currying:部分求值
//currying的思想
var cost = (function(){//闭包，封装变量args
    var args = []
    return function(){
        if(arguments.length === 0){//没有传递参数就进行计算
            var money = 0;
            for( var i=0, len=args.length;i<len;i++){
                money += args[i]
            }
            return money;
        }else{
            console.log('接收，不计算');
            [].push.apply( args, arguments)//apply借用数组的push方法,保存不计算
        }
    }
})();
cost( 1 );
cost( 2 );
cost( 3 );
console.log(cost());
//编写一个currying函数，传入函数参数处理具体业务逻辑
var currying = function(fn){
    var args = [];
    return function(){
        if( arguments.length === 0){
            return fn.apply(this, args)
        }else{
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    }

}
//编写一个UNcurry函数，泛化this
