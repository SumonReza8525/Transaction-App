document.getElementById("logOutButton").addEventListener("click", () => {
  window.location.href = "./dom.html";
});

// Add Money Functionality

document.getElementById("addMoneyButton").addEventListener("click", () => {
  const addMoneyAmount = document.getElementById("addMoneyAmount");
  const amount = Number(addMoneyAmount.value);
  const addMoneyPassword = document.getElementById("addMoneyPin");
  const pin = Number(addMoneyPassword.value);
  const addMoneyAccount = document.getElementById("addMoneyAccount");
  const account = addMoneyAccount.value;
  const addMoneySelect = document.getElementById("addMoneySelect");
  const selectOption = addMoneySelect.value;
  const availableBalance = document.getElementById("availableBalance");
  const availableBalanceValue = Number(availableBalance.innerText);
  if (
    amount <= 0 ||
    pin !== 12901 ||
    account !== "01728903454" ||
    selectOption == ""
  ) {
    alert("Enter Valid Information");
  } else {
    const totalAmount = availableBalanceValue + amount;
    availableBalance.innerText = totalAmount;
    addMoneyAmount.value = "";
    addMoneyPassword.value = "";
    addMoneyAccount.value = "";
    addMoneySelect.value = "";
  }
});

// Withdraw Functionality

document.getElementById("withdrawMoneyButton").addEventListener("click", () => {
  const cashOutAmmount = document.getElementById("cashOutAmmount");
  const amount = Number(cashOutAmmount.value);
  const cashOutPin = document.getElementById("cashOutPin");
  const pin = Number(cashOutPin.value);
  const cashOutAccount = document.getElementById("cashOutAccount");
  const account = cashOutAccount.value;

  const availableBalance = document.getElementById("availableBalance");
  const availableBalanceValue = Number(availableBalance.innerText);

  if (amount <= 0 || pin !== 12901 || account !== "01728903454") {
    alert("Enter Valid Information");
  } else {
    if (amount > availableBalanceValue) {
      alert("Please enter less amount");
    } else {
      const totalAmount = availableBalanceValue - amount;
      availableBalance.innerText = totalAmount;
      cashOutAmmount.value = "";
      cashOutPin.value = "";
      cashOutAccount.value = "";
    }
  }
});

// Transfer section Functionality

document.getElementById("transferButton").addEventListener("click", () => {
  const transferAmmount = document.getElementById("transferAmmount");
  const amount = Number(transferAmmount.value);
  const transferPin = document.getElementById("transferPin");
  const pin = Number(transferPin.value);
  const transferAccount = document.getElementById("transferAccount");
  const account = transferAccount.value;

  const availableBalance = document.getElementById("availableBalance");
  const availableBalanceValue = Number(availableBalance.innerText);

  if (amount <= 0 || pin !== 12901 || account !== "01728903454") {
    alert("Enter Valid Information");
  } else {
    if (amount > availableBalanceValue) {
      alert("Please enter less amount");
    } else {
      const totalAmount = availableBalanceValue - amount;
      availableBalance.innerText = totalAmount;
      transferAmmount.value = "";
      transferPin.value = "";
      transferAccount.value = "";
    }
  }
});

// Pay Bill section functionality

document.getElementById("payBillButton").addEventListener("click", () => {
  const payBillAmount = document.getElementById("payBillAmount");
  const amount = Number(payBillAmount.value);
  const paybillPin = document.getElementById("paybillPin");
  const pin = Number(paybillPin.value);
  const payBillAccount = document.getElementById("payBillAccount");
  const account = payBillAccount.value;
  const payBillSelect = document.getElementById("payBillSelect");
  const selectOption = payBillSelect.value;
  const availableBalance = document.getElementById("availableBalance");
  const availableBalanceValue = Number(availableBalance.innerText);
  if (
    amount <= 0 ||
    pin !== 12901 ||
    account !== "01728903454" ||
    selectOption == ""
  ) {
    alert("Enter Valid Information");
  } else {
    if (amount > availableBalanceValue) {
      alert("Please enter less amount");
    } else {
      const totalAmount = availableBalanceValue - amount;
      availableBalance.innerText = totalAmount;
      payBillAmount.value = "";
      paybillPin.value = "";
      payBillAccount.value = "";
      payBillSelect.value = "";
    }
  }
});
