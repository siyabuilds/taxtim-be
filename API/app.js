fetch("api/get_transactions.php")
  .then(res => res.json())
  .then(data => {
    renderTable(data);
    renderBuySellChart(data);
    renderBalanceChart(data);
  });


function renderTable(data) {
  const tbody = document.querySelector("#transactionsTable tbody");

  data.forEach(tx => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${tx.created_at}</td>
      <td>${tx.type}</td>
      <td>${tx.coin}</td>
      <td>${tx.amount}</td>
      <td>R ${tx.price ?? "-"}</td>
    `;

    tbody.appendChild(row);
  });
}

function renderBuySellChart(data) {
  let buys = 0;
  let sells = 0;

  data.forEach(tx => {
    if (tx.type === "buy") buys += parseFloat(tx.amount);
    if (tx.type === "sell") sells += parseFloat(tx.amount);
  });

  new Chart(document.getElementById("buySellChart"), {
    type: "bar",
    data: {
      labels: ["Buys", "Sells"],
      datasets: [{
        label: "Total Amount",
        data: [buys, sells]
      }]
    }
  });
}



function renderBalanceChart(data) {
  let balance = 0;
  const labels = [];
  const balances = [];

  data.forEach(tx => {
    if (tx.type === "buy") balance += parseFloat(tx.amount);
    if (tx.type === "sell") balance -= parseFloat(tx.amount);

    labels.push(tx.created_at);
    balances.push(balance);
  });

  new Chart(document.getElementById("balanceChart"), {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Crypto Balance",
        data: balances,
        tension: 0.3
      }]
    }
  });
}
