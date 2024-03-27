const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
  ];

  let stringCount = {}
for(let i = 0; i<inventory.length; i++){
    console.log(`${i}`,inventory[i])
    if(stringCount[inventory.type]){
        console.log("data",stringCount[inventory.type])
        // stringCount[inventory.type] = stringCount + stringCount[inventory.type]
    }else{
        // stringCount[inventory.type] =+ stringCount[inventory.type]
        stringCount.push(inventory[i])
    }
}
console.log("data",stringCount)