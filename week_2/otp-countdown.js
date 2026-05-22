// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP sent successfully")
let time = 10
let interval = setInterval(() => {
    console.log(time)
    if(time == 0){
        console.log("Resend")
        clearInterval(interval)
    }
    time --

},1000)