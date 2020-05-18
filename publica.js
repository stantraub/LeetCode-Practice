//create tree with this string

const liverampData = `data_store_segment_id, name, description, provider, price 
1000846336, Alliant > Automotive > Auto - In Market New Vehicle, In - Market model for new vehicle, Alliant, 2.75
1000846346, Alliant > Automotive > Auto - In Market for Insurance, In - Market model for auto insurance, Alliant, 2.75
1000847476, Alliant > Automotive > Auto - In Market for Used Vehicle, In - Market model for used vehicle, Alliant, 2.75
1000845656, Alliant > Demographic > Age 25 - 29 years, Active multi - channel households with a person age 25 - 29 years old present in the HH., Alliant, 1.75
1000848136, Alliant > Demographic > Age 30 - 34 years, Active multi - channel households with a person age 30 - 34 years old present in the HH., Alliant, 1.75
1000845646, Alliant > Demographic > Age 35 - 39 years, Active multi - channel households with a person age 35 - 39 years old present in the HH., Alliant, 1.75
1000848146, Alliant > Demographic > Age 40 - 44 years, Active multi - channel households with a person age 40 - 44 years old present in the HH., Alliant, 1.75
1000845636, Alliant > Demographic > Age 45 - 49 years, Active multi - channel households with a person age 45 - 49 years old present in the HH., Alliant, 1.75`;

class TreeNode {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

let inputs = liverampData.split("\n").slice(1)
// console.log(inputs)
let firstNode = inputs[1]
// console.log(firstNode)

// let root = new TreeNode(inputs[1].split(' > ')[0].split(", ")[1])
// console.log(root)
let stopIteration = false
let lastComma = false
let level = 1
let root = null;

for (let i = 0; i < inputs.length; i++) {
    const currentString = inputs[i]
    for (let j = 0; j < currentString.length; j++) {
        const currentChar = currentString[j]

        if (currentChar === ',' && foundProvider(j, currentString)) {
            let provider = getProvider(j, currentString)
            root = new TreeNode(provider)
        }

        while (root) {
            // check to see the value
            // check curren category (need to be able to get current category. Creat a function for this)
            // Based on this, we will know whether to add a child or not
        }

        // check to see if we are at the last comma
        // if last comman, update stopIteration and set it to true
        if (stopIteration) break
       
    }
}

function foundProvider(idx, string) {

}

// let root = new TreeNode(firstNode.split(",")[1].split(' > ')[0])


// let nodes = firstNode.split(' > ')

// for (let i = 1; i < nodes.length; i++) {
//   // nodes[i]
// }
