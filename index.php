<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Crypto Transactions Visualisation</title>

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 40px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      background: #f4f4f4;
    }

    canvas {
      max-width: 800px;
      margin-bottom: 50px;
    }
  </style>
</head>
<body>

  <h1>Crypto Transaction History</h1>

  <table id="transactionsTable">
    <thead>
      <tr>
        <th>Id</th>
        <th>Type</th>
        <th>Coin</th>
        <th>Amount</th>
        <th>Price (ZAR)</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>

  <h2>Buys vs Sells</h2>
  <canvas id="buySellChart"></canvas>

  <h2>Balance Over Time</h2>
  <canvas id="balanceChart"></canvas>

  <script src="app.js"></script>
</body>
</html>
