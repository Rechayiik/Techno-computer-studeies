<?php
header('Content-Type: application/json');
require_once('../config/db.php');

$data = json_decode(file_get_contents('php://input'), true);
$title = $data['title'];
$description = $data['description'];
$instructor_id = $data['instructor_id'];

$stmt = $conn->prepare("INSERT INTO courses(title, description, instructor_id) VALUES(:title, :description, :instructor_id)");
if($stmt->execute(['title' => $title, 'description' => $description, 'indtructor_id' => $instructor_id])) {
    echo json_encode(['success' => true, 'message' => 'Course created Successfully']);
}else {
    echo json_encode(['success' => false, 'message' => 'Course creation failed']);
}

?>