<?php
require_once "../db.php"; 

$stmt = $pdo->query("
  SELECT 
    id,
    type,
    coin,
    amount,
    price,
    created_at
  FROM transactions
  ORDER BY created_at ASC
");

$transactions = $stmt->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");
echo json_encode($transactions);
