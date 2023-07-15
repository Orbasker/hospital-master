<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // var_dump($_POST);
    // $request_data = file_get_contents('php://input');
    // var_dump($request_data);
    if (empty($_POST['user_name']) || empty($_POST['password'])) {
        $response = array(
            'status' => 'inactive',
            'message' => 'Please fill in the required fields'
        );
    } else {
        $get_user_query = "SELECT * FROM dbShnkr23stud2.tbl_209_users WHERE username = ".$_POST['user_name']." AND user_password = ".$_POST['password']."";
        // var_dump($get_user_query);
        $result = execute_query($get_user_query);
        // var_dump($result);
        if ($result) {
            $row = json_decode($result, true);
            $result = $row[0];
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
            // header("Location: " . base_url . "index.html");
        } else {
            $response = array(
                'status' => 'inactive',
                'message' => 'Invalid Username or Password!'
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
?>
