//1、使用闭包循环绑定事件
var lis = document.getElementsByTagName('li')

for (var i = 0, len = lis.length; i < lis.length; i++) {
    (function (i) {
        lis[i].onclick = function () {
            console.log(i);
        }
    }(i))
}
//2、封装变量
var mult = function(){
    var a = 1;
    for(var i = 0,len = arguments.length; i<len; i++){
        a = a*arguments[i]
    }
    return a;
}
//对于相同的参数而言每次进行计算是一种浪费，闭包带来缓存机制
console.log(mult(1,2,3));
var cache = {}
var mult2 = function(){
    var args = Array.prototype.join.call( arguments, ',');//将参数使用字符串形式存储
    if( cache[args]){//如果这组参数出现过
        console.log('取出缓存结果');
        return cache[ args ];//直接取结果，不进行计算
    }
    var a = 1;
    for(i=0, len=arguments.length;i<len;i++){
        a = a * arguments[i];
    }
    return cache[ args ] = a;
}
console.log(mult2(1,2,3));
console.log(mult2(1,2,3));
//改进：将cache变量封装在函数内部
var mult3 = (function(){
    var cache = {}
    return function(){
        var args = Array.prototype.join.call( arguments, ',');//将参数使用字符串形式存储
        if( cache[args]){//如果这组参数出现过
            console.log('取出缓存结果');
            return cache[ args ];//直接取结果，不进行计算
        }
        var a = 1;
        for(i=0, len=arguments.length;i<len;i++){
            a = a * arguments[i];
        }
        return cache[ args ] = a;
    }
})()
//改进：使用闭包封装函数(提炼函数)
var mult4 = (function(){
    var cache = {}
    var calculate = function(){

        var a = 1;
        for(i=0, len=arguments.length;i<len;i++){
            a = a * arguments[i];
        }
        return a;
    }
    return function(){
        var args = Array.prototype.join.call( arguments, ',');//将参数使用字符串形式存储
        if( cache[args]){//如果这组参数出现过
            console.log('取出缓存结果');
            return cache[ args ];//直接取结果，不进行计算
        }
      
        return cache[ args ] = calculate.apply(null, arguments);//null表示没有要替代的this，内部this指向不变
    }
})()
//3、延续局部变量寿命
//4、闭包模拟面向对象
//5、闭包实现命令模式
