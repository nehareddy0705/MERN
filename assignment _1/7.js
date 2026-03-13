// //Aysnchronous

// console.log("first")
// setTimeout(() => {
//     console.log("task completed")
// },1)
// console.log("second")
// console.log("third")


// //timer function

//setTimeout
// setTimeout(() =>{
//     console.log("callback executed")
// },3000)

//setInterval
// setInterval(() => {
//     console.log("call")
// },3000)


// //promise - can be fulfilled or rejected - only one can happen - Asynchronous
    //Examples
        //make API request
        //hash a password
        //creating tokens
        //database/HTTP libraries 
        //file & stream APIs
// //call in 5 secs
// console.log("Friend is waiting for a call in 5 sec.")
// let futureCondition = false
// const promObj = new Promise((fulfillStage, rejectedStage) => { //parameters are functions
//    if(futureCondition){
//         fulfillStage("promise fulfilled")
//     }
//     else{
//         rejectedStage("promise rejected")
//     }
// },5000)
// promObj
//     .then((message) => {console.log("message in then:",message)})
//     .catch((errormessage) => {console.log("error is :",errormessage)})

// //I'll send 10,000/- tomorrow
console.log("I will send 10,000/- tomorrow...")
let futureCondition = true
const promobj = new Promise((fulfilled,rejected) => {
    if(futureCondition){
        fulfilled("10000 sent")
    }
    else{
        rejected("can't send money")
    }
},10000)
promobj 
    .then((mess) => {console.log(mess)})
    .catch((error) => {console.log(error)})



