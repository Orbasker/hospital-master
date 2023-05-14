<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
     <?php 
        $firstname = $_GET['first-name'];
        $lastname = $_GET['last-name'];
        $ID = $_GET['id'];
        $department = $_GET['departments'];
        $doctor = $_GET['doctors'];
        // $date = $_GET['date'];
        // $time = $_GET['time'];
        // $status = $_GET['status'];
        // $conn = mysqli_connect('localhost', 'root', '', 'hospital');
        // $sql = "INSERT INTO patient (firstname, lastname, ID, department, doctor, date, time, status) VALUES ('$firstname', '$lastname', '$ID', '$department', '$doctor', '$date', '$time', '$status')";
        // mysqli_query($conn, $sql);
        // header("Location: index.php");

        echo "<h1>Added:
            $firstname <br>
            $lastname <br>
            $ID <br>
            $department <br>
            $doctor <br>
        </h1>";
     ?>
</body>
</html>