// retornar um array com o nome dos alunos aprovados { }  //

const alunos = [
    { 
        nome: 'Maria',
        nota: 7, 
        turma: '1A',
    },
    { 
        nome: 'Pedro',
        nota: 6, 
        turma: '1B',
    },
    { 
        nome: 'Ana',
        nota: 9, 
        turma: '1C',
    }
]; 

function alunosAporvados(array,media){ 
    let aprovados[];

    const {nota,nome}= array[i]; 
    for(let i=0; i<array.length; i++){
        if(nota >= media ) {
            aprovados.push(nome); 
         }

     }
     return aprovados;

} 
console.log(alunosAporvados(alunos,5));