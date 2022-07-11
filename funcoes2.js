// calcular idade exercicio de this, call e apply(sempre mandar os dados entre colchetes para apply)  //

function claculeIdade(anos){
    return 'Daqui a ${anos} anos, ${this.nome } tera ${this.idade + anos}';
 } 

 const pessoa1= {
    nome: "Maria",
    idade: 17,

  } 

  const pessoa2= {
    nome: "Pedro",
    idade: 47,

  } 

  const animal= {
    nome: "Dumbo",
    idade: 3,
    raca: "elefante que voa",


  } 
console.log(claculeIdad.call(pessoa2, 40));
