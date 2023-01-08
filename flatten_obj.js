let obj={
    name:'sumit',
    last_name:'kumar',
    address:{
        city:'lakhisarai',
        state:'bihar'
    }
}

function flatten_obj(obj,parent,res={}){
    for(key in obj){
        let temp=parent?key:key;
        if(typeof obj[key]=="object"){
            flatten_obj(obj[key],temp,res);
        }
        else{
            res[temp]=obj[key];
        }
    }
    return res;
}
console.log(flatten_obj(obj));
