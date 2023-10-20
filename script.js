//Task1 
function firstElement(array, n) {
    if (n && n > 0) {
        return array.slice(0, n);
    } else {
        return [];
    }
}

console.log(firstElement([5, 23, 4, 5, 8, 9], 1));

console.log(firstElement([5, 23, 4, 5, 8, 9], 4));



//Task2

let arr = [5, 6, 7, 89, 10, 11, 12, 1, 3]
let element = arr.join('-')

console.log(element)


//Task3
function swap(input) {
    let swapCase = '';

    for (let i = 0; i < input.length; i++) {
        let element = input[i];

        if (element == element.toUpperCase()) {
            swapCase += element.toLowerCase();

        } else {
            swapCase += element.toUpperCase()
        }
    }

    return swapCase;
}

let input = "sALAM mENIM aDIM aYTACDIR";
let out = swap(input)
console.log(out)




//TASK4
function clearElement(array) {
    return array.filter(arr => {
        return arr !== false && arr !== undefined && arr !== "" && arr !== 0 && arr !== null;
    });
}
let arrayWithFalsyValues = [1, 0, null, false, 42, undefined];
let clearedArray = clearElement(arrayWithFalsyValues);
console.log(clearedArray);


//Task5
function deleteSameElements(array) {
    return array.filter((item, index) => array.indexOf(item) === index);

}

console.log(deleteSameElements([1, 2, 3, 3, 4, "salam", 5, "salam"]))



//Task6
function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]))
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]))
console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))