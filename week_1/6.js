// spread operator (create copies of objects and arrays)
    // create copies top level objects
    //add elements/properties while copying
    //merge
// make shallow copy 
// doesnt copy nested objects

// for objects
// let person1 = {
//     name:'neha',
//     address: {
//         city : 'hyd'
//     }
// }
// let copy = {...person1}
// copy.name = 'ravi'
// copy.address.city = 'nyc'
// console.log(person1)
// console.log(copy)


// //deep copy - copies all the objects
// let person2 = {
//     name:'neha',
//     address: {
//         city : 'hyd'
//     }
// }
// let copyPerson = structuredClone(person2)
// copyPerson.name = 'ravi'
// copyPerson.address.city = 'nyc'
// console.log(person2)
// console.log(copyPerson)


//rest parameter - take multiple arguments
// cant give any parameter after rest parameter
// function sum(...a){
//     let ans = 0
//     for(let num of a){
//         ans += num
//     }
//     return ans
// }
// console.log(sum(10,30,40,50))

//destructuring(unpacking)
let arr = [12,20,30]
let [a,b,c] = arr
console.log(a,b,c)

let emp = {
    eid : 101,
    company : 'CTS'
}
let {eid,company} = emp //name should be same as keys in the object
console.log(eid)




