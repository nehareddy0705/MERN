// 💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function sum(...a){
    let ans = 0
    for(let num of a){
        ans += num
    }
    return ans
}
console.log(sum(10,30,40,50))