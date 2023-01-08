let array_1=[1,5,8,13,65];
let array_2=[45,46,67];

let p1=0;
let p2=0;
let p3=0;

let temp=[];

while(p1<array_1.length || p2<array_2.length){
    if(array_1[p1]<array_2[p2]){
        temp[p3]=array_1[p1];
        p1++
    }
    else{
        temp[p3]=array_2[p2];
        p2++
    }
    p3++;
}
console.log(temp);