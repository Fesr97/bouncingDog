function coinFlip(){
if (Math.random()*100 >50){
    console.log("testa")
    return true
    
}
console.log("croce")
return false
}
export {coinFlip};