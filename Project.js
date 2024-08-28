const prompt = require("prompt-sync")()

const ROW =3
const COL =3

const SYMBOL_COUNT ={
    A:2,
    B:4,
    C:6,
    D:8

}

const SYMBOL_VALUES ={
    A:5,
    B:4,
    C:3,
    D:2
}

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

//Get Bet Amount From User
const getBetAmount =(balance,lines) =>{
    while(true){
    const amount = prompt("Enter the bet amount per line : ")
    const betAmount = parseFloat(amount)
    if(isNaN(betAmount) || (betAmount <= 0) || (betAmount >balance/lines)){
        console.log("You Have Entered Invalid Bet Amount. Please Try Again !")  
    }
    else{
        
        return betAmount
    }
    }
}

//Spin the wheel , Select Random value on each Row and Column



let balance =deposit()
const noOfLines=noOflines()
const am =getBetAmount(balance,noOfLines)