const meuArray = [20,30,50,60,90,10];

function valoresUnicos(array){ 
    const mySet= new Set(array);

    return [...mySet];
} 
console.log(valoresUnicos(meuArray));
