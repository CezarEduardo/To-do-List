<?php

$hostname = 'localhost';
$database = 'to_do_list';
$username = 'root';

try {
    $pdo =  new PDO("mysql:host=$hostname;dbname=$database", $username, '');
    
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}