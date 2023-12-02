function reverseAnArray(arr) {
    console.log("Gven array: ",arr);
    for(let i = 0; i <= Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log("Reversed Array: ",reverseAnArray([5, 2, 15, 10, 4, 1, 16, 17, 15]));