function concat(arr1, arr2) {
    var arr =[]
    for(var i = 0; i< arr1.length; i++){
        arr.push (arr1[i])
    }
    for(var i = 0; i< arr2.length; i++){
        arr.push (arr2[i])
    }
    return arr
}
  
console.log(concat([1, 2, 3], [4, 5, 6]));

function reverseInPlace(arr) {
    for(var i=0; i<arr.length; i++){
        let temp = arr[i];
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i] = temp;
        return arr;
    }
}
  
var originalArray = [1, 2, 3, 4, 5];
var result = reverseInPlace(originalArray);
  
console.log(originalArray === result); // should log true
console.log(originalArray);