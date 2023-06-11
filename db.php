<?php 
include 'config.php';
//connect with the database

$connection = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if(mysqli_connect_errno()){
    die("Connection failed: " . mysqli_connect_error());
}
// print("Connection successful");
$message = "Connection successful";

// if (isset($_POST['logout']) || isset($_SESSION)) {
//     session_destroy();
// }
// mysqli_close($connection);
?>

