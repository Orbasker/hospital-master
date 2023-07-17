class editPatientForm extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="relative">
      <form id="search_patient" class="p-4 mx-auto relative z-10" action="#" method="post">
        <div class="mb-4">
          <h2 class="text-lg font-semibold leading-7 text-gray-900">Edit Patient</h2>
          <p class="mt-1 text-sm text-gray-600">Enter the patient's ID you want edit them.</p>
        </div>
        <div class="mb-6">
          <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Patient ID</label>
          <input type="text" placeholder="ID Number - 9 digits" name="id" id="id" autocomplete="ID number" class="block w-full px-4 py-2 border-gray-500 shadow-md focus:outline-none focus:border-indigo-300 sm:text-sm sm:leading-5" pattern=".{9}" required>
        </div>
        <div class="flex items-center justify-end mt-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" class="ml-3 rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Search</button>
        </div>
      </form>
  <div id="modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: none; background-color: rgba(0, 0, 0, 0.5); z-index: 9999;">
    <div style="background-color: #fff; padding: 2rem; border-radius: 0.5rem; width: 400px; max-width: 90%; margin: 20px auto;">
      <h2 class="text-lg font-semibold leading-7 text-gray-900 mb-4">Confirmation</h2>
      <p class="text-sm text-gray-600">Are you sure you want to delete this patient?</p>
      <div class="flex justify-end mt-4">
        <button type="button" onclick="closeModal()" class="mr-2 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-400">Cancel</button>
        <button type="submit" form="edit_patient" class="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400">Delete</button>
      </div>
    </div>
  </div>
  <form id="edit" class=" hidden p-4" action="#" method="post">
    <div class="space-y-12">
      <div>
        <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
      <div id="personal-info-section" class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
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
              <input type="text" placeholder=" ID Number - 9 digits" name="patient_id" id="patient_id" autocomplete="ID number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" pattern=".{9}" required>
            </div>
          </div>
        </div>
      </div>
      <legend class="text-sm font-semibold leading-6 text-gray-900">Medical information</legend>
      <p class="mt-1 text-sm leading-6 text-gray-600">Here you need to fill the patient's medical details.</p>
      <div id="medical-info-section" class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-3">
            <label for="departments" class="block text-sm font-medium leading-6 text-gray-900">Department</label>
            <div class="mt-2">
              <select id="departments" name="departments" autocomplete="department-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="doctors" class="block text-sm font-medium leading-6 text-gray-900">Doctor</label>
            <div class="mt-2">
              <select id="doctors" name="doctors" autocomplete="doctor-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="nurses" class="block text-sm font-medium leading-6 text-gray-900">Nurse</label>
            <div class="mt-2">
              <select id="nurses" name="nurses" autocomplete="nurse-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
        <div class="max-w-2xl space-y-10 md:col-span-2">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Estimated time</legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">This is the estimated time for release.</p>
            <div class="mt-6 space-y-6 m-20">
              <div class="flex items-center gap-x-3">
                <input id="one_day" name="estimated_time" type="radio" class="radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="one_day" class="block text-sm font-medium leading-6 text-gray-900">Maximum 24 hours</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="two_day" name="estimated_time" type="radio" class="radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="two_day" class="block text-sm font-medium leading-6 text-gray-900">Maximum 48 hours</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="three_day" name="estimated_time" type="radio" class="radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                <label for="three_day" class="block text-sm font-medium leading-6 text-gray-900">Maximum 72 hours</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </form>
</div>
    `;
  }
};
customElements.define('edit-patient-form', editPatientForm);

