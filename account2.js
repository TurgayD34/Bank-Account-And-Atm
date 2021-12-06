function optionMenu() {
    var atm_functions = window.prompt(`
    Hello,
    1. See Balance 
    2. Make a Deposit
    3. Maka a Withdrawal
    4. Get account name
    5. Exit`);

    if(atm_functions == 1){
        balance();
    }else if(atm_functions == 2){
        deposit();
    }else if(atm_functions == 3){
        withdrawal();
    }else if(atm_functions == 4){
        accName();
    }else if(atm_functions == 5){
        return;
    }else{
        alert("Please make a valid selection");
        toContinue();
    }
}
// ************************************************************* To Continue
// For another transation
function toContinue(){
    var Yes_No =  parseInt(prompt(`Do you want to perform another transaction?
    1.Yes
    2. No`));
    if(Yes_No === 2){
       return;
    }
    else{
        return optionMenu(); 
    }
}
// ************************************************************* Varibale
var availableBal = 100;
// ************************************************************* Atm function == 1
function balance(){
    alert(`Your avaialable balance is $${this.availableBal}`);
    toContinue();
}
// ************************************************************* Atm function == 2
function deposit(){
    var deposit = parseInt(prompt(`How much do you want to deposit?`));
    if (isNaN(deposit) || deposit === " ") {
        alert('Error: please enter a number!');
        var deposit = parseInt(prompt(`How much do you want to deposit?`));
    }
    availableBal += deposit;
    alert(`You have successfully deposited $${deposit}, You now have $${this.availableBal}`); 
    toContinue();
}
// ************************************************************* Atm function == 3
function withdrawal(){
    var withdrawal = parseInt(prompt(`How much do you want to withdrawal?`));
    if(withdrawal !== " " || withdrawal !== null || isNaN(withdrawal)){
        if(availableBal < withdrawal){
            alert(`You can not withdrawal $${withdrawal} amount.`)
            var withdrawal = parseInt(prompt(`How much do you want to withdrawal?`));
        }else{
            availableBal -= withdrawal;
            alert(`You have successfully deposited $${withdrawal}, You now have $${this.availableBal}`);
        }
    }else{
        alert('Error: please enter a number!');
        var withdrawal = parseInt(prompt(`How much do you want to withdrawal?`));
    }
    toContinue();
}
// ************************************************************* Atm function == 4
function accName(){
    var fullName = window.prompt(`Enter your name : `);
    alert(`Account name is ${fullName}`);
    toContinue();
}
optionMenu();