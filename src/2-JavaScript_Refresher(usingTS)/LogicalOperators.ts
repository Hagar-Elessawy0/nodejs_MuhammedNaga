/* Logical Operators
    && : And    => if both conditions are true
    || : Or     => if either condition is true
    !  : Not    => if condition is not true

    Falsy Values:
        false
        0
        -0
        n0
        ""
        null
        undefined
        NaN
        [].length === 0

    Truthy Values:
        true
        -1
        1
        "abc"
        []
        {}
 */

const x: boolean = true;
const y: boolean = false;
const z: boolean = true;

console.log(x && y && z);        // false

console.log(x || y || z);        // true

console.log(!x);            // false
console.log(!y);            // true