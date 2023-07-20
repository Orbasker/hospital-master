<?php 
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=check_session';
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="application/json" id="hospitals-data"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        <title>Edit Patient - Hospital Master</title>
        <link rel="icon" type="image/png" href="assets/svg/traffic-light-16.png">
    </head>
    <body>
        <navbar-menu>
            <section class="sm:ml-64 relative m-16">
                <edit-patient-form></edit-patient-form>
                <message-modal class="p-4"></message-modal>
            </section>
        </navbar-menu>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/edit-patient-form.js"> </script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/navbar-menu.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/message-modal.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/edit_patient.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_form.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/custom_message.js"></script>
    </body>
</html>