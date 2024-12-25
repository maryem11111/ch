function filterArray(arr, condition) {
    return arr.filter(condition);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, num => num % 2 === 0);
console.log(evenNumbers); 