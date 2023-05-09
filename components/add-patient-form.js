
class AddPatientForm extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<form class="p-4 sm:ml-64 m-16">
        <div class="space-y-12">
                <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
            
            <div>
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                <div class="mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
              <div class="sm:col-span-3 my-2">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                <div class="mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
              </div>
            </div>
      
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                <div class="col-span-3">
                    <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID</label>
                    <div class="mt-2">
                      <input type="text" name="id" id="id" autocomplete="ID number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
            </div>
          </div>
      
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3 m-20">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div class="sm:col-span-3">
                <label for="Department" class="block text-sm font-medium leading-6 text-gray-900">Department</label>
                <div class="mt-2">
                  <select id="department" name="department" autocomplete="department-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Kids</option>
                    <option>Emergency</option>
                    <option>Babys</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Urology</option>
                    <option>General Surgery</option>
                    <option>Plastic Surgery</option>
                    <option>Obstetrics and Gynecology</option>
                    <option>Psychiatry</option>
                    <option>Ear, Nose and Throat</option>
                    <option>Opthalmology</option>
                    <option>Dermatology</option>
                    <option>Endocrinology</option>
                    <option>Gastroenterology</option>
                    <option>Hematology</option>
                    <option>Infectious Diseases</option>
                    <option>Nephrology</option>
                    <option>Pulmonology</option>
                    <option>Rheumatology</option>
                    <option>Neurology</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="Department" class="block text-sm font-medium leading-6 text-gray-900">Doctor</label>
                <div class="mt-2">
                  <select id="doctor" name="doctor" autocomplete="doctor-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Dr Adam Levin</option>
                    <option>Dr Barbara Cohen</option>
                    <option>Dr Calvun Klein</option>
                    <option>Dr David Cohen</option>
                    <option>Dr Edward Cohen</option>
                    <option>Dr Frank Cohen</option>
                    <option>Dr George Cohen</option>
                    <option>Dr Henry Cohen</option>
                    <option>Dr Isaac Cohen</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="nurse" class="block text-sm font-medium leading-6 text-gray-900">Nurse</label>
                <div class="mt-2">
                  <select id="nurse" name="nurse" autocomplete="Nurse-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Shifra levy</option>
                    <option>Shira dotan</option>
                    <option>Noa Cohen</option>
                    <option>Yael Cohen</option>
                    <option>Ashley Cooper</option>
                    <option>Emma Cooper</option>
                    <option>Olivia Cooper</option>
                    <option>Isabella Cooper</option>
                    <option>Ava Cooper</option>
                    <option>Sophia Cooper</option>
                    <option>Charlotte Cooper</option>
                    <option>Mia Cooper</option>
                    <option>Amelia Cooper</option>
                    <option>Harper Cooper</option>
                    <option>Evelyn Cooper</option>
                    <option>Abigail Cooper</option>
                    <option>Emily Cooper</option>
                    <option>Ella Cooper</option>
                    
                  </select>
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
                    <input id="one_day" name="one_day" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="one_day" class="block text-sm font-medium leading-6 text-gray-900">maximum 24 hours</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="two_day" name="two_day" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="two_day" class="block text-sm font-medium leading-6 text-gray-900">maximum 48 hours</label>
                  </div>
                  <div class="flex items-center gap-x-3">
                    <input id="three_day" name="three_day" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
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
        ${this.innerHTML}
    `;
    }
};

customElements.define('add-patient-form', AddPatientForm);
