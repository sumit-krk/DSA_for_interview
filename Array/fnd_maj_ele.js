let array=[3,3,4,2,4,4,2,4,4,5,4,4,4,4,3]
// maj_ele>array.length/2
// method-1 brute force.
let maj_ind;
let flag=0;
for(let i=0;i<array.length;i++){
    let count_length=0;
    for(let j=0;j<array.length;j++){
        if(array[i]==array[j]){
            count_length+=1;
        }
    }
    if(count_length>Math.floor(array.length/2)){
        maj_ind=array[i];
        flag=1;
    }
}
if(flag==1){
    console.log(maj_ind);
}
else{
    console.log("No maj element")
}

// method-2 sorting approach

