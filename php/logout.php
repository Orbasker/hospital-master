<?php
    include 'config.php';
    session_start();
    // header("Location: " . base_url . "index.php");
    $_SESSION = array();
    $result = session_destroy();

// Destroy the session
if ($result) {
    $response = array(
        'status' => 'inactive',
        'message' => 'Session destroyed'
    );
    header("Location: " .base_url."index.php");
} else {
    $response = array(
        'status' => 'active',
        'message' => 'Session not destroyed'
    );
}
?>