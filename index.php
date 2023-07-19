<?php 
include 'http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=check_session';
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@600&display=swap" rel="stylesheet">
    <!--bootstrap-->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
      integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
      integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
      integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
    <!--bootstrap-->
    <link rel="stylesheet" href="https://cdn.tailwindcss.com">
    </link>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <link rel="stylesheet" href="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/css/style.css">
    <link rel="preload" href="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js" as="script">
    <title>Hospital Master</title>
    <link rel="icon" type="image/png" href="assets/svg/favicon-16x16.png">
    </head>
  <body>
    <navbar-menu></navbar-menu>
    <main>
      <section id="container" class="p-9 sm:ml-64 m-19">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
            <div class="bg-gray-200 p-4">
              <h1 class="text-center" style="font-size: 20px;">Doctor's On Call</h1>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="max-h-200 w-full text-sm text-center text-gray-500">
                  <thead class="text-s text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3" style="font-size: 14px;">Doctor's Name</th>
                      <th scope="col" class="px-6 py-3" style="font-size: 14px;">Department</th>
                      <th scope="col" class="px-6 py-3" style="font-size: 14px;">Phone number</th>
                    </tr>
                  </thead>
                  <tbody id="doctorsContainer"></tbody>
                </table>
              </div>
            </div>
            <div class="bg-gray-200 p-4">
              <h1 class="text-center" style="font-size: 20px;">Department Load In Real Time</h1>
              <div class="bg-gray-200 flex flex-col md:flex-row">
                <div class="md:w-2/3">
                  <div id="loadContainer" class=" overflow-y-auto relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table id="loadTable" class="max-h-200 w-full text-sm text-center text-gray-500">
                      <thead class="text-xs md:text-sm text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Department</th>
                          <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Occupancy Level</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div class="md:w-1/3 flex justify-center mt-4 md:mt-0">
                  <div class="m-4">
                    <img src="assets/svg/file1.svg" class="w-24 h-20 md:w-32 md:h-28" alt="Department Icon">
                    <h2 class="text-center text-lg md:text-xl">2824</h2>
                    <h2 class="text-center text-lg md:text-xl">Occupied Beds</h2>
                    <h3 class="text-center text-sm md:text-base mt-2 md:mt-4 text-red-600" id="kanit">176 Available Beds
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-200 p-4">
              <h1 class="text-center" style="font-size: 20px;">System Recommendations</h1>
              <div id="logsContainer" class="container mx-auto p-4 h-80 overflow-y-auto">
              </div>
            </div>
            <div class="bg-gray-200 p-4">
              <h1 class="text-center" style="font-size: 20px;">General Bed Occupancy</h1>
              <div class="mb-1 text-base font-medium">Emergency</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-black h-2.5 rounded-full" style="width: 87%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-pink-300">Children</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-pink-300 h-2.5 rounded-full" style="width: 92%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-violet-400">Radiology</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-violet-400 h-2.5 rounded-full" style="width: 37%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-red-500">Cardiology</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-red-500 h-2.5 rounded-full" style="width: 27%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-yellow-400">Neurology</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 12%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-blue-400">Maternity</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                <div class="bg-blue-400 h-2.5 rounded-full" style="width:55%"></div>
              </div>
              <div class="mb-1 text-base font-medium text-emerald-500">Otolaryngology</div>
              <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-emerald-500 h-2.5 rounded-full" style="width: 40%"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer></footer>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/components/navbar-menu.js"></script>

    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/index.js"></script>
    <script src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/js/validate_user.js"></script>
  </body>
</html>