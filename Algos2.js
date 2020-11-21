function push(arr, elem) {
  arr.[arr.length]=elem;
  return arr;
}
  
var originalArray = [1];
  
var result = push(originalArray, 2);
  
console.log(result === originalArray); 
console.log(result);


function pushFront(arr, elem) {
  for(var i = arr.length; i >= 1; i--){
    arr[i] = arr[i-1];
  }
  arr[0] = elem;
  return arr;
}
  
var secondArray = [4];
  
var result2 = pushFront(secondArray, 3);
  
console.log(result2 === secondArray);
console.log(result2); 

function addSevenToMost(intArray) {
  for(var i=1;i<intArray.length; i++){
  intArray[i]=intArray[i]+7;
  }
  return intArray;
  }
  
console.log(addSevenToMost([1, 2, 3, 4]));
console.log(addSevenToMost([2, 5, 7]));