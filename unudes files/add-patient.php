<?php 
// include 'php/config.php';

include 'db.php';


//start the session
session_start();
if( isset($_POST['nurses']) && isset($_POST['doctors']) && isset($_POST['departments']) && isset($_POST['id']) && isset($_POST['last-name']) && isset($_POST['first-name']))
{
    $add_patient_query =" insert into dbShnkr23stud2.tbl_209_patients (patient_first_name, patient_last_name, patient_id, patient_department, patient_doctor,patient_nurse, patient_estimated_time)
     values('". $_POST['first-name']."', '". $_POST['last-name']."', '". $_POST['id']."', '". $_POST['departments']."', '". $_POST['doctors']."', '". $_POST['nurses']."', '". $_POST['estimated_time']."') ";
    $response = execute_query($add_patient_query);
    // echo '<h3>'.$add_patient_query.'</h3>';
    if ($response) {
        echo "Patient added successfully";
        header("Location:" .base_url);
    } else {
        echo "Error adding patient: " . $add_patient_query;
    }

}
else
{
    $response = array(
        'status' => 'No id provided',
    );
    echo json_encode($response);
}
?>
