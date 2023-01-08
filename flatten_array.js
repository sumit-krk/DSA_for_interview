let array=[
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];

function flattenArray(array){
    let arr=[];
    function helperefunc(array){
        for(let i=0;i<array.length;i++){
            if(Array.isArray(array[i])){
                helperefunc(array[i]);
            }
            else{
                arr.push(array[i]);
            }
        }
    }
    helperefunc(array);
    return arr;
}
let res=flattenArray(array);
console.log(res)