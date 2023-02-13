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
    withdraw.innerText = userWithdraw.value;
    totalBalance = parseInt(balance.innerText);
    balance.innerText = totalBalance - parseInt(userWithdraw.value);
    userWithdraw.value = "";
})