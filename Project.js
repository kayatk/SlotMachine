const prompt = require("prompt-sync")()

const deposit =() => {
    const  depositAmount = prompt("Enter the Deposit Amount: ")
    const numberDepositAmount =parseFloat(depositAmount)

    if(isNaN(numberDepositAmount) || (numberDepositAmount <=0)){
        
    }

}

deposit()