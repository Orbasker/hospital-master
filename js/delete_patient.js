function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
  }
  function closeModal() {
    const modal = document.getElementById('modal');
    
    modal.classList.add('hidden');
  }
  modal = document.getElementById('modal');
  delete_patient = document.getElementById('delete_patient');
  delete_patient.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(delete_patient);
    console.log('delete_patient');
    console.log(formData);
    console.log(formData.get('patient_id'));
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/search_edit.php?crud=delete', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    
        if (data.status === 'Patient deleted successfully') {
           setTimeout(() => {
            message_modal = document.getElementById('messageModal');
            message_modal.classList.remove('hidden');
            messageHeader = document.getElementById('messageHeader');
            messageHeader.innerHTML = 'Success';
            messageHeader.classList.add('text-green-500');
            customMessage = document.getElementById('customMessage');
            customMessage.classList.add('text-white');
            customMessage.innerHTML = `Success: ${data.status}<br/> Patient deleted successfully`;
            window.location.href = 'index.php';
            }, 3000);
        } else {
            message_modal = document.getElementById('messageModal');
            message_modal.classList.remove('hidden');
            messageHeader = document.getElementById('messageHeader');
            messageHeader.innerHTML = 'Error';
            messageHeader.classList.add('bg-red-500');
            customMessage = document.getElementById('customMessage');
            customMessage.classList.add('text-white');
            customMessage.innerHTML = `Error: ${data.status}<br/> Please try again`;
        }
    });
  });