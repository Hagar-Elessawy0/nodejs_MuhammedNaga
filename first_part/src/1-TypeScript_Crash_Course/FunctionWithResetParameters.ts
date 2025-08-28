function sumNumbers(...numbers : number[]) : number {
    return numbers.reduce((sum , num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3));