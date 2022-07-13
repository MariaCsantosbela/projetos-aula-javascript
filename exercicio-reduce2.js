const lista =  [
    {
        nome: "manteiga",
        valor: 12,
     },
     {
        nome:"queijo",
        valor:  40,
      },
      { 
        nome: "suco",
        valor: 30,
      },


];
 const saldoDisponivel = 100;




function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        return prev - current.valor;
        console.log('rodada', index+1);
        console.log(prev);
        console.log(current);
    }, saldoDisponivel);

}

console.log(calculaSaldo(lista,saldoDisponivel));
