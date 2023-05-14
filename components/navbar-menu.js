class NavbarMenu extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <script src="https://cdn.tailwindcss.com"></script>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
              <a href="/index.html" class="flex ml-2 md:mr-24">
                <img src="../svg/logo1.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
              </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ml-3">
                  <div>
                    <img class="w-16 h-16 rounded-full" src="../svg/hadsa.svg" alt="hadasa">
                    </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div class="px-4 py-3" role="none">
                      <p class="text-sm text-gray-900 dark:text-white" role="none">
                        Neil Sims
                      </p>
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul class="py-1" role="none">
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>
      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
         <div class="h-full m-4 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
               <li>
                  <a href="/index.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                  </a>
               </li>
               <li>
                  <a href="/add-patient.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM23,16a1,1,0,0,1-1,1H19v3a1,1,0,0,1-2,0V17H14a1,1,0,0,1,0-2h3V12a1,1,0,0,1,2,0v3h3A1,1,0,0,1,23,16Z"/></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Add Patient</span>
                  </a>
               </li>
               <li>
                  <a href="/delete-patient.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1,20a1,1,0,0,0,1,1h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5Zm12.707,9.707L20.414,17l2.293,2.293a1,1,0,1,1-1.414,1.414L19,18.414l-2.293,2.293a1,1,0,0,1-1.414-1.414L17.586,17l-2.293-2.293a1,1,0,0,1,1.414-1.414L19,15.586l2.293-2.293a1,1,0,0,1,1.414,1.414Z"/></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Realease patient</span>
                     <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                  </a>
               </li>
               <li>
                  <a href="/edit-patient.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"/></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Edit patient</span>
                  </a>
               </li>
               <li>
                  <a href="list-view.html" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg fill="#000000" width="25px" height="25px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Zm0-82.5a10,10,0,0,0-10,10V140a10,10,0,0,0,20,0V92.5A10,10,0,0,0,100,82.5ZM100,50A10,10,0,0,0,90,60v5a10,10,0,0,0,20,0V60A10,10,0,0,0,100,50Z"/></svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Department information</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg fill="#000000" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 340.279 340.279" xml:space="preserve">
                    <g>
                    <path d="M329.922,196.825l-19.937-11.511c0.538-4.986,0.821-10.048,0.821-15.175s-0.283-10.189-0.821-15.175l19.937-11.511
                    c4.261-2.46,7.308-6.433,8.582-11.187c1.272-4.754,0.618-9.719-1.842-13.979l-38.354-66.436c-3.283-5.685-9.402-9.216-15.974-9.216
                    c-3.216,0-6.393,0.855-9.192,2.472l-19.994,11.543c-8.126-5.959-16.912-11.068-26.227-15.195V18.423
                    C226.92,8.265,218.653,0,208.497,0h-76.715c-10.158,0-18.422,8.265-18.422,18.423v23.033c-9.316,4.127-18.102,9.235-26.229,15.196
                    L67.137,45.108c-2.799-1.616-5.977-2.471-9.191-2.471c-6.572,0-12.691,3.53-15.975,9.215L3.618,118.288
                    c-2.461,4.26-3.115,9.226-1.842,13.979c1.274,4.754,4.321,8.727,8.582,11.187l19.937,11.511
                    c-0.538,4.986-0.821,10.048-0.821,15.175s0.283,10.188,0.821,15.175l-19.937,11.511c-4.261,2.46-7.308,6.433-8.582,11.187
                    c-1.273,4.754-0.619,9.72,1.842,13.979l38.353,66.436c3.283,5.685,9.402,9.215,15.975,9.215c3.215,0,6.393-0.854,9.191-2.471
                    l19.994-11.543c8.127,5.96,16.913,11.069,26.229,15.196v23.034c0,4.92,1.916,9.546,5.396,13.025
                    c3.481,3.479,8.106,5.396,13.025,5.396h76.715c10.156,0,18.423-8.265,18.423-18.422v-23.035
                    c9.315-4.126,18.102-9.235,26.227-15.195l19.994,11.543c2.799,1.617,5.977,2.471,9.192,2.471c6.571,0,12.69-3.53,15.974-9.215
                    l38.354-66.436c2.46-4.26,3.114-9.226,1.842-13.979C337.229,203.258,334.182,199.285,329.922,196.825z M170.139,270.14
                    c-55.229,0-100-44.773-100-100s44.771-100,100-100c55.23,0,100,44.773,100,100S225.37,270.14,170.139,270.14z"/>
                    <path d="M239.083,117.796c-0.591-0.15-1.218,0.022-1.649,0.454l-18.058,18.114c-1.083-0.44-3.814-1.939-8.868-6.976
                    c-5.053-5.037-6.56-7.763-7.003-8.845l18.056-18.113c0.431-0.432,0.602-1.06,0.45-1.65c-0.152-0.591-0.605-1.058-1.191-1.228
                    c-2.604-0.756-5.302-1.139-8.02-1.139c-7.674,0-14.885,2.993-20.302,8.427c-5.408,5.425-8.38,12.63-8.37,20.289
                    c0.006,3.947,0.81,7.768,2.324,11.288l-21.887,21.888l-22.416-22.416c-0.02-0.038-0.034-0.079-0.056-0.117l-10.251-17.567
                    c-0.177-0.303-0.417-0.563-0.706-0.764l-17.285-11.994c-0.955-0.663-2.249-0.546-3.07,0.275l-7.703,7.702
                    c-0.822,0.822-0.938,2.115-0.275,3.071l11.993,17.285c0.2,0.288,0.461,0.529,0.764,0.706l17.571,10.248
                    c0.034,0.02,0.071,0.026,0.105,0.044l22.428,22.427l-16.868,16.868c-3.532-1.518-7.367-2.322-11.325-2.322
                    c-7.676,0-14.887,2.993-20.305,8.428c-7.398,7.418-10.158,18.279-7.202,28.343c0.172,0.585,0.64,1.037,1.232,1.187
                    c0.591,0.151,1.218-0.021,1.649-0.455l18.056-18.112c1.083,0.439,3.814,1.939,8.868,6.975c5.053,5.038,6.559,7.763,7,8.845
                    l-18.056,18.114c-0.431,0.432-0.602,1.06-0.449,1.65c0.152,0.591,0.605,1.058,1.191,1.228c2.603,0.755,5.301,1.138,8.018,1.138
                    c7.675,0,14.886-2.993,20.305-8.428c5.408-5.424,8.379-12.629,8.368-20.288c-0.006-3.947-0.81-7.769-2.324-11.288l16.863-16.863
                    l7.146,7.145l-4.872,4.872c-1.062,1.06-1.647,2.468-1.647,3.966c-0.001,1.499,0.584,2.908,1.645,3.967l34.413,34.412
                    c1.057,1.06,2.464,1.643,3.963,1.643c1.498,0,2.909-0.583,3.97-1.643l18.641-18.645c1.06-1.059,1.644-2.468,1.645-3.967
                    c0-1.499-0.584-2.907-1.644-3.966L199.535,177.6c-1.059-1.059-2.467-1.643-3.966-1.643c-1.499,0-2.908,0.584-3.967,1.645
                    l-4.869,4.869l-7.146-7.145l21.891-21.892c3.532,1.519,7.366,2.322,11.325,2.323c0.001,0,0.001,0,0.002,0
                    c7.674,0,14.885-2.994,20.302-8.43c7.397-7.415,10.158-18.275,7.206-28.342C240.143,118.398,239.675,117.946,239.083,117.796z
                      M195.188,189.842c1.226-1.228,3.215-1.228,4.443,0l22.074,22.076c1.228,1.226,1.228,3.214,0,4.441
                    c-1.228,1.225-3.213,1.225-4.439,0l-22.078-22.076C193.967,193.055,193.967,191.067,195.188,189.842z M185.195,199.829
                    c1.23-1.224,3.221-1.224,4.448,0.002l22.075,22.077c1.225,1.225,1.226,3.214,0,4.439c-1.23,1.227-3.219,1.227-4.442,0
                    l-22.081-22.077C183.972,203.046,183.972,201.058,185.195,199.829z"/>
                    </g>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Managing tools</span>
                  </a>
               </li>
               
            </ul>
         </div>
      </aside>
        <div class = "flex m-16 p-4 ">${this.innerHTML}</div>
     `;
    }
}


customElements.define('navbar-menu', NavbarMenu);
