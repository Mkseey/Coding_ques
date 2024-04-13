function ReverseString(){
   
    let given_string="kartik mahurkar"
    //need to conver the string to array
    let string_arr= given_string.split(" ");
    let reverse_given_string='';
       for(let arr= 0; arr<string_arr.length; arr++){
        let str_r =  string_arr[arr];
        for(let revArr = str_r.length - 1 ; revArr>=0;revArr--){
             reverse_given_string = reverse_given_string + str_r[revArr]
        }
        reverse_given_string = reverse_given_string + ' '
        console.log('reverse_given_string',reverse_given_string)
    }

}

ReverseString()


//Write a function that returns the reverse of a string.

Reverse("GOD kartik")

function Reverse(str){

  let revStr ='';
   for(let reverseStr=str.length-1; reverseStr >= 0; reverseStr-- ){
     revStr = revStr + str[reverseStr]
   }
   console.log(revStr)
  
  let string = str.split('').reverse().join('');
  console.log(string)

}
