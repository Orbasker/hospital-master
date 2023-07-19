function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
search_patient = document.getElementById('search_patient');
search_patient.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(search_patient);
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/search_edit.php?crud=select', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'success') {
                search_patient = document.getElementById('search_patient').classList.add('hidden');
                let patient = data.data.data[0];
                let form = document.getElementById('edit');
                form.classList.remove('hidden');
                document.getElementById('first-name').setAttribute('value', patient.patient_first_name);
                console.log(patient.patient_first_name);
                console.log(document.getElementById('first-name'));
                document.getElementById('last-name').value = patient.patient_last_name;
                document.getElementById('patient_id').value = patient.patient_id;
                document.getElementById('departments').value = patient.patient_department;
                document.getElementById('doctors').value = patient.patient_doctor;
                document.getElementById('nurses').value = patient.patient_nurse;
                const estimatedTime = patient.patient_estimated_time;
                if (estimatedTime === '0') {
                    document.getElementById('one_day').checked = true;
                } else if (estimatedTime === '1') {
                    document.getElementById('two_day').checked = true;
                } else if (estimatedTime === '2') {
                    document.getElementById('three_day').checked = true;
                }
            } else {
                setTimeout(() => {
                message_modal = document.getElementById('messageModal');
                message_modal.classList.remove('hidden');
                messageHeader = document.getElementById('messageHeader');
                messageHeader.innerHTML = 'Error';
                messageHeader.classList.add('bg-red-500');
                customMessage = document.getElementById('customMessage');
                customMessage.classList.add('text-white');
                customMessage.innerHTML = `Error: ${data.status}<br/> Please try again`;
                }, 9000);
            }
        })
});
let form = document.getElementById('edit');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    console.log(formData.get('first-name'));
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/search_edit.php?crud=update', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'Patient updated successfully') {
                setTimeout(() => {
                    message_modal = document.getElementById('messageModal');
                    message_modal.classList.remove('hidden');
                    messageHeader = document.getElementById('messageHeader');
                    messageHeader.innerHTML = 'Success';
                    messageHeader.classList.add('text-green-500');
                    customMessage = document.getElementById('customMessage');
                    customMessage.classList.add('text-white');
                    customMessage.innerHTML = `Success: ${data.status}<br/> Patient updated successfully`;
                    window.location.href = 'index.php';
                }, 3000);
            } else {
                console.log(data);
                console.log(data.status);
                message_modal = document.getElementById('messageModal');
                message_modal.classList.remove('hidden');
                messageHeader = document.getElementById('messageHeader');
                messageHeader.innerHTML = 'Error';
                messageHeader.classList.add('bg-red-500');
                customMessage = document.getElementById('customMessage');
                customMessage.classList.add('text-white');
                customMessage.innerHTML = `Error: ${data.status}<br/> Please try again`;

            }
        })
}
)