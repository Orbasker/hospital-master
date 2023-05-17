<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Add Patient php - Hospital Master</title>
    </head>
    <body>
         <?php 
            $firstname = $_GET['first-name'];
            $lastname = $_GET['last-name'];
            $ID = $_GET['id'];
            $department = $_GET['departments'];
            $doctor = $_GET['doctors'];

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