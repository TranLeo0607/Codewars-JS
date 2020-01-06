//The sum of two of the lowest positive integers.
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  var arr = numbers;
  //Learned that the sort method does not sort numbers correctly unlike Java's sort method
  function sortNumbers(a,b){ //Created a method to correctly sort numbers
    return a - b;
    }
  arr.sort(sortNumbers);
  return arr[0] + arr[1];
}
