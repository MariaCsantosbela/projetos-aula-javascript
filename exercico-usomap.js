const maca = {
    value: 2,
} 
const limao = {
    value: 6,
} 




function mapComThis(array, thisArg){
    return array.map(function(item){
     return   item * this.value;

    },thisArg);
} 

const num = [1, 2];

console.log('this--->maçã', mapComThis(num, maca));
console.log('this--->limão', mapComThis(num, limao));

