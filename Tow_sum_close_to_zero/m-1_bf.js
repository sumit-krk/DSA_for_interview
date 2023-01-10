let array=[1,2,6,9,-5,-2];
let ind_1,ind_2;
let sum=9999;
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(Math.abs(array[i]+array[j])<Math.abs(sum)){
            ind_1=i;
            ind_2=j;
            sum=array[i]+array[j];
        }
    }
}
console.log(ind_1,ind_2);