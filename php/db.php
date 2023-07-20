<?php 
include 'config.php';
$connection = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if(mysqli_connect_errno()){
    $response = array(
        'status' => 'error',
        'message' => 'Connection failed',
        'error' => mysqli_connect_error()
    );
    echo json_encode($response);
}function execute_query($query) {
    global $connection;
    try {
        $result = mysqli_query($connection, $query);
    } catch (mysqli_sql_exception $e) {
        $response = array(
            'status' => 'error',
            'message' => 'Query failed',
            'error' => $e->getMessage(),
            'query' => $query
        );
        return json_encode($response);
    }

    if (strpos($query, 'SELECT') !== false) {
        $emparray = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $emparray[] = $row;
            }
            $response = array(
                'status' => 'success',
                'data' => $emparray
            );
            return json_encode($response);
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'No data found',
                'query' => $query
            );
            return json_encode($response);
        }
    } else if (strpos($query, 'INSERT') !== false || strpos($query, 'UPDATE') !== false || strpos($query, 'DELETE') !== false) {
        $response = array(
            'status' => 'success',
            'message' => 'Query successful'
        );
        return json_encode($response);
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Invalid query type',
            'query' => $query
        );
        return json_encode($response);
    }
}
