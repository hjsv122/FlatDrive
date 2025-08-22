const backendUrl = "https://YOUR_BACKEND_URL_HERE";

document.getElementById("start").onclick = async () => {
  fetch(`${backendUrl}/start`);
};
document.getElementById("stop").onclick = async () => {
  fetch(`${backendUrl}/stop`);
};
document.getElementById("collect").onclick = async () => {
  fetch(`${backendUrl}/collect`);
};
document.getElementById("convert").onclick = async () => {
  fetch(`${backendUrl}/convertFund`);
};
document.getElementById("withdraw").onclick = async () => {
  const amount = prompt("ادخل مبلغ السحب بالـ USDT:");
  fetch(`${backendUrl}/withdraw?amount=${amount}`);
};
