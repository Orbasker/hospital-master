<?php 
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/check_session.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="application/json" id="hospitals-data"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        <title>Edit Patient - Hospital Master</title>
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