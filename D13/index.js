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
    return maxLength; 
}

function SecondLongestWord(sen){
   let arr =  sen.split(" ")
   arr.sort((a, b) => b.length - a.length);
   return arr[1]
}
     
  // keep this function call here 
  // console.log(LongestWord("fun&!! time"));
  // console.log(findWordCountLength("mkseey kartik data num"));
  console.log(SecondLongestWord("mkseey asfsfsfdf data num "));
