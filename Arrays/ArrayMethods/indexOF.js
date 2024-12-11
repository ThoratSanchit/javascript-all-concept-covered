//indexOf() Method
//The indexOf method returns the first index at which a
//given element can be found in the array, or -1 if it is not present.

// array.indexOf(searchElement, fromIndex)

//searchElement:  The element to locate in the array.
//fromIndex (Optional):  The index to start the search at. Defaults to 0.
const array = [2, 5, 9, 2];

console.log(array.indexOf(2));        // 0
console.log(array.indexOf(5));        // 1
console.log(array.indexOf(9));        // 2
console.log(array.indexOf(7));        // -1
console.log(array.indexOf(2, 1));     // 3
console.log(array.indexOf(2, -1));    // 3
console.log(array.indexOf(2, -3));    // 0
