
<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);

    include 'db.php';
    
    if (isset($_GET['values']))
    {
        $values = $_GET['values'];
        $query = "SELECT * FROM dbShnkr23stud2.tbl_209_users WHERE user_id IN ($values)";
        $result = execute_query($query);
        if ($result)
        {
            $result = json_encode($result);
        }
        else
        {
            $result = '"status" : "No users found"';
        }
       
    }
    else
    {
        $query = "SELECT * FROM dbShnkr23stud2.tbl_209_users";
        $result = execute_query($query);
        if ($result)
        {
            $result = json_encode($result);
        }
        else
        {
            $result = '"status" : "No users found"';
        }
        
    }
    if (isset($_GET['delete_user']))
    {
        $user_id = $_GET['delete_user'];
        $query = "delete FROM dbShnkr23stud2.tbl_209_users WHERE user_id = $user_id";
        $result = execute_query($query);
        if ($result)
        {
            $result = '"status" : "User deleted successfully"';
        }
        else
        {
            $result ='"status" : "User not deleted"';
        }
        // header("Content-Type: string");
        
    }
    if (isset($_GET['update_user']))
    {
    $user_id = $_GET['update_user'];
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    // Extract data from the JSON object
    $user_first_name = $data['user_first_name'];
    $username = $data['username'];
    $user_last_name = $data['user_last_name'];
    $user_password = $data['user_password'];
    $user_type = $data['user_type'];

    $query = "UPDATE dbShnkr23stud2.tbl_209_users 
        SET user_first_name = '".$user_first_name."', 
            username = '".$username."', 
            user_last_name = '".$user_last_name."', 
            user_password = '".$user_password."', 
            user_type = '".$user_type."'
        WHERE user_id = $user_id";

        echo $query;
    $result = execute_query($query);

    if ($result)
    {
        $response = array(
            'status' => 'User updated successfully'
        );
    }
    else
    {
        $response = array(
            'status' => 'User not updated'
        );
    }
    }

    if (isset($_GET['add_user']))
    {
        $request_body = file_get_contents('php://input');
        // echo $request_body;
        $user = json_decode($request_body, true);
        // var_dump($user);
        $user_first_name = $user['firstName'];
        $username = $user['username'];
        $user_last_name = $user['lastName'];
        $user_password = $user['password'];
        $user_type = $user['userType'];

        $query = "INSERT INTO dbShnkr23stud2.tbl_209_users (user_first_name, username, user_last_name, user_password, user_type) 
        values ('".$user_first_name."', '".$username."', '".$user_last_name."', '".$user_password."', '".$user_type."')";
        // echo $query;
        $result = execute_query($query);
        
        $result = json_encode($result);
    }
    header("Content-Type: application/json");

    echo $result;
?>