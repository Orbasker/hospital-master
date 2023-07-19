<?php 
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=check_session';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/message-modal.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/add-patient-form.js"> </script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/navbar-menu.js"></script>
        <title>Add Patient - Hospital Master</title>
    </head>
    <body>
        <navbar-menu>
            <section class="sm:ml-64">
                <add-patient-form>
                    <message-modal class="p-4"></message-modal>
                </add-patient-form>
            </section>
        </navbar-menu>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/custom_message.js"></script>
        
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_form.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/add_patient.js"></script>
    </body>
</html>