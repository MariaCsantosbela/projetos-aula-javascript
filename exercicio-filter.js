function filtraPares(array){
    return array.filter(calback);
}
function calback(item){
    return item % 2 ===0;
}
const num= [4, 8, 6, 33, 45];
console.log(filtraPare(num));
