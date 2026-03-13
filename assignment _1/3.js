//advanced operations on array

//It doesnt modify original array instead it make a copy of array.

// let data = [90,45,-12,65,73]

// syntax - let result = data.filter/map((element,index => condition)) - 2nd parameter optional
//filter - selecting the element
// let r1 = data.filter((element) => element > 40 && element < 80)
// console.log(r1)
// //map - modifying the element
// let r2 = data.map(element => element + 10)
// console.log(r2)

// // add 10 for element < 50 and subtract 20 for element > 50.
// const r3 = data.map(element => 
// {
//     if (element < 50){
//         return element + 10
//     }
//     else{
//         return element - 20
//     }
// }
// )
// console.log(r3)

// //reduce - returns single value
// //syntax - let result = data.data.reduce((accumulator,element))
// const sum = data.reduce((accum,element) => accum + element)
// console.log(sum)

// //find min
// const min = data.reduce((accum,element) =>{
//     if (accum < element){
//         return accum
//     }
//     else{
//         return element
//     }
// } )
// console.log(min)

// const max = data.reduce((accum,element) =>{
//     if (accum > element){
//         return accum
//     }
//     else{
//         return element
//     }
// } )
// console.log(max)

// //sort - modifies the original array
// let array = [9,10,8,4]
// array.sort((a,b) => a-b)
// console.log(array)

// //tosorted - makes the copy of the sorted array
// let test = array.toSorted((a,b) => a - b)
// console.log(test)


