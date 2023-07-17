class AddPatientForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <form id="add_patient_form" class="p-10 " action="#" method="post">
        <div class="space-y-10">
          <div>
          <br>
          <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
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
                      <input type="text" placeholder=" Must to be 9 digits" name="id" id="id" autocomplete="ID number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" pattern=".{9}" required>
                    </div>
                  </div>
            </div>
          </div>
          <legend class="text-sm font-semibold leading-7 text-gray-900">Medical information</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">Here you need to fill the patients medical details.</p>
          <div id="medical-info-section" class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div class="sm:col-span-3">
                <label for="Department" class="block text-sm font-medium leading-6 text-gray-900">Department</label>
                <div class="mt-2">
                  <select id="departments" name="departments" autocomplete="department-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"></select>
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
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div class="max-w-2xl space-y-10 md:col-span-2">
              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">Estimated time</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">These is estimated time to Realease.</p>
                <div class="mt-6 space-y-6 m-20">
                  <div class="flex items-center gap-x-3">
                    <input id="one_day" name="estimated_time" value="24" type="radio" class="radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="one_day" class=" block text-sm font-medium leading-6 text-gray-900">maximum 24 hours</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="two_day" name="estimated_time" value="48" type="radio" class="radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="two_day" class="block text-sm font-medium leading-6 text-gray-900">maximum 48 hours</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="three_day" name="estimated_time" valuue="72" type="radio" class= "radio-button h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="three_day" class="block text-sm font-medium leading-6 text-gray-900">maximum 72 hours</label>
                  </div>
                </div>
              </fieldset>
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
customElements.define('add-patient-form', AddPatientForm);




