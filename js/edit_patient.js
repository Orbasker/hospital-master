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
    fetch('php/search_edit.php?crud=select', {
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
                console.log(data);
                console.log(data.status);
                alert(data.status);
            }
        })
});
let form = document.getElementById('edit');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    console.log(formData.get('first-name'));
    fetch('php/search_edit.php?crud=update', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'Patient updated successfully') {

                window.location.href = 'index.php';
            } else {
                console.log(data);
                console.log(data.status);
            }
        })
}
)