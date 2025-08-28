console.log('hello')

document.querySelectorAll(".add-heart-btn").forEach(btn => { btn.addEventListener("click",(e) => {
   e.preventDefault()
  const addheart = 1;
  const availableHeart = parseInt(document.getElementById('HeartCount').innerText);
  const totalnewavailableHeart = addheart + availableHeart;
  document.getElementById("HeartCount").innerText = totalnewavailableHeart;
});
});



document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;
    const coinEl = document.getElementById("coinCount");
    let coins = parseInt(coinEl.innerText);

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinEl.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const historyEl = document.getElementById("callHistory");
    const entry = document.createElement("div");
    entry.className = "flex justify-between items-center p-2 bg-white rounded shadow mt-2";
    entry.innerHTML = `
      <div>
        <p class="font-semibold">${serviceName}</p>
        <p class="text-sm text-gray-600">${serviceNumber}</p>
      </div>
      <span class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</span>
    `;
    historyEl.appendChild(entry);
  });
});

document.getElementById("clearHistoryBin").addEventListener("click", () => {
  document.getElementById("callHistory").innerHTML = "";
});


// Handle Copy buttons
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const number = btn.dataset.number;

    navigator.clipboard.writeText(number).then(() => {
      alert(`Hotline number ${number} copied to clipboard!`);
      const copyEl = document.getElementById("copyCount");
      let count = parseInt(copyEl.innerText) || 0; 
      count += 1;

      document.getElementById("copyCount").innerText = `${count} Copy`;
    })
  });
});



