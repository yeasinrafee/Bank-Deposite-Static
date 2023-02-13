deposit = document.getElementById('deposit');
withdraw = document.getElementById('withdraw');
balance = document.getElementById('balance');
userDeposit = document.getElementById('user-deposit');
userWithdraw = document.getElementById('user-withdraw');

// For Deposit 
document.getElementById('btn-deposit').addEventListener('click', function(){
    deposit.innerText = userDeposit.value;
    totalBalance = parseInt(balance.innerText);
    balance.innerText = totalBalance + parseInt(userDeposit.value);
    userDeposit.value = "";
})

// For Withdraw 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    totalBalance = parseInt(balance.innerText);
    if(totalBalance > parseInt(userWithdraw.value)){
        withdraw.innerText = userWithdraw.value;
        balance.innerText = totalBalance - parseInt(userWithdraw.value);
        userWithdraw.value = "";
    }else{
        alert("You don't have safficiant Balance!!");
    }

})