/* eslint-disable prettier/prettier */


export const randomOtp=()=>{
    let random=""
    for(let i=0;i<6 ;i++){
        random = random + Math.floor(Math.random()*10)
    }
    return random
}