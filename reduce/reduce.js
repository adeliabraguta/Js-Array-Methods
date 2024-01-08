// 1: Flatten an Array
function flattenArray(arr) {
    return arr.reduce((acc, curr) =>
        [...acc, ...curr], [])

}

const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(flattenArray(nestedArray));
// Output: [ 1, 2, 3, 4, 5, 6 ]


// 2: Counting Instances----------------------------------------------------------------
function countInstances(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {})
}

const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
console.log(countInstances(fruits));
// Output: { 'apple': 2, 'banana': 2, 'orange': 1 }


// 3: Average of Array----------------------------------------------------------------
function averageArray(arr) {
    return arr.reduce((acc, curr, index, array) =>
        acc + curr / array.length, 0)
}

const numbers = [1, 2, 3, 4, 5];
console.log(averageArray(numbers)); // Output: 3


// 4: Find Maximum Value----------------------------------------------------------------
function findMax(arr) {
    return arr.reduce((acc, curr) => acc > curr ? acc : curr)
}

const numbers1 = [5, 2, 8, 1, 6];
console.log(findMax(numbers1)); // Output: 8


// 5: Remove Duplicates----------------------------------------------------------------
function removeDuplicates(arr) {
    return arr.reduce((acc, curr) =>
        acc.includes(curr) ? acc : [...acc, curr], [])
}

const withDuplicates = [1, 2, 3, 1, 4, 2, 5];
console.log(removeDuplicates(withDuplicates)); // Output: [1, 2, 3, 4, 5]


// 6: Group by Property----------------------------------------------------------------
function groupByProperty(arr, property) {
    return arr.reduce((acc, curr) => {
        const key = curr[property]
        acc[key] = acc[key] || [];
        acc[key].push(curr)
        return acc
    }, {})
}

const students = [
    {name: 'Alice', grade: 'A'},
    {name: 'Bob', grade: 'B'},
    {name: 'Charlie', grade: 'A'},
];
console.log(groupByProperty(students, 'grade'));
// Output: { 'A': [ { name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' } ],
//           'B': [ { name: 'Bob', grade: 'B' } ] }


// 7: Reverse a String----------------------------------------------------------------
function reverseString(str) {
    return [...str].reduce((acc, curr) => curr + acc, '')
}

const text = 'hello';
console.log(reverseString(text)); // Output: 'olleh'


// 8: Factorial----------------------------------------------------------------
function factorial(n) {
    return Array.from({length: n}, (_, i) => i + 1).reduce((acc, curr) => acc * curr)
}

console.log(factorial(5)); // Output: 120


// 9: Longest Word----------------------------------------------------------------
function longestWord(sentence) {
    return sentence.split(' ').reduce((acc, curr) => curr.length > acc.length ? curr : acc)
}

const sentence = "The quick brown fox jumped over the lazy dog";
console.log(longestWord(sentence)); // Output: 'jumped'


// 10: Flatten and Sum----------------------------------------------------------------
function flattenAndSum(arr) {
    return arr.reduce((acc, curr) =>
        acc.concat(curr), []).reduce((acc, curr) => acc + curr, 0)
}

const nestedArray2 = [[1, 2], [3, 4], [5, 6]];
console.log(flattenAndSum(nestedArray2)); // Output: 21


// 11: Vowel Count----------------------------------------------------------------
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((acc, curr) => vowels.includes(curr.toLowerCase()) ? acc + 1 : acc, 0)
}

const text1 = "Hello, how are you?";
console.log(countVowels(text1)); // Output: 7


// 12: Partition Odd and Even----------------------------------------------------------------
function partitionOddEven(arr) {
    return arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc['even'] = [...acc['even'], curr]
        } else {
            acc['odd'] = [...acc['odd'], curr]
        }
        return acc

    }, {even: [], odd: []})
}

const numbers3 = [1, 2, 3, 4, 5, 6];
console.log(partitionOddEven(numbers3));
// Output: { odd: [1, 3, 5], even: [2, 4, 6] }


// 13: Palindrome Check----------------------------------------------------------------
function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('')
    const reversed = str.split('').reduce((acc, curr) => curr + acc, '')
    return reversed === str
}

const word = "racecar";
console.log(isPalindrome(word)); // Output: true


// 14: Sum of Squares----------------------------------------------------------------
function sumOfSquares(arr) {
    return arr.reduce((acc, curr) => curr * curr + acc, 0)
}

// Example usage:
const numbers4 = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers4)); // Output: 55


// 15: Transform and Filter----------------------------------------------------------------
function transformAndFilter(arr) {
    return arr.reduce((acc, curr) => {
        return curr * 2 > 10 ? [...acc, curr * 2] : acc
    }, []).sort()
}

function transformAndFilter2(arr) {
    return arr.map((item) => item * 2).filter((item) => item > 10).sort()
}

const numbers5 = [5, 12, 3, 8, 6];
console.log(transformAndFilter(numbers5)); // Output: [12, 16, 24]
console.log(transformAndFilter2(numbers5)); // Output: [12, 16, 24]


// 16: Chaining Map and Filter----------------------------------------------------------------
function capitalizeFilterConcat(arr) {
    return arr.reduce((acc, curr) => {
        return curr.length > 5 ? (curr + acc).toUpperCase() : acc
    }, '')
}

// Example usage:
const words = ['apple', 'banana', 'kiwi', 'orange'];
console.log(capitalizeFilterConcat(words)); // Output: 'ORANGEBANANA'


// 17: Flatten and Group by Length----------------------------------------------------------------
// Write a function that flattens an array of arrays,
// groups the elements by their length, and calculates the average length for each group.
function flattenGroupByLength(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr.length] = curr.reduce((acc, curr) => acc + curr, 0) / curr.length
        return acc
    }, {})
}

// Example usage:
const nestedArray3 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
console.log(flattenGroupByLength(nestedArray3)); // Output: { '2': 1.5, '3': 4, '4': 7.5 }


// 18: Array Transformation with Index----------------------------------------------------------------
// Write a function that transforms an
// array by doubling each element if its index is even and tripling it if the index is odd.
function transformArrayWithIndex(arr) {
    return arr.reduce((acc, curr, index) => {
        return index % 2 === 0 ? [...acc, curr * 2] : [...acc, curr * 3]
    }, [])
}

// Example usage:
const numbers6 = [1, 2, 3, 4, 5];
console.log(transformArrayWithIndex(numbers6)); // Output: [ 2, 6, 6, 12, 10 ]


// 19: Nested objects----------------------------------------------------------------
function nestedObjects(obj) {
    return Object.values(obj).reduce((acc, curr) => {
        if (typeof curr === 'object') {
            return [...acc, ...nestedObjects(curr)]
        } else {
            return [...acc, curr]
        }
    }, [])
}

// Example usage:
const objectOfObjects = {
    prop1: {
        Name: 'One',
        Child: {
            Name: 'Child 1',
            Child: {
                Name: 'Child 11'
            }
        }
    },
    prop2: {
        Name: 'Two',
        Child: {
            Name: 'Child 2',
            Child: {
                Name: 'Child 22'
            }
        }
    },
}
console.log(nestedObjects(objectOfObjects)); // Output:  ['One', 'Child 1', 'Child 11', 'Two', 'Child 2', 'Child 22']


// 20: Find Missing Number----------------------------------------------------------------
function findMissingNumber(arr) {
    const expected = Array.from({length: arr.length + 1}, (_, i)=> i+1).reduce((acc,curr)=> acc+curr,0)
    const current = arr.reduce((acc, curr) => acc+curr,0)
    return expected - current
}

const numbers7 = [1, 2, 4, 5, 6];
console.log(findMissingNumber(numbers7)); // Output: 3
