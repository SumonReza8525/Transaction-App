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

    // history functionality start
    const historyContainer = document.getElementById("historyContainer");
    const newDivOfHistory = document.createElement("div");
    let addMoneyButton = document.getElementById("addMoneyButton");
    let addMoneyButtonText = addMoneyButton.innerText;

    newDivOfHistory.innerHTML = `<div
          class="flex justify-between items-center bg-white p-3 mt-5 rounded-2xl"
        >
          <div class="flex items-center justify-between gap-2">
            <img
              class="p-1 rounded-full bg-gray-200 w-12"
              src="./assets/money1.png"
              alt=""
            />
            <div>
              <p class="text-xl font-semibold">${addMoneyButtonText}</p>
              <p class="text-gray-500">Amount : $${amount}</p>
            </div>
          </div>
          <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>`;
    historyContainer.appendChild(newDivOfHistory);

    // history functionality end
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

      // history functionality start
      const historyContainer = document.getElementById("historyContainer");
      const newDivOfHistory = document.createElement("div");
      let withdrawMoneyButton = document.getElementById("withdrawMoneyButton");
      let withdrawMoneyButtonText = withdrawMoneyButton.innerText;

      newDivOfHistory.innerHTML = `<div
          class="flex justify-between items-center bg-white p-3 mt-5 rounded-2xl"
        >
          <div class="flex items-center justify-between gap-2">
            <img
              class="p-1 rounded-full bg-gray-200 w-12"
              src="./assets/purse1.png"
              alt=""
            />
            <div>
              <p class="text-xl font-semibold">${withdrawMoneyButtonText}</p>
              <p class="text-gray-500">Amount : $${amount}</p>
            </div>
          </div>
          <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>`;
      historyContainer.appendChild(newDivOfHistory);

      // history functionality end
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

      // history functionality start
      const historyContainer = document.getElementById("historyContainer");
      const newDivOfHistory = document.createElement("div");
      let transferButton = document.getElementById("transferButton");
      let transferButtonText = transferButton.innerText;

      newDivOfHistory.innerHTML = `<div
          class="flex justify-between items-center bg-white p-3 mt-5 rounded-2xl"
        >
          <div class="flex items-center justify-between gap-2">
            <img
              class="p-1 rounded-full bg-gray-200 w-12"
              src="./assets/send1.png"
              alt=""
            />
            <div>
              <p class="text-xl font-semibold">${transferButtonText}</p>
              <p class="text-gray-500">Amount : $${amount}</p>
            </div>
          </div>
          <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>`;
      historyContainer.appendChild(newDivOfHistory);

      // history functionality end
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

      // history functionality start
      const historyContainer = document.getElementById("historyContainer");
      const newDivOfHistory = document.createElement("div");
      let payBillButton = document.getElementById("payBillButton");
      let payBillButtonText = payBillButton.innerText;

      newDivOfHistory.innerHTML = `<div
          class="flex justify-between items-center bg-white p-3 mt-5 rounded-2xl"
        >
          <div class="flex items-center justify-between gap-2">
            <img
              class="p-1 rounded-full bg-gray-200 w-12"
              src="./assets/transaction1.png"
              alt=""
            />
            <div>
              <p class="text-xl font-semibold">${payBillButtonText}</p>
              <p class="text-gray-500">Amount : $${amount}</p>
            </div>
          </div>
          <p><i class="fa-solid fa-ellipsis-vertical"></i></p>
        </div>`;
      historyContainer.appendChild(newDivOfHistory);

      // history functionality end
    }
  }
});

// Card functionality

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

const addMoneySection = document.getElementById("addMoneySection");
const cashOutSection = document.getElementById("cashOutSection");
const transferMoneySection = document.getElementById("transferMoneySection");
const getBonusSection = document.getElementById("getBonusSection");
const payBillsection = document.getElementById("payBillsection");
const transactionSection = document.getElementById("transactionSection");

const cards = [card1, card2, card3, card4, card5, card6];
const sections = [
  addMoneySection,
  cashOutSection,
  transferMoneySection,
  getBonusSection,
  payBillsection,
  transactionSection,
];

for (let n = 0; n < cards.length; n++) {
  cards[n].addEventListener("click", () => {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("selected");
      sections[i].classList.add("displayNone");
    }
    cards[n].classList.add("selected");
    sections[n].classList.remove("displayNone");
  });
}
