form = document.getElementById('add_patient_form');
form.addEventListener('submit', (event) => {
event.preventDefault();
const formData = new FormData(form);
    fetch('../php/search_edit.php?crud=add', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'Patient added successfully') {
            fetch('../php/bed.php?action=add',
            {method: 'POST',
            body: formData})
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
               

                setTimeout(() => {
                    messageModal = document.getElementById('messageModal');
                    messageModal.classList.remove('hidden');
                    messageHeader = document.getElementById('messageHeader');
                    messageHeader.innerHTML = 'Success';
                    messageHeader.classList.add('text-green-500');
                    customMessage = document.getElementById('customMessage');
                    customMessage.classList.add('text-white');
                    customMessage.innerHTML = `Success: ${data.status}<br/> Patient added successfully<br/> Patient ID: ${data.patient_id}<br/> Bed ID: ${data.bed_data.bed_id}`;
                window.location.href = 'index.php';

                }, 3000);
            }
        });
        } else {
            console.log(data);
            messageModal = document.getElementById('messageModal');
            messageModal.classList.remove('hidden');
            messageHeader = document.getElementById('messageHeader');
            messageHeader.innerHTML = 'Error';
            messageHeader.classList.add('bg-red-500');
            customMessage = document.getElementById('customMessage');
            customMessage.classList.add('text-white');
            customMessage.innerHTML = `Error: ${data.status}<br/> Please try again`;
        }
    })
});
   