//function are first calss object in js.
//call back is a function that passed as arg to another function.
// make modifications in original array.


// let makepayment = function(amount,paymentType){
//     console.log(`payment of ${amount} started`)
//     paymentType()
// }

// let UPIpayment = function(){
//     console.log("upi payment done")
// }
// let Cardpayment = function(){
//     console.log("card payment")
// }
// makepayment(3000,UPIpayment)
// makepayment(4000,Cardpayment)



// let sum =  function(x){
//     return function(y){
//         return x + y
//     }
// }
// let result = sum(10)
// console.log(result(20)) // excepted not defined but output is 30 because the value of x is stored in the heap memory even after deleting from call stack untill the inside function is called.

//iterate (for - of loop).
// let names = ['ravi', 'ram', 'vikas']
// for(let i of names){
//     console.log(i)
// }


//object
// let student = {
//     sno:100,
//     name:'Neha',
//     age:18,
//     course:'BTECH'
// }
// //for-in loop to iterate object.
// for(let i in student){
//     console.log(`${i} is `,student[i])
// }


//array of objects
// let emps = [{eno:101, name: 'Neha'},{eno:102, name: 'Ravi'}]
// for (let emp of emps){
//     for( let j in emp){
//         console.log(`${j} is ${emp[j]}`)
//     }
// }
// for(let emp of emps){
//     console.log(`eno is ${emp.eno} and name is ${emp.name}`)
// }



// let student = {
//     roll_no : 11,
//     firstName : 'Neha',
//     lastName : 'Reddy',
//     course: 'BTECH',
//     marks : [80,90,100],
//     address : {
//         city : 'hyd',
//         pincode: 77777
//     },
//     getFullName: function(){
//         return this.firstName + " "+  this.lastName
//     },
//     getAvgMarks : function(){
//         let avg = 0
//         for(let i of this.marks){
//             avg += i
//         }
//         return avg
//     }
// }
// console.log(student.getFullName())
// console.log(student.getAvgMarks())



//array operations
// let array = [1,2,3,4]
// array.push(6) // add element at the end.
// array.unshift(0) // add element at the start of the array.
// array.splice(5,0,5) //used to add,remove and update the array.
// let removedElement = array.shift() //removes the first element of the array, if not returns undefined.returns the number.
// array.pop() //removes the last element in the array.
// array.splice(2,2) //array.splice(index,NoOfElementsToDelete,Number)
// array.splice(0,1,9) //updating
// console.log(array)


// basic operations on object.
// let person = {
//     name : 'neha',
//     age : 18
// }

// //add new property
// person.city = 'Hyd'

// //update property
// person.name = 'ravi'

// //delete property
// delete person.age
// console.log(person)


