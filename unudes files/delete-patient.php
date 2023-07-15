<?php
    include 'db.php';
    if (isset($_POST['id']))
    {
        $id = $_POST['id'];
        $query = "DELETE FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";
        $result = execute_query($query);
        if ($result) {
            echo "Patient deleted successfully";
            header("Location:" .base_url);
        } else {
            echo "Error deleting patient: " . mysqli_error($connection);
        }
    }
    else
    {
        echo "No id provided";
    }