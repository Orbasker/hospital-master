<?php
if (isset($_GET["action"]) && $_GET["action"] == 'login') {
    include 'db.php';
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (empty($_POST['user_name']) || empty($_POST['password'])) {
            $response = array(
                'status' => 'inactive',
                'message' => 'Please fill in the required fields'
            );
        } else {
            $get_user_query = "SELECT * FROM dbShnkr23stud2.tbl_209_users WHERE username = " . '"' . $_POST['user_name'] . '"' . " AND user_password = '" . $_POST['password'] . "'";
            $result = execute_query($get_user_query);
            $result = json_decode($result, true);
            if (isset($result['status']) && $result['status'] === 'success') {
                if (is_array($result['data'])) {
                    $result = $result['data'][0];
                }

                $_SESSION["user_id"] = $result['user_id'];
                $_SESSION["user_name"] = $result['username'];
                $_SESSION["user_type"] = $result['user_type'];
                $response = array(
                    'status' => 'active',
                    'user_id' => $_SESSION['user_id'],
                    'user_name' => $_SESSION['user_name'],
                    'user_type' => $_SESSION['user_type'],
                    'message' => 'authentication complete'
                );
            } else {
                $response = array(
                    'status' => 'inactive',
                    'message' => 'Invalid Username or Password!',
                    'result' => $result,
                    'query' => $get_user_query
                );
            }
        }
    } else {
        $response = array(
            'status' => 'inactive',
            'message' => 'Invalid Request'
        );
    }
    echo json_encode($response);
    exit;
}
if (isset($_GET["action"]) && $_GET["action"] == 'logout') {
    session_start();
    if (isset($_SESSION['user_id']) && isset($_SESSION['user_name']) && isset($_SESSION['user_type'])) {
        unset($_SESSION["user_id"]);
        unset($_SESSION["user_name"]);
        unset($_SESSION["user_type"]);
        session_destroy();
        $response = array(
            'status' => 'inactive',
            'message' => 'Session destroyed'
        );
    } else {
        $response = array(
            'status' => 'active',
            'message' => 'Session not destroyed'
        );
    }
    echo json_encode($response);
    exit;
}
if (isset($_GET["action"]) && $_GET["action"] == 'check_session') {
session_start();
    if (isset($_SESSION["user_id"]) && isset($_SESSION["user_name"]) && isset($_SESSION["user_type"])) {
        $response = array(
            'status' => 'active',
            'user_id' => $_SESSION['user_id'],
            'user_name' => $_SESSION['user_name'],
            'user_type' => $_SESSION['user_type'],
            'message' => 'Session is active'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'status' => 'inactive',
            'message' => 'Session is inactive'
        );
        echo json_encode($response);
    }
}
?>
