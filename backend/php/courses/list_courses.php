<?php
header('Content-Type: application/json');
require_once('../config/db.php');

stmt = $conn->query("SELECT * FROM courses");
$courses = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($courses)
?>