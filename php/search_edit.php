<?php 
include 'db.php';
if (isset($_GET['crud']) && $_GET['crud'] == 'select')
{
    if (isset($_POST['id']))
    {
        $id = $_POST['id'];
        $query = "SELECT * FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";
        $result = execute_query($query);
        $result = json_decode($result, true);
        if ($result['status'] == 'success')
        {
            $response = array(
                'status' => 'success',
                'message' => 'Patient selected successfully',
                'data' => $result['data']
            );
        }
        if ($result['status'] !== 'error') {
            $response = array(
                'status' => 'success',
                'message' => 'Patient selected successfully',
                'data' => $result
            );
        } else {
            $response = array(
                'status' => 'Error selecting patient',
                'query' => $query,
                'data' => $result
            );
        }
    }
    else
    {
        $response = array(
            'status' => 'No id provided',
            'query' => $query
        );
    }
    echo json_encode($response);
}
else if (isset($_GET['crud']) && $_GET['crud'] == 'update')
{
    if (isset($_POST['first-name'])) {
        $patient_first_name = $_POST['first-name'];
        $patient_last_name = $_POST['last-name'];
        $patient_id = $_POST['patient_id'];
        $patient_department = $_POST['departments'];
        $patient_doctor = $_POST['doctors'];
        $patient_nurse = $_POST['nurses'];
        $patient_estimated_time = $_POST['estimated_time'];
        $query = "UPDATE dbShnkr23stud2.tbl_209_patients SET patient_first_name = '".$patient_first_name."', patient_last_name = '".$patient_last_name."', patient_id = '".$patient_id."', patient_department = '".$patient_department."', patient_doctor = '".$patient_doctor."', patient_nurse = '".$patient_nurse."', patient_estimated_time = '".$patient_estimated_time."' WHERE patient_id = '".$patient_id."'";
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
        $result = json_decode($result, true);
        if ($result['status'] != 'error') {
           $response = array(
               'status' => 'Patient deleted successfully'
           );
        } else {
            $response = array(
                'status' => 'Error deleting patient',
                'query' => $query,
                'result' => $result
            );
        }
    }
    else
    {
        $response = array(
            'status' => 'No id provided',
        );
    }
    echo json_encode($response);
}
else if (isset($_GET['crud']) && $_GET['crud'] == 'add') {
    if (isset($_POST['nurses']) && isset($_POST['doctors']) && isset($_POST['departments']) && isset($_POST['id']) && isset($_POST['last-name']) && isset($_POST['first-name'])) {
        $add_patient_query = "INSERT INTO dbShnkr23stud2.tbl_209_patients (patient_first_name, patient_last_name, patient_id, patient_department, patient_doctor, patient_nurse, patient_estimated_time) " .
            "VALUES('" . $_POST['first-name'] . "', '" . $_POST['last-name'] . "', '" . $_POST['id'] . "', '" . $_POST['departments'] . "', '" . $_POST['doctors'] . "', '" . $_POST['nurses'] . "', '" . $_POST['estimated_time'] . "') ";
        $result = execute_query($add_patient_query);
        $result = json_decode($result, true);
        if ($result['status'] !== 'error') {
            $response = array(
                'status' => 'Patient added successfully',
                'query' => $add_patient_query,
                'result' => $result
            );
            echo json_encode($response);
        } elseif ($result['status'] === 'error') {
            $response = array(
                'status' => 'Error adding patient',
                'query' => $add_patient_query,
                'result' => $result
            );
            echo json_encode($response);
        } else {
            $response = array(
                'status' => 'Error adding patient',
                'query' => $add_patient_query,
                'result' => $result
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
elseif (isset($_GET['crud']) && $_GET['crud'] == "all")
{
    $query = "SELECT * FROM dbShnkr23stud2.tbl_209_patients";
    $result = execute_query($query);
    $result = json_decode($result, true);
    if ($result['status'] !== 'error') {
        $response = array(
            'status' => 'success',
            'message' => 'Patients selected successfully',
            'data' => $result['data']
        );
    } else {
        $response = array(
            'status' => 'Error selecting patients',
            'query' => $query,
            'data' => $result
        );
    }
    echo json_encode($response);
}
else
{
    $result = array(
        'status' => 'No crud provided'
    );
    echo json_encode($result);
}