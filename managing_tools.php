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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet">
    <title>Managing Tools - user administration</title>
    <link rel="icon" type="image/png" href="assets/svg/traffic-light-16.png">
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/navbar-menu.js"></script>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/managing-tool.js"></script>
  </head>
  <body>
    <navbar-menu>
      <div class="container sm:ml-64">
      <managing-tool></managing-tool>
      </div>
      </navbar-menu>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/managing_tools.js"></script>
        <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js"></script>
  </body>
</html>

