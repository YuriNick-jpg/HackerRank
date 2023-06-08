function miniMaxSum(arr) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    
    let minArr = arr.slice();
    minArr.splice(arr.indexOf(minValue), 1);
    
    let maxArr = arr.slice();
    maxArr.splice(arr.indexOf(maxValue), 1);
  
    function simpleArraySum(arr) {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }
  
    let marrSum = simpleArraySum(minArr);
    let MarrSum = simpleArraySum(maxArr);
    
    console.log(marrSum, MarrSum);
  }
