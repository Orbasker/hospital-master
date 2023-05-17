class breadCrumbs extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <nav id="breadcrumb" class="flex p-4  w-full z-50 bg-white shadow">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a href="#" id="returnHome" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 breadcrumb-step active">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>Home</a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="#" id="personal-info-step" class="ml-1 text-sm font-medium  hover:text-blue-600 md:ml-2 text-gray-500 breadcrumb-step">Personal details</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span id="MedicInfo" class="ml-1 text-sm font-medium hover:text-blue-600 text-gray-500 md:ml-2  breadcrumb-step">Medical information</span>
                </div>
              </li>
            </ol>
          </nav>
    <script src="https://cdn.tailwindcss.com"></script>

        `;
}
};
customElements.define('bread-crumbs', breadCrumbs);
// Get the input element
const personalInfoSection = document.getElementById('personal-info-section');
const medicalInfoSection = document.getElementById('medical-info-section');
const estimatedTimeSection = document.getElementById('estimated-time-section');
// Get the breadcrumb step elements
const personalInfoStep = document.getElementById('personal-info-step');
const medicalInfoStep = document.getElementById('medical-info-step');
const estimatedTimeStep = document.getElementById('estimated-time-step');
// Add click event listeners to the breadcrumb steps
personalInfoStep.addEventListener('click', () => showSection(personalInfoSection));
medicalInfoStep.addEventListener('click', () => showSection(medicalInfoSection));
estimatedTimeStep.addEventListener('click', () => showSection(estimatedTimeSection));
// Function to show a specific section and update breadcrumb
function showSection(section) {
  // Hide all sections
  personalInfoSection.style.display = 'none';
  medicalInfoSection.style.display = 'none';
  estimatedTimeSection.style.display = 'none';
  // Show the selected section
  section.style.display = 'block';
  // Update breadcrumb active step
  personalInfoStep.classList.remove('active');
  medicalInfoStep.classList.remove('active');
  estimatedTimeStep.classList.remove('active');
  if (section === personalInfoSection) {
    personalInfoStep.classList.add('active');
  } 
  else if (section === medicalInfoSection) {
    medicalInfoStep.classList.add('active');
  } 
  else if (section === estimatedTimeSection) {
    estimatedTimeStep.classList.add('active');
  }
}
