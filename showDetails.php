<?php 
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/check_session.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/navbar-menu.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Patient Details - Hospital Master</title>
  </head>
  <body>
    <navbar-menu>
      <section class="p-4 sm:ml-64 m-16">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Patient Details</h5>
        <div class="space-y-4 my-4">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400" >Patient ID: <span class="font-normal text-gray-900 dark:text-white" id="patient-id" ></span></p>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400" >Patient Name: <span class="font-normal text-gray-900 dark:text-white patient-name" id="patient-name" ></span></p>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400" >Doctor: <span class="font-normal text-gray-900 dark:text-white doctor" id="doctor" ></span></p>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400" >Status: <span class="font-normal text-gray-900 dark:text-white status" id="status" ></span></p>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400" >Bed Number: <span class="font-normal text-gray-900 dark:text-white bed-number" id="bed-number"></span></p>
      </div>
        <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose Bed</button>
    </div>
        <message-modal class="p-4"></message-modal>
      </section>
    </navbar-menu>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/showDetails.js"></script>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js"></script>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/message-modal.js"></script>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/custom_message.js"></script>
    <!-- <script src="js/js/index.js"></script> -->
  </body>
</html>


