let person={
    name:'sumit',
    city:{
        dist:'lakhisarai',
        pin:'811107'
    }
}
let user=JSON.parse(JSON.stringify(person));
user.name='Ganesh';
user.city.dist='jammui';
console.log('persion',person)
console.log('user',user);
// copy main level as well as nested level object.