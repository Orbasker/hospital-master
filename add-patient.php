<?php 
// include 'config.php';
include 'db.php';
if( isset($_POST['nurses']) && isset($_POST['doctors']) && isset($_POST['departments']) && isset($_POST['id']) && isset($_POST['last-name']) && isset($_POST['first-name']))
{
    $add_patient_query =" insert into dbShnkr23stud2.tbl_209_patients (patient_first_name, patient_last_name, patient_id, patient_department, patient_doctor,patient_nurse, patient_estimated_time)
     values('". $_POST['first-name']."', '". $_POST['last-name']."', '". $_POST['id']."', '". $_POST['departments']."', '". $_POST['doctors']."', '". $_POST['nurses']."', '". $_POST['estimated_time']."') ";
    $result = mysqli_query($connection, $add_patient_query);
    echo '<h3>'.$add_patient_query.'</h3>';

}
else
{
    echo '<h3>not all fields are filled</h3>';
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="application/json" id="hospitals-data"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        <title>Add Patient - Hospital Master</title>
    </head>
    <body>
        <navbar-menu>
            <section class="sm:ml-64">
                <add-patient-form></add-patient-form>
            </section>
        </navbar-menu>
        <script src="js/components/add-patient-form.js"> </script>
        <script src="js/components/navbar-menu.js"></script>
        <script src="js/index.js"></script>
        <script src="js/validate_form.js"></script>
    </body>
</html>