class releasePatientForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="relative">
        <form id="delete_patient" class="p-4 mx-auto relative z-10" action="php/delete-patient.php" method="post">
          <div class="mb-4">
            <h2 class="text-lg font-semibold leading-7 text-gray-900">Release Patient</h2>
            <p class="mt-1 text-sm text-gray-600">Enter the patient's ID to release them.</p>
          </div>
          <div class="mb-6">
            <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Patient ID</label>
            <input type="text" placeholder="ID Number - 9 digits" name="id" id="id" autocomplete="ID number" class="block w-full px-4 py-2 border-gray-500 shadow-md focus:outline-none focus:border-indigo-300 sm:text-sm sm:leading-5" pattern=".{9}" required>
          </div>
          <div class="flex items-center justify-end mt-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="button" onclick="openModal()" class="ml-3 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Delete</button>
          </div>
        </form>
      
        <!-- Modal -->
        <div id="modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: none; background-color: rgba(0, 0, 0, 0.5); z-index: 9999;">
          <div style="background-color: #fff; padding: 2rem; border-radius: 0.5rem; width: 400px; max-width: 90%; margin: 20px auto;">
            <h2 class="text-lg font-semibold leading-7 text-gray-900 mb-4">Confirmation</h2>
            <p class="text-sm text-gray-600">Are you sure you want to delete this patient?</p>
            <div class="flex justify-end mt-4">
              <button type="button" onclick="closeModal()" class="mr-2 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-400">Cancel</button>
              <button type="submit" form="delete_patient" class="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400">Delete</button>
            </div>
          </div>
        </div>
      </div>


    `;
    }
};
customElements.define('release-patient-form', releasePatientForm);

// להוסיף לייטבוקס אחרי שעושים שמור ואחכ לעשות המשך ושזה יעביר את הפרמטרים לטופס.
{/* <div id="modal" class="fixed inset-0 flex items-center justify-center z-50 ">
<div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
  <div class="modal-container bg-white w-1/2 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
  <div class="modal-content py-4 text-left px-6">
    <div class="flex justify-between items-center pb-3">
      <p class="text-2xl font-bold">Warning!</p>
      <button id="modalClose" class="modal-close cursor-pointer z-50"></button>
    </div>
    <p>
        <label for="departments" class="block mb-2 text-sm font-medium text-gray-900">Are you sure you want to make the changes?</label>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continue</button>
    </p>
    </div>
  </div> */}