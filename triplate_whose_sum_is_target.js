let array=[12,3,4,1,6,9];
let target=24;
array=array.sort((a,b)=>{
    return a-b;
})
for(let i=0;i<array.length-2;i++){
    let l=i+1;
    let r=array.length-1;
    while(l<r){
        if(array[i]+array[l]+array[l]+array[r]==target){
            console.log(array[i],array[l],array[r]);
            return;
        }
        else if(array[i]+array[l]+array[l]+array[r]>target){
            r--;
        }
        else if(array[i]+array[l]+array[l]+array[r]<target){
            l++;
        }
    }
}

// tc=o(n*2)
// sc=o(n)