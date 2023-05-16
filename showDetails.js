// Function to retrieve the patientId from the URL query string
function getParameterByName(name, url) {
    if (!url) {
// sourcery skip: dont-reassign-parameters
      url = window.location.href;
    }
// sourcery skip: dont-reassign-parameters
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to fetch and display the patient details
function showPatientDetails() {
    // Get the patientId from the URL
    let bed_number = getParameterByName('bed_number');
    
    // Use the patientId to fetch the corresponding data from your data source
    // Replace the following code with your own data fetching logic
    fetch('patients.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(patient => {
                console.log(patient);
                console.log(bed_number);
                if (patient.bed_number == bed_number) {
                    document.getElementById("patient_id").textContent = patient.bed_number;
                    document.getElementById("patient_name").textContent = patient.patient_name;
                    document.getElementById("patient_doctor").textContent = patient.doctor;
                    document.getElementById("patient_status").textContent = patient.status;
                    console.log("ffff" + patient);
                }
                else {
                    console.log("not bed number" + patient.bed_number + " " + bed_number + " " + patient.id + " " + patient.name + " ");
                }
                
            }
            );
            // throw new Error(`Patient with ID ${patientId} not found`);

            
            // const patient = data.find(patient => patient.bed_number === patientId);
            // if (!patient) {
            //     throw new Error(`Patient with ID ${patientId} not found`);
            // }
            // else {
            //     // Display the patient details
                
            // }
        })
        .catch(error => {
            console.error(error);
          });

    // Example data object
    // let patientData = {
    //     id: patientId,
    //     name: "John Doe",
    //     doctor: "Dr. Braydon Smith",
    //     status: "Critical"
    // };

    // Display the patient details
    // document.getElementById("patient_id").textContent = patientData.id;
    // document.getElementById("patient_name").textContent = patientData.name;
    // document.getElementById("patient_doctor").textContent = patientData.doctor;
    // document.getElementById("patient_status").textContent = patientData.status;
}

// Call the showPatientDetails function when the page finishes loading
window.onload = showPatientDetails();