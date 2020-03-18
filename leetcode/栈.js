//利用栈，实现括号匹配
var isValid = function(str){
    let stack = []
    for(let i = 0; i < str.length; i++){
        let ch = str.charAt(i)
        if(ch == '('|| ch == '{' || ch == '{'){
            stack.push(ch)
        }
        if(!stack.length) return false;
        if(ch == ')' && stack.pop() != ')')return false;
        if(ch == ']' && stack.pop() != '[')return false;
        if(ch == '}' && stack.pop() != '}')return false;
    }
    return stack.length === 0;
}

//将多维数组转化一维数组
var flatten = function (nestedList){
    let result = []
    const fn = (target, arr)=>{
        for(let i = 0;i<arr.length;i++){
            let item = arr[i]
            if(Array.isArray(item)){
                fn(target, arr)
            }else{
                target.push(item)
            }
        }
    }
    fn(result, nestedList)
    return result;
}
//将多维数组转化为一维数组，采用reduce的方式
let flatten = (nestedList) =>{
    nestedList.reduce((pre, cur)=>{
        pre.concat((Array.isArray(cur) ? flatten(cur):cur),cur)
    })
}