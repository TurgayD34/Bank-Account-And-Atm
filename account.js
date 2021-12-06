var availableBal = 100;
function optionMenu(){
    var atm_functions = window.prompt(`
    Hello,
    1. See Balance 
    2. Make a Deposit
    3. Maka a Withdrawal
    4. Get account name
    5. Exit`);
    if(atm_functions == 1){
        alert(`Your avaialable balance is $${this.availableBal}`);
    toContinue();
    }else if(atm_functions == 2){
        var deposit= parseInt(prompt(`How much do you want to deposit?`));
        if (isNaN(deposit) || deposit === " ") {
            alert('Error: please enter a number!');
           deposit();
        }
        availableBal += deposit;
        alert(`You have successfully deposited ${deposit}, You now have ${this.availableBal}`); 
        toContinue();
    }else if(atm_functions == 3){
        var withdrawal = parseInt(prompt(`How much do you want to withdrawal?`));
        if (isNaN(withdrawal) || withdrawal === " ") {
            alert('Error: please enter a number!');
           deposit();
        }
        availableBal -= withdrawal;
        alert(`You have successfully deposited ${withdrawal}, You now have ${this.availableBal}`);
        toContinue();
    }else if(atm_functions == 4){
        var fullName = window.prompt(`Enter your name : `);
        alert(`Account name is ${fullName}`);
        toContinue();
    }else if(atm_functions == 5){
        Exit();
    }else{
        alert("Please make a valid selection");
    }
}

// ************************************************************* To Continue
// For another transation
function toContinue(){
    var Yes_No =  parseInt(prompt(`Do you want to perform another transaction?
    1.Yes
    2. No`));
    if(Yes_No === 2){
       exit();
    }
    else{
        return optionMenu(); 
    }
}
optionMenu();