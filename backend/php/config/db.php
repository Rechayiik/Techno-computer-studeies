<?php
$host = 'localhost';
$dbname = 'cms';
$username = 'root';
$passw = '';

try {
    $conn = new PDO("mysql:host = $host; dbname = $dbname", $username, $passw);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (PDOException $e){
    die("Database connection failed!: " . $e->getMessage());
}
?>