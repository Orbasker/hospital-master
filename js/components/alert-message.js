class alert extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<script src="https://cdn.tailwindcss.com"></script>
        <section hidden id="alert" class="p-4 sm:ml-64 m-16">
        <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
           <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
  
             <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
               <div class="p-4">
                 <div class="flex items-center">
                   <div class="flex w-0 flex-1 justify-between">
                     <p class="w-0 flex-1 text-sm font-medium text-gray-900">Validation error!<br>
                     </p>
                   </div>
                   <div class="ml-4 flex flex-shrink-0">
                     <button type="button" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                       <span class="sr-only">Close</span>
                       <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" id="closeAlert">
                         <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                       </svg>
                     </button>
                   </div>
                 </div>
                 <div  id='errorMessage' class="mt-2 text-sm text-red-700"></div>
               </div>
             </div>
           </div>
         </div>
     </section>${this.innerHTML}`
  }
};
customElements.define('alert-message', alert);