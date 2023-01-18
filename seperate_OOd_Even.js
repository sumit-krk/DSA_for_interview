let array=[12,34,45,9,8,90,3];
let l=0, r=array.length-1;
while(l<r){
    while(array[l]%2==0 && l<r){
        l++;
    }
    while(array[r]%2==1 && l<r){
        r--;
    }
    if(l<r){
        let temp=array[l];
        array[l]=array[r];
        array[r]=temp;
        l++;
        r--;
    }
}
console.log(array);