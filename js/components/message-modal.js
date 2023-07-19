class MessageModal extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
          <script src="https://cdn.tailwindcss.com"></script>
          <div id="messageModal" class="hidden z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" flex items-center >
          <div class="relative w-full max-w-2xl max-h-full min-w-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                      <h3 id="messageHeader" class="text-xl font-semibold">
                          <!-- Information Message Replace with "Warning Message" or "Error Message" as needed -->
                      </h3>
                      <button type="button" id ="closeModalButton" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                      <p id="customMessage" class="text-base leading-relaxed z-20 text-white dark:text-white">
                          <!-- Replace this content with your custom message -->
                      </p>
                  </div>
                  <!-- Modal footer -->
                  <div id="messageFooter" class="hidden items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <!-- Add your custom button actions here -->
                      <button type="button" id="agree" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
                  </div>
              </div>
          </div>
      </div>
      
        
       `;
    }
  }
  customElements.define("message-modal", MessageModal);
  