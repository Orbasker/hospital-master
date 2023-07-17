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
            window.location.href = 'index.php';
        } else {
            console.log(data);
        }
    })
});