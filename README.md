# Transactions API Documentation (Complete)

---

## 1. Get All Transactions

- **URL:** `/api/transactions`
- **Method:** `GET`
- **Description:** Retrieve all stored transactions.

**Example curl:**

```bash
curl http://localhost:8000/api/transactions
```

---

## 2. Add Transactions

- **URL:** `/api/transactions`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:** JSON array of transaction objects with the following fields:

| Field          | Type   | Description                                           |
| -------------- | ------ | ----------------------------------------------------- |
| `date`         | string | Transaction date (YYYY-MM-DD)                         |
| `type`         | string | Transaction type (`BUY`, `SELL`, `TRADE`, `TRANSFER`) |
| `sellCoin`     | string | Coin sold or currency paid                            |
| `sellAmount`   | float  | Amount sold or currency paid                          |
| `buyCoin`      | string | Coin bought or currency received                      |
| `buyAmount`    | float  | Amount bought or currency received                    |
| `pricePerCoin` | float  | Price per unit of coin (in `sellCoin` currency)       |

**Example curl:**

```bash
curl -X POST http://localhost:8000/api/transactions \
-H "Content-Type: application/json" \
-d '[
  {
    "date": "2024-11-01",
    "type": "BUY",
    "sellCoin": "ZAR",
    "sellAmount": 8000,
    "buyCoin": "BTC",
    "buyAmount": 0.1,
    "pricePerCoin": 80000
  },
  {
    "date": "2025-05-05",
    "type": "TRADE",
    "sellCoin": "BTC",
    "sellAmount": 0.133,
    "buyCoin": "ETH",
    "buyAmount": 10,
    "pricePerCoin": 2000
  }
]'
```

---

## 3. Calculate FIFO and Capital Gains

- **URL:** `/api/transactions/calculate`
- **Method:** `GET`
- **Description:** Runs FIFO calculations on transactions and returns balances, calculations, capital gains, and base cost snapshots.

**Example curl:**

```bash
curl http://localhost:8000/api/transactions/calculate
```

---

## 4. Delete All Transactions

- **URL:** `/api/transactions`
- **Method:** `DELETE`
- **Description:** Deletes all stored transactions.

**Example curl:**

```bash
curl -X DELETE http://localhost:8000/api/transactions
```

---

## 5. Get Tax Year Report

- **URL:** `/api/reports/tax-year/{year}`
- **Method:** `GET`
- **Description:** Retrieves capital gains report for a specific tax year. Replace `{year}` with the desired tax year (e.g., 2025).

**Example curl:**

```bash
curl http://localhost:8000/api/reports/tax-year/2025
```
