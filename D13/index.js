function LongestWord(sen) { 
    let arr = sen.split(' ');
    let removedArr = ''
    let maxLength = arr[0].replace(/[^a-zA-Z\s]/g, '');
    for(let i=0; i<arr.length; i++) {
      removedArr = arr[i].replace(/[^a-zA-Z\s]/g, '')
      if(removedArr.length > maxLength.length ){
        maxLength = arr[i];
      }
    }
    // code goes here  
    return maxLength; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("fun&!! time"));