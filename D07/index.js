const inventory = [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 5 },
    { name: 'fish', type: 'meat', quantity: 22 },
];

let stringCount = {}
for (let i = 0; i < inventory.length; i++) {
    console.log(`${i}`, inventory[i])
    if (stringCount[inventory[i].type]) {
        stringCount[inventory[i].type].push(inventory[i]);
        // console.log("data",stringCount[inventory.type])
        // stringCount[inventory.type] = stringCount + stringCount[inventory.type]
    } else {
        stringCount[inventory[i].type] = [inventory[i]];
    }
}
console.log("data", stringCount)



const Data = [
    {
        "payheadCode": "HRA",
        "payheadDependentDetailModel": [
            {
                "payheadCode": "HRA",
                "attributeTypeDesc": "Company|Branch",
            },
            {
                "payheadCode": "TRPALL",
                "attributeTypeDesc": "Company|Branch",
            },
        ]
    },
    {
        "payheadCode": "TRPALL",
        "payheadDependentDetailModel": [
            {
                "payheadCode": "TRPALL",
                "attributeTypeDesc": "Company|Branch",
            },
            {
                "payheadCode": "TRPALL",
                "attributeTypeDesc": "Company|Branch",
            },
        ]
    },
    {
        "payheadCode": "TRPALL",
        "payheadDependentDetailModel": [
            {
                "payheadCode": "HRA",
                "attributeTypeDesc": "Company|Branch",
            },
            {
                "payheadCode": "TRPALL",
                "attributeTypeDesc": "Company|Branch",
            },
        ]
    }
]

let filterData = []
for (let i = 0; i < Data.length; i++) {
    Data[i].payheadDependentDetailModel.filter((data) => {
        if (data.payheadCode == "HRA") {
            filterData.push(Data[i])
        }
    })
}
console.log("filter", filterData)


