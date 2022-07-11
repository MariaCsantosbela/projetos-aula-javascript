
//solução 1 para exercico de verificação de palíndromo//
function verificaPalindromo(string) {
    if(!string) return "string inexistente";
    return string.split("").reverse.joing("") ===string;
 }

 // solução2 para exercico de verificação de palíndromo //

 function verificaPalindromo2(string) {
    if(!string) return "string inexistente";
    for(let i=0; i < string.length /2; i++ ) {
        if(string[i] !== string[ string.length - 1 - i ] ){
        return false;
    }



    }
    return true;


 }
 console.log(verificaPalindromo2 (abba));
