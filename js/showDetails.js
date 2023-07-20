document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bedNumber = urlParams.get('bed_number');
  
    if (bedNumber) {
      fetchDetails(bedNumber);
    }
  });
  function fetchDetails(bedNumber) {
    const formData = new FormData();
    formData.append('bed_number', bedNumber);
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/bed.php?action=select', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          updatePatientCard(data.data.data);
        } else {
            let messageModal = document.getElementById('messageModal');
            messageModal.classList.remove('hidden');
            let messageHeader = document.getElementById('messageHeader');
            messageHeader.innerHTML = 'Error';
            messageHeader.classList.add('text-red-500');
            let customMessage = document.getElementById('customMessage');
            customMessage.classList.add('text-white');
            customMessage.innerHTML = `Error: ${data.status}<br/> Please try again`;

        }
      })
      .catch((error) => {
        console.error('Error fetching patient details:', error);
      });
  }
  function updatePatientCard(data) {
    console.log(data);
    data = data[0];
    const patientIdSpan = document.getElementById('patient-id');
    const patientNameSpan = document.getElementById('patient-name');
    const doctorSpan = document.getElementById('doctor');
    const statusSpan = document.getElementById('status');
    const bedNumberSpan = document.getElementById('bed-number');
    console.log(patientIdSpan);  
    if (patientIdSpan) {
      patientIdSpan.innerHTML += data.patient_id;
    }
    if (patientNameSpan) {
      patientNameSpan.innerHTML += data.patient_first_name + ' ' + data.patient_last_name;
    }
    if (doctorSpan) {
      doctorSpan.innerHTML += data.patient_doctor;
    }
    if (statusSpan) {
      statusSpan.innerHTML += data.status;
    }
    if (bedNumberSpan) {
      bedNumberSpan.innerHTML += data.bed_number;
    }
  }
  