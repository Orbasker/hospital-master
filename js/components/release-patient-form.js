class releasePatientForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <form id="form" class="p-4 " action="#" method="post">
        <div class="space-y-12">
                <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Enter the patient's details to release him.</p>
              </div>
          <div id="personal-info-section" class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20 ">
            <div>
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                <div class="mt-2">
                  <input type="text" placeholder=" First Name" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
                </div>
              </div>
              <div class="sm:col-span-3 my-2">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
                <div class="mt-2">
                  <input type="text" placeholder=" Last Name" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
                </div>
              </div>
            </div>
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-3">
                    <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
                    <div class="mt-2">
                      <input type="text" placeholder="ID Number - 9 digits" name="id" id="id" autocomplete="ID number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" pattern=".{9}" required>
                    </div>
                  </div>
            </div>
          </div>
          <legend class="text-sm font-semibold leading-6 text-gray-900">Medical information</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">Here you need to fill the patients medical details.</p>
          <div id="medical-info-section" class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
          
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div class="sm:col-span-3">
                <label for="Department" class="block text-sm font-medium leading-6 text-gray-900">Department</label>
                <div class="mt-2">
                  <select id="departments" name="departments" autocomplete="department-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="Department" class="block text-sm font-medium leading-6 text-gray-900">Doctor</label>
                <div class="mt-2">
                  <select id="doctors" name="doctors" autocomplete="doctor-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="nurse" class="block text-sm font-medium leading-6 text-gray-900">Nurse</label>
                <div class="mt-2">
                  <select id="nurses" name="nurses" autocomplete="Nurse-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
                </div>
              </div>
            </div>
          </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
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
