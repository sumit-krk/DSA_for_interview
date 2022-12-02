let array=[1,4,20,3,10,5];
let target=33;

function findSubarray(array,target){
    let windowSum=0;
    let high=0;
    for(low=0;low<array.length;low++){
        while(windowSum<target && high<array.length){
            windowSum+=array[high];
            high++;
        }
        if(windowSum==target){
            console.log(low, high-1);
            return
        }
        windowSum-=array[low];
    }
}

findSubarray(array,target);