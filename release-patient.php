<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script type="application/json" id="hospitals-data"></script>
        <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        <title>Release Patient - Hospital Master</title>
    </head>
    <body>
        <navbar-menu>
            <section class="sm:ml-64">
                <release-patient-form></release-patient-form>
            </section>
        </navbar-menu>
        <script src="../js/components/release-patient-form.js"> </script>
        <script src="../js/components/navbar-menu.js"></script>
        <script src="js/validate_user.js"></script>
        <script src="js/delete_patient.js"></script>
    </body>
</html>