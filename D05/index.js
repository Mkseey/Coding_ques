// find the string count in the given string

function countString() {
    let string= "kartik mahurkar kartik" 
    let string_arr = string.split(" ");
    console.log(string_arr)
    let stringCount = {}

    for(let i = 0; i<string_arr.length; i++){
        let str_value = string_arr[i]
        // console.log("str_value",str_value)

        if (stringCount[str_value]) {
            // If the str_value exists in the object, increment its count
            stringCount[str_value] += 1;
        console.log("string value already value",stringCount[str_value])

        } else {
            // If the str_value doesn't exist, add it to the object with count 1
            stringCount[str_value] = 1;
            console.log("string value",stringCount[str_value])
        }
    }
    console.log("stringCount",stringCount)
}
countString()