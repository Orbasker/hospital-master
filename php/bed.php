<?php
include 'db.php';
if (isset($_GET['action']) && $_GET['action'] == 'select') {
    if (isset($_POST['id'])) {
        $id = $_POST['id'];
        $query_patient = "SELECT * FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";
        $query_bed = "SELECT * FROM dbShnkr23stud2.tbl_209_beds WHERE patient_id = '$id'";

        $result_patient = execute_query($query_patient);
        $result_patient = json_decode($result_patient, true);

        if ($result_patient['status'] == 'success') {
            $result_bed = execute_query($query_bed);
            $result_bed = json_decode($result_bed, true);
            $result = array_merge($result_patient, $result_bed);
            $response = array(
                'status' => 'success',
                'message' => 'Patient selected successfully',
                'data' => $result
            );
        } else {
            $response = array(
                'status' => 'Error selecting patient',
                'query' => $query_patient,
                'data' => $result_patient
            );
        }
    } elseif (isset($_POST['bed_number'])) {
        $bed_number = $_POST['bed_number'];
        $query = "SELECT * FROM dbShnkr23stud2.tbl_209_beds WHERE bed_id = '$bed_number'";
        $result = execute_query($query);
        $result = json_decode($result, true);
        $patient_id = $result['data'][0]['patient_id'];
        if ($result['status'] == 'success') {
            $patient_query = "SELECT * FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id ='".$patient_id."'";
            $patient_result = execute_query($patient_query);
            $patient_result = json_decode($patient_result, true);

            if ($patient_result['status'] == 'success') {
                $result = array_merge($result, $patient_result);
                $response = array(
                    'status' => 'success',
                    'message' => 'Patient selected successfully',
                    'data' => $result
                );
            } else {
                $response = array(
                    'status' => 'Error selecting patient',
                    'query' => $patient_query,
                    'data' => $patient_result
                );
            }
        } else {
            $response = array(
                'status' => 'Error finding bed_number',
                'query' => $query,
                'data' => $result
            );
        }
    } else {
        $response = array(
            'status' => 'No id provided',
            'query' => 'no query given'
        );
    }
    echo json_encode($response);
}
    elseif (isset($_GET['action']) && $_GET['action'] == 'add')
    {
        if (isset($_POST['id']))
        {
            $id = $_POST['id'];
            $department = $_POST['departments'];
            $query = "SELECT * FROM dbShnkr23stud2.tbl_209_patients WHERE patient_id = '$id'";

            $result = execute_query($query);
            $result = json_decode($result, true);
            if ($result['status'] == 'success')
            {
                $bed_query = "INSERT INTO dbShnkr23stud2.tbl_209_beds (patient_id,bed_department) VALUES ('$id','$department')";
                $bed_result = execute_query($bed_query);
                $bed_result = json_decode($bed_result, true);
                if ($bed_result['status'] == 'success')
                {
                    $bed_id_query = "SELECT bed_id FROM dbShnkr23stud2.tbl_209_beds WHERE patient_id = '$id'";
                    $bed_id_result = execute_query($bed_id_query);
                    $bed_id_result = json_decode($bed_id_result, true);
                    if ($bed_id_result['status'] == 'success')
                    {
                        $bed_id = $bed_id_result['data'][0]['bed_id'];
                        $bed_result['bed_id'] = $bed_id;
                    }
                    else
                    {
                        $bed_result['bed_id'] = 'error';
                    }
                    $response = array(
                        'status' => 'success',
                        'message' => 'bed assign successfully',
                        'bed_data' => $bed_result,
                        'data' => $result['data']
                    );
                }
                else
                {
                    $response = array(
                        'status' => 'Error assign bed',
                        'query' => $query,
                        'data' => $result
                    );
                }
            }
            else
            {
                $response = array(
                    'status' => 'Error selecting patient',
                    'query' => $query,
                    'data' => $result
                );
            }
        }
        echo json_encode($response);
    }
    elseif (isset($_GET['action']) && $_GET['action'] == 'update')
    {

    }
    elseif (isset($_GET['action']) && $_GET['action'] == 'delete')
    {

    }
    else
    {
        $response = array(
            'status' => 'error',
            'message' => 'No action provided'
        );
        echo json_encode($response);
    }