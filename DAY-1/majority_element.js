// approach - 1(by sorting technique)
//----------------------------------------------------------
// function runProgram(input){
//     let mainArray=input.split("\n");
//     let testCase=Number(mainArray[0]);
//     for(let i=1;i<=testCase;i++){
//         let array=mainArray[2*i].split(" ").map(Number);
//         let array_after_sort=array.sort((a,b)=>{
//             return a-b
//         })
//         let maj=-1;
//       for(let j=0;j<=Math.floor(array_after_sort.length/2);j++){
//           if(array_after_sort[j]===array_after_sort[j+Math.floor((array_after_sort.length)/2)]){
//               maj=array_after_sort[j];
//           }        
//       } 
//       console.log(maj);
//     }
//   }
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//       read += input;
//   });
//   process.stdin.on("end", function () {
//       read = read.replace(/\n$/,"")
//      runProgram(read);
//   });
//   process.on("SIGINT", function () {
//       read = read.replace(/\n$/,"")
//       runProgram(read);
//       process.exit(0);
//   });

//-----------------------------------------------------------------------------------------------------
//- By object
let array=[3,3,4,2,4,4,2,4,4];
let obj={};
let ele=-1;
for(let i=0;i<array.length;i++){
    if(obj[array[i]]==undefined){
        obj[array[i]]=1;
    }
    else
    {
       obj[array[i]]+=1; 
    }
}
console.log(obj);
for(key in obj){
    console.log(obj[key])
  if(obj[key]>=Math.floor(array.length/2)+1){
      ele=key;
      break;
  }  
}
console.log(ele);

//----------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//approach - 2 (moore voting algorithem)
//-------------------------------------------------------------------------
