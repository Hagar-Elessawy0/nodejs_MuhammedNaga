/* higher order functions : functions that take other functions as parameters or return functions
map , filter , find , some , every , reduce array methods
*/
// calli
const numbers1 : number[] = [1, 2, 3, 4, 5, -1];

// map : creates a new array with the results of calling a provided function on every element in the calling array
const squaredNumber = numbers1.map((num) => num * num);
console.log(squaredNumber);                                      // [1, 4, 9, 16, 25] 

// filter : creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers1.filter((num) => num % 2 === 0);    
console.log(evenNumbers);                                        // [2, 4]

// find : returns the value of the first element in the array that satisfies the provided function, if not found returns undefined
const foundNumber = numbers1.find((num) => num > 3);           
console.log(foundNumber);                                        // 4

// some : returns true if at least one element in the array passes the test implemented by the provided function
const hasNegativeNumber= numbers1.some((num) => num < 0);            
console.log(hasNegativeNumber);                                  // true

// every : returns true if all elements in the array pass the test implemented by the provided function
const isAllNegativeNumbers = numbers1.every((num) => num < 0);          
console.log(isAllNegativeNumbers);                               // false

// reduce : reduces the array to a single value , second parameter is initial value(optional) and the default value is 0
const total = numbers1.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(total);                                              // 14
