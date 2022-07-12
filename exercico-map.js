function getAdmins(map){
    let admins=[];
    for([key,value] of map){
        if(value==='admins'){
            admins.push(key)
         }
     }
     return admins;

 } 


const usuarios = new map();

usuarios.set('Luiz','Admin');
usuarios.set('Maria','Admin');
usuarios.set('Laura','Admin');
usuarios.set('Pedro','User');

console.log(getAdmins(usuarios));
