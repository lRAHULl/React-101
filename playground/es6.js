// Arrow functions

/**
 * 'arguments' object - No longer bound.
 * 'this' keyword - No longer bound.
 */

const multiplier = {
    nums: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.nums.map(num => num * this.multiplyBy)
    }
}

console.log(multiplier.multiply());