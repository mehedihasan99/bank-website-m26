// deposit button event handler 
document.getElementById("deposit-btn").addEventListener("click", function(){
    // deposited amount
    // update deposit 
    const depositField = document.getElementById("deposit-input");
    const addAmount = depositField.value;
    // console.log(depositAmount);
    // 
    const totalDeposit = document.getElementById("total-deposit");
    // add deposit mony
    const currentAmount = totalDeposit.innerText;
    const totalAmount = parseFloat(currentAmount) + parseFloat(addAmount);
    //clear deposit input field
    totalDeposit.innerText = totalAmount;

    // update balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText) + parseFloat(addAmount);
    totalBalance.innerText = totalBalanceAmount;
    depositField.value = "";
})
//event handle withdraw
document.getElementById("withdraw-btn").addEventListener("click", function (){
    // withdraw input
    const withdrawField = document.getElementById("withdraw-input");
    const addWithdraw = withdrawField.value;
    // console.log(withdrawAmount);

    // total withdraw
    const totalWithdraw = document.getElementById("total-withdraw");
    const currentWithdraw = totalWithdraw.innerText;
    // console.log(currentWithdraw);
    const totalWithdrawAmount = parseFloat(currentWithdraw) + parseFloat(addWithdraw);
    totalWithdraw.innerText = totalWithdrawAmount;
    // reduce balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const reduceBalance = parseFloat(totalBalanceText) - parseFloat(addWithdraw);
    totalBalance.innerText = reduceBalance;
    withdrawField.value = ""; 
})