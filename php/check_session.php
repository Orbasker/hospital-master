<?php
session_start();
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/config.php';
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
    header("Location:http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php");
    exit();
}
?>
