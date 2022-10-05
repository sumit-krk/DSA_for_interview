//----------------------------------METHOD-1-------------------------------------
//By brute forct
// T.C=N*2 and S.C=1
/*function runProgram(input){
    let mainArray=input.split("\n");
    let array_1=mainArray[1].split(" ").map(Number);
    for(let i=1;i<array_1.length-2;i++){
        let left_sum=0;
        for(let j=0;j<i;j++){
            left_sum+=array_1[j];
        }
        let right_sum=0;
        for(let j=i+1;j<=array_1.length-1;j++){
            right_sum+=array_1[j];
        }
        if(left_sum==right_sum){
          console.log(i+1);
          return;
        }
    }
    console.log("-1");
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });*/

  //---------------------------------METHOD-2-------------------------------------
  //By some optimisiton
  //T.C=n and S.C=n

  /*
  function runProgram(input){
  let mainArray=input.split("\n");
  let array_1=mainArray[1].split(" ").map(Number);
  let left_array=[];
  let right_array=[];
  for(let i=0;i<=array_1.length-1;i++){
        if(i!=0){
            left_array[i]=left_array[i-1]+array_1[i];
        }
        else{
            left_array[i]=array_1[i];
        }
      }
    for(let i=array_1.length-1;i>=0;i--){
        if(i!=array_1.length-1){
            right_array[i]=right_array[i+1]+array_1[i];
        }
        else{
            right_array[i]=array_1[i];
        }
      }
    for(let i=0;i<left_array.length;i++)
    {
        if(left_array[i]==right_array[i]){
            console.log(i+1);
            return;
        }
    }
    console.log("-1");
    
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
  */

  //-------------------------------------------METHOD-3------------------------------------
  //By proper optimisiton
  //T.C=n and S.C=1

  /*
  function runProgram(input){
  let mainArray=input.split("\n");
  let array_1=mainArray[1].split(" ").map(Number);
  let array_sum=0;
  let left_sum=0;
  for(let i=0;i<array_1.length;i++){
        array_sum+=array_1[i];
      }
  for(let i=0;i<array_1.length;i++){
      array_sum=array_sum-array_1[i];
      if(array_sum==left_sum){
        console.log(i+1);
        return;
      }
    left_sum+=array_1[i];  
  }
  console.log("-1");
    
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
  */
  