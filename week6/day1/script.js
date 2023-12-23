function map(array, transform) { //pass an array as an argument, and the way of transforming the array
    let mapped = []; //creates a new array
    for (let element of array) {
        mapped.push(transform(element)); //push the transformed element of the initial array into the new array
    }
    return mapped;//return the new array
}