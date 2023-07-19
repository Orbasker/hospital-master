<?php
    if (isset($_GET["action"]) && $_GET["action"] == 'login')
    {
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
                session_start();
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
}
if (isset($_GET["action"]) && $_GET["action"] == 'logout')
{
    include 'config.php';
    session_start();
    $_SESSION = array();
    $result = session_destroy();
    echo json_encode($result);
if ($result) {
    $response = array(
        'status' => 'inactive',
        'message' => 'Session destroyed'
    );
    echo json_encode($response);
    header("Location: http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/index.php");
    // header("Location: " .base_url."index.php");
} else {
    $response = array(
        'status' => 'active',
        'message' => 'Session not destroyed'
    );
    echo json_encode($response);
}
}
?>