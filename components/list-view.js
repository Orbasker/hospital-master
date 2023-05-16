class listView extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <!-- Map View Toggle -->
        
       <div class="flex flex-col relative w-full h-96">
           <div id="toggle" class="flex items-center mt-8">
             <label class="flex items-center cursor-pointer">
               <div class="relative">
                 <input type="checkbox" id="toggle" class="sr-only">
                 <div id="toggle_background" class="block bg-gray-600 w-10 h-6 rounded-full"></div>
                 <div class="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
               </div>
               <div class="ml-3 text-gray-700 font-medium">Toggle Map View</div>
             </label>
           </div>

       <!-- Table -->
       <table id="table_view" class="table-auto mx-auto w-full md:w-2/3 lg:w-3/4 my-8 ">
           <thead>
               <tr>
                   
               </tr>
               <tr class="bg-blue-500 text-white">
                   <th class="px-4 py-2">Patient Name</th>
                   <th class="px-4 py-2">Doctor</th>
                   <th class="px-4 py-2">Bed Number</th>
                   <th class="px-4 py-2">Status</th>
               </tr>
           </thead>
           <tbody>
               
           </tbody>
       </table>

      
       <!-- Map View with Cards -->
       <div id="map_view" class="hidden ">
           <div id="patients" class="nflex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5" >
               
           </div>
       </div>
       <!-- Modal Trigger Button -->


<!-- Modal -->
<div id="modal" class="fixed inset-0 flex items-center justify-center z-50 ">
  <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
  
  <div class="modal-container bg-white w-1/2 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
    <!-- Modal content -->
    <div class="modal-content py-4 text-left px-6">
      <div class="flex justify-between items-center pb-3">
        <p class="text-2xl font-bold">Please choose a department</p>
        <button id="modalClose" class="modal-close cursor-pointer z-50">
          <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M1 17.804l.706.707L9 10.706l7.293 7.293.707-.707L9.707 10l7.293-7.293-.707-.707L9 9.293 1.707 1 .293 1.707l7.293 7.293L.293 17.097l.707.707L9 10.707l7.293 7.293.707-.707L9.707 10l7.293-7.293-.707-.707L9 .293.707 9.293l.707.707z" />
          </svg>
        </button>
      </div>
      <p>
          <label for="departments" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
          <select id="departments" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a department</option>
          </select>


      </p>
    </div>
  </div>
</div>
${this.innerHTML}`;
}
};
customElements.define('list-view', listView);
function load_data() {
            // window.addEventListener('DOMContentLoaded', () => {
                      // Get the toggle switch and the map view
                      const toggle = document.getElementById('toggle');
                      const mapView = document.getElementById('map_view');
                      const tableView = document.getElementById('table_view');
                      const toggleBackground = document.getElementById('toggle_background');
                      // Add an event listener to the toggle switch
                      toggle.addEventListener('change', (event) => {
                          // If the toggle switch is checked, show the map view
                          if (event.target.checked) {
                              mapView.classList.remove('hidden');
                              toggleBackground.classList.remove('bg-gray-600');
                              toggleBackground.classList.add('bg-blue-500');
                              tableView.classList.add('hidden');
                          }
                          // Otherwise, hide the map view
                          else {
                              mapView.classList.add('hidden');
                              toggleBackground.classList.add('bg-gray-600');
                              toggle.classList.remove('bg-blue-500');
                              tableView.classList.remove('hidden');
                          }
                      });
                        //enter table refernces
                      // Get a reference to the table element
                      const table = document.getElementById('table_view');
                  
                      // Fetch the JSON data
                      fetch('patients.json')
                          .then(response => response.json())
                          .then(data => {
                              console.log(data);  
                              // Loop through the data and create a table row for each patient
                              data.forEach(patient => {

                                let row = document.createElement('tr');
                                let nameCell = document.createElement('td');
                                let doctorCell = document.createElement('td');
                                let bedCell = document.createElement('td');
                                let statusCell = document.createElement('td');
                                let link = document.createElement('a');
                                
                                link.href = `showDetails.html?bed_number=${patient.bed_number}`;
                                link.textContent = patient.patient_name;
                                
                                nameCell.appendChild(link);
                                doctorCell.appendChild(document.createTextNode(patient.doctor));
                                bedCell.appendChild(document.createTextNode(patient.bed_number));
                                statusCell.appendChild(document.createTextNode(patient.status));
                                
                                nameCell.classList.add('border', 'px-4', 'py-2');
                                doctorCell.classList.add('border', 'px-4', 'py-2');
                                bedCell.classList.add('border', 'px-4', 'py-2');
                                statusCell.classList.add('border', 'px-4', 'py-2');
                                
                                row.appendChild(nameCell);
                                row.appendChild(doctorCell);
                                row.appendChild(bedCell);
                                row.appendChild(statusCell);
                                
                                table.appendChild(row);
                                
                              });
                          });
                // enter cards refernces

              // Get the container element for the cards
            const container = document.getElementById('patients');

            // Fetch the JSON data from a file or an API endpoint
            fetch('patients.json')
            .then(response => response.json())
            .then(data => {
              console.log(data);
              // Loop through the patient data and create a card for each patient
              data.forEach(patient => {
                // Create a card element
                const card = document.createElement('div');
                card.classList.add(
                  'rounded-lg', 'shadow-md', 'p-4', 'm-4', 'flex', 'flex-col', 'justify-between',
                  'sm:w-full', 'md:w-50%', 'lg:w-25%', 'xl:w-20%', 'bg-red-500', `${getStatusClass(patient.status)}`
                );
                
               
                const title = document.createElement('h2');
                title.classList.add('text-lg', 'font-medium');
                title.textContent = `Bed ${patient.bed_number}`;

                const name = document.createElement('p');
                name.classList.add('text-black-500');
                name.textContent = `Patient Name: ${patient.patient_name}`;

                const doctor = document.createElement('p');
                doctor.classList.add('text-black-500');
                doctor.textContent = `Doctor: ${patient.doctor}`;

                const status = document.createElement('p');
                status.classList.add('text-black-500');
                status.textContent = `Status: ${patient.status}`;
                
                const link = document.createElement('a');
                link.href = `showDetails.html?bed_number=${patient.bed_number}`;

                link.appendChild(title);
                link.appendChild(name);
                link.appendChild(doctor);
                link.appendChild(status);
                
                card.appendChild(link);
                
                
                container.appendChild(card);
              });
            })
            .catch(error => {
              console.error(error);
            });
            // });
          };
function getStatusClass(status) {
    switch (status) {
      case 'Critical':
        return 'bg-red-500';
      case 'Stable':
        return 'bg-yellow-500';
      case 'Serious':
        return 'bg-green-500';
      default:
        return '';
    }
  }
const departmentsSelect = document.getElementById('departments');
const modalTrigger = document.getElementById('modalTrigger');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
modalClose.addEventListener('click', () => {
  console.log(departmentsSelect.value);
    closeModal();
    // closeModal();
});
departmentsSelect.addEventListener('change', () => {
    closeModal();
  // closeModal();
});
  // departmentsSelect.addEventListener('change', () => {
  //   console.log(departmentsSelect.value);
    
  //     closeModal();
    
  //     // modalClose.disabled = true;
    
  // });
   // Open modal
    // modalTrigger.addEventListener('click', () => {
    // modal.classList.remove('hidden');
    // });


function closeModal() {
  if (departmentsSelect.value === 'Choose a department') {
    console.log('You must agree to the terms and conditions');
    modalClose.disabled = true;
}
else{
  modalClose.disabled = false;
  modal.classList.add('hidden');
  load_data();
}
//   const modalClose = document.getElementById('modalClose');
//   modalClose.addEventListener('click', () => {
//   if (departmentsSelect.value === 'Choose a department') {
//        console.log('You must agree to the terms and conditions');
//        modalClose.disabled = true;
//   }
//   else{
//     modalClose.disabled = false;
//     modal.classList.add('hidden');
//   }
  
// });
};


// Close modal by clicking outside the modal


// Close modal by pressing the Escape key



// Fetch the JSON data
fetch('assets/hospitals.json')
  .then(response => response.json())
  .then(data => {
    // Iterate through the departments and create option elements
    // let id=1;
    data.departments.forEach(department => {
      const option = document.createElement('option');
      option.value = department.name;
      option.textContent = department.name;
      departmentsSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });







  





  // <button id="modalTrigger" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Modal</button>