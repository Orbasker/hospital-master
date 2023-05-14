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
           <div id="patients" class="nflex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            " >
               
           </div>
       </div>
${this.innerHTML}`;
}
};
customElements.define('list-view', listView);

window.addEventListener('DOMContentLoaded', () => {
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
       
                       nameCell.textContent = patient.patient_name;
                       doctorCell.textContent = patient.doctor;
                       bedCell.textContent = patient.bed_number;
                       statusCell.textContent = patient.status;
       
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
        // 'bg-white',
        'rounded-lg',
        'shadow-md',
        'p-4',
        'm-4',
        'flex',
        'flex-col',
        'justify-between',
        'sm:w-64',
        'md:w-48',
        'lg:w-32',
        'xl:w-48',
        `${getStatusClass(patient.status)}`
      );
      
    //  card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4','m-4' ,'sm:w-64', 'md:w-48' ,'lg:w-32');
     // Populate the card with patient data
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

     card.appendChild(title);
     card.appendChild(name);
     card.appendChild(doctor);
     card.appendChild(status);

     container.appendChild(card);
   });
 })
 .catch(error => {
   console.error(error);
 });
});

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
  

