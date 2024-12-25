function minMax(numbers){
    if (numbers.length == 0){
        return[];
    }
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return[min, max];
}
const numbers=[-10,4,75,0,9]
const result = minMax(numbers);
console.log(result);