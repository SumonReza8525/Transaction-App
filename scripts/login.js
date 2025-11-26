document.getElementById("loginButton").addEventListener("click", () => {
  const phoneNumberInput = document.getElementById("phoneNumber");
  const phoneNumber = phoneNumberInput.value;

  const pinNumberInput = document.getElementById("pinNumber");
  const pinNumber = pinNumberInput.value;

  if (phoneNumber !== "01728903454" || Number(pinNumber) !== 12901) {
    alert("Incorrect Identity");
  } else {
    window.location.href = "./home.html";
  }
});
