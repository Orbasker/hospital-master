<?php 
include 'php/check_session.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
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
        <script src="js/components/add-patient-form.js"> </script>
        <script src="js/components/navbar-menu.js"></script>
        <script src="js/validate_form.js"></script>
        <script src="js/validate_user.js"></script>
        <script src="js/add_patient.js"></script>
        <script src="js/components/message-modal.js"></script>
        <script src="js/custom_message.js"></script>
    </body>
</html>