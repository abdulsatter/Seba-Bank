    // login button event handler
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', function () {
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = 'none';

        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = 'block'

    })

    // deposit button event handler
    const depositBtn = document.getElementById('add-deposit');
    depositBtn.addEventListener('click', function () {
        // const depositAmount = document.getElementById("deposit-amount").value;
        // const depositNumber = parseFloat(depositAmount);
        const depositNumber = getInputNum('deposit-amount')

        // const currentDeposit = document.getElementById('current-deposit').innerText;
        // const currentDepositNum = parseFloat(currentDeposit);
        // const totalDeposit = depositNumber + currentDepositNum;  
        // document.getElementById('current-deposit').innerText = totalDeposit;
        updateValue('current-deposit', depositNumber)

        updateValue('current-balance', depositNumber)

        document.getElementById("deposit-amount").value = ""

    })

    // withdrow button event handler
    const withdrawBtn = document.getElementById('add-withdraw');
    withdrawBtn.addEventListener('click', function () {
        const withdrawNum = getInputNum('withdraw-amount');
        
        updateValue('current-withdraw', withdrawNum);
        updateValue('current-balance', -1* withdrawNum)

        document.getElementById('withdraw-amount').value = "";

    })

    function getInputNum(id) {
        const Amount = document.getElementById(id).value;
        const AmountNumber = parseFloat(Amount);
        return AmountNumber;
    }


    function updateValue(id, depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNum = parseFloat(current);
        const total = depositNumber + currentNum;
        document.getElementById(id).innerText = total;
    }