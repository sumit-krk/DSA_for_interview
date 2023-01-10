// if subarray length are given.
 let array=[1,4,2,10,23,3,1,0,20];

 function maxSum(array,k){
    if(array.length<k){
        console.log('Invalid')
    }
    let res=0;
    for(let i=0;i<k;i++){
        res+=array[i];
    }
    let current_sum=res;
    for(let i=k;i<array.length;i++){
        current_sum+=array[i]-array[i-k];
        res=Math.max(current_sum,res);
    }
    console.log(res);
    return;
 }
 maxSum(array,4)