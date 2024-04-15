FourPinPwd(4) 
function FourPinPwd(pwdlen) {
   let pwd = 0;
   let pwdArr = []
   if(pwdlen === 4 ){
     pwd = 9999;
   }
    for(let i = 0; i<=pwd; i++){
        // console.log("value",i);
        pwdArr.push(String(i).padStart(4, '0'))
        // console.log("asf", String(i).padStart(4, '0'))
        console.log("asf", typeof(String(i).padStart(4, '0')))

    } 
    console.log("pwdARr",pwdArr)
}