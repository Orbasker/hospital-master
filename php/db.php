<?php 
include 'config.php';
//connect with the database

$connection = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if(mysqli_connect_errno()){
    die("Connection failed: " . mysqli_connect_error());
}
// print("Connection successful");
$message = "Connection successful";

function execute_query($query) {
    global $connection;
    $result = mysqli_query($connection, $query);
    if (!$result) {
        echo $query;
        echo "Problem with the query";
        die("Query Failed: " . mysqli_error($connection));
    }
    
    if (strpos($query, 'SELECT') !== false) {
        $emparray = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $emparray[] = $row;
            }
            $result = json_encode($emparray);
            return $result;
        } else {
            return null;
        }
    } else if (strpos($query, 'INSERT') !== false || strpos($query, 'UPDATE') !== false || strpos($query, 'DELETE') !== false) {
        // echo $query;
        // echo $result;
        // $result = mysqli_insert_id($connection);
        return $result; // Return the result for INSERT queries
    } else {
        echo $query;
        // Return true for non-SELECT and non-INSERT queries
        return true;
    }
}

// if (isset($_POST['logout']) || isset($_SESSION)) {
//     session_destroy();
// }
// mysqli_close($connection);
?>

