//lastIndexOf Method
//The lastIndexOf method returns the last index at which a given element can be 
//found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//array.lastIndexOf(searchElement, fromIndex)

//searchElement: The element to locate in the array.
//fromIndex (Optional): The index to start the search at. Defaults to array.length - 1.

const array = [2, 5, 9, 2];

console.log(array.lastIndexOf(2));        // 3
console.log(array.lastIndexOf(5));        // 1
console.log(array.lastIndexOf(9));        // 2
console.log(array.lastIndexOf(7));        // -1
console.log(array.lastIndexOf(2, 2));     // 0
console.log(array.lastIndexOf(2, -1));    // 3
console.log(array.lastIndexOf(2, -3));    // 0
