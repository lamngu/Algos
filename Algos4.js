function popFront(arr) {
    var popFrontResult=arr[0];
    for(var i = 0; i <= arr.length-2; i++){
        arr[i] = arr[i+1];
    }
    arr.length -=1;
   return popFrontResult;
}
  
var arrayToPopFront = [1, 2, 3, 4];
var popFrontResult = popFront(arrayToPopFront);
 
console.log(popFrontResult); // should log 1
console.log(arrayToPopFront); // should log [2, 3, 4]


function pop(arr) {
    var popResult=arr[arr.length-1];
    arr.length -=1;
    return popResult;

}
  
var arrayToPop = [1, 2];
var popResult = pop(arrayToPop);
  
console.log(popResult); // should log 2
console.log(arrayToPop); // should log [1]