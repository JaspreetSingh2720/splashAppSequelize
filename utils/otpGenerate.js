function generateOtp (){
    let digits = ["0","1","2","3","4","5","6","7","8","9"];
    let otp = "";
    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * 10);
        console.log("======================================", index)
        otp += digits[index];
    }
    return otp; 
}

module.exports = {generateOtp};