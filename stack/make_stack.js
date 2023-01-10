let s=[];
let current_size=0;
let top_ele=-1;

function push(data){
    s[current_size]=data;
    current_size+=1;
    top_ele+=1;
}

function pop(){
    s.length=s.length-1;
    current_size-=1;
    top_ele-=1;
}

push(5);
push(2);
push(7)
pop();
console.log(s[top_ele])

console.log(s);
