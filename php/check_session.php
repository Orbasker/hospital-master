<?php
session_start();
include 'config.php';
if (isset($_SESSION["user_id"]) && !empty($_SESSION["user_id"])) {
    if (isset($_GET["get"]) && $_GET["get"] == "session" )
    {
    $response = array(
        'status' => 'active',
        'user_id' => $_SESSION['user_id'],
        'user_name' => $_SESSION['user_name'],
        'user_type' => $_SESSION['user_type'],
        'message' => 'Session active'
    );
        echo json_encode($response);
    }
} else {
    header("Location: " .base_url."login.php");
    exit();
}
?>
