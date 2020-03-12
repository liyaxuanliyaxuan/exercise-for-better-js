function selectSort( arr ){
    let len = arr
    for(let i = 0; i< len-1; i++){
        minIndex = i;
        for(let j = i; j<len-1;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
            if(minIndex !== i){
                let temp = arr[i]
                arr[i] = arr[minIndex]
                arr[minIndex] = temp
            }
        }
    }

}