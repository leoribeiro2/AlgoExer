// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
/* const chunk = (array, size) => {
    const chuked = [];

    for (let element of array) {
        const last = chuked[chuked.length - 1];

        if (!last || last.length === size) {
            chuked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chuked;
} */

// Solution 2
const chunk = (array, size) => {
    const chuked = [];
    let index = 0;

    while (index < array.length) {
        chuked.push(array.slice(index, index + size));
        index += size;
    }

    return chuked;
}

module.exports = chunk;
