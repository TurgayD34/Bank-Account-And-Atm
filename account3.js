const getAccount = {
    availableBal = 100,
    accName = "Tdemir",
    getBalance: function(){
        alert(`Your avaialable balance is $${this.availableBal}`);
    },
    deposit: function(){
        var deposit = parseInt(prompt(`How much do you want to deposit?`));
        if (isNaN(deposit) || deposit === " ") {
            alert('Error: please enter a number!');
            var deposit = parseInt(prompt(`How much do you want to deposit?`));
        }
        availableBal += deposit;
        alert(`You have successfully deposited $${deposit}, You now have $${this.availableBal}`); 
    },
    withdrawal: function(){
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
            this.accError();
        }
    },
    getAccName: function(){
        alert(`Account name is ${this.accName}`);
    },
    accError: function(){
        alert('Error: please enter a number!');
            var withdrawal = parseInt(prompt(`How much do you want to withdrawal?`));
    },
    exitAcc: function(){
        alert(`Thank you for choosing us.`)
    },
    toContinue: function(){
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
}
function optionMenu(){
    const getAcc = getAccount();
    var atm_functions = window.prompt(`
    Hello,
    1. See Balance 
    2. Make a Deposit
    3. Maka a Withdrawal
    4. Get account name
    5. Exit`);
    switch(getAcc){
        case Balance:
           this.getBalance();
           this.toContinue(); 
    }
}
optionMenu();