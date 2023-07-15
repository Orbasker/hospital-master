
<?php 
include 'db.php';
if (isset($_GET['crud']) && $_GET['crud'] == 'select')
{
    if (isset($_POST['id']))
    {
        $id = $_POST['id'];
        $query = "SELECT * FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";
        // echo $query;
        $result = execute_query($query);
        if ($result) {
            echo json_encode($result);
        } else {
            // echo "Error deleting patient: ";
            $result = array(
                'status' => 'Error selecting patient',
                // 'query' => $result
            );
            echo json_encode($result);
        }
    }
    else
    {
        // echo "No id provided";
        $result = array(
            'status' => 'No id provided',
            'query' => $query
        );
        echo json_encode($result);
    }
}
else if (isset($_GET['crud']) && $_GET['crud'] == 'update')
{
    if (isset($_POST['first-name'])) {
        // Extract data from $_POST
        $patient_first_name = $_POST['first-name'];
        $patient_last_name = $_POST['last-name'];
        $patient_id = $_POST['patient_id'];
        $patient_department = $_POST['departments'];
        $patient_doctor = $_POST['doctors'];
        $patient_nurse = $_POST['nurses'];
        $patient_estimated_time = $_POST['estimated_time'];

        // Construct your SQL query and perform the update
        $query = "UPDATE dbShnkr23stud2.tbl_209_patients SET patient_first_name = '".$patient_first_name."', patient_last_name = '".$patient_id."', patient_id = '".$patient_last_name."', patient_department = '".$patient_department."', patient_doctor = '".$patient_doctor."', patient_nurse = '".$patient_nurse."', patient_estimated_time = '".$patient_estimated_time."' WHERE patient_id = '".$patient_id."'";
        $result = execute_query($query);

        if ($result) {
            $response = array(
                'status' => 'Patient updated successfully'
            );
            echo json_encode($response);
        } else {
            $response = array(
                'status' => 'Error updating patient'
            );
            echo json_encode($response);
        }
    } else {
        $response = array(
            'status' => 'No id provided',
        );
        echo json_encode($response);
    }
}
else if (isset($_GET['crud']) && $_GET['crud'] == 'delete')
{
    if (isset($_POST['id']))
    {
        $id = $_POST['id'];
        $query = "DELETE FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";
        $result = execute_query($query);
        if ($result) {
            echo "Patient deleted successfully";
            header("Location:" .base_url);
        } else {
            echo "Error deleting patient: " . $query;
        }
    }
    else
    {
        echo "No id provided";
    }
}
else if (isset($_GET['crud'])&& $_GET['crud'] == 'add')
{
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
    // if( isset($_POST['nurses']) && isset($_POST['doctors']) && isset($_POST['departments']) && isset($_POST['id']) && isset($_POST['last-name']) && isset($_POST['first-name']))
    // {
    //     $add_patient_query =" insert into dbShnkr23stud2.tbl_209_patients (patient_first_name, patient_last_name, patient_id, patient_department, patient_doctor,patient_nurse, patient_estimated_time)
    //      values('". $_POST['first-name']."', '". $_POST['last-name']."', '". $_POST['id']."', '". $_POST['departments']."', '". $_POST['doctors']."', '". $_POST['nurses']."', '". $_POST['estimated_time']."') ";
    //     $result = execute_query($add_patient_query);
    //     if ($result) {
    //         $result = array(
    //             'status' => 'Patient added successfully'
    //         );
    //         echo json_encode($result);
    //     } else {
    //         $result = array(
    //             'status' => 'Error adding patient'
    //         );
    //         echo json_encode($result);
    //     }
    // }
}
else
{
    $result = array(
        'status' => 'No crud provided'
    );
    echo json_encode($result);
}