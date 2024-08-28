const prompt = require("prompt-sync")()

const deposit =() => {
    let flag = true
    while(flag == true){
        const  depositAmount = prompt("Enter the Deposit Amount: ")
        const numberDepositAmount =parseFloat(depositAmount)
        if(isNaN(numberDepositAmount) || (numberDepositAmount <=0)){
            console.log("You Have Entered Wrong amount. Please Try Again !")    
        }else{
            flag =false
            return numberDepositAmount
        }
}
}

deposit()