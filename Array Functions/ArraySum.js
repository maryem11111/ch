function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}


console.log(sumOfArray([1, 2, 3, 4, 5])); 