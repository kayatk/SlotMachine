const prompt = require("prompt-sync")()

//To Get Deposit Amount From User
const deposit =() => {
    while(true){
        const  depositAmount = prompt("Enter the Deposit Amount: ")
        const numberDepositAmount =parseFloat(depositAmount)
        if(isNaN(numberDepositAmount) || (numberDepositAmount <=0)){
            console.log("You Have Entered Wrong amount. Please Try Again !")    
        }else{
            return numberDepositAmount
        }
}
}


//To Get Number Lines From User
const noOflines = () => {
    while(true){
    const noLines = prompt("Enter the Number of Lines to Bet(1-3): ")
    const lines =parseInt(noLines)

    if(isNaN(lines) || (lines <= 0) || (lines >=4)){
        console.log("You Have Entered Invalid input. Please Try Again !")  
    }
    else{
        return lines
    }
}
}

const depositedAmount =deposit()
const noOfLines=noOflines()