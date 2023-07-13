<?php
session_start();

if (isset($_SESSION["user_id"]) && !empty($_SESSION["user_id"])) {
    $response = array(
        'status' => 'active',
        'user_id' => $_SESSION['user_id'],
        'user_name' => $_SESSION['user_name'],
        'user_type' => $_SESSION['user_type'],
        'message' => 'Session active'
    );
} else {
    $response = array(
        'status' => 'inactive',
        'message' => 'No active session'
    );
}

echo json_encode($response);
?>
