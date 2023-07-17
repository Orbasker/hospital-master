function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  modal = document.getElementById('modal');
  modal.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('delete_patient');
    const formData = new FormData(modal);
    console.log(formData);
    console.log(formData.get('patient_id'));
    fetch('../php/search_edit.php?crud=delete', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'Patient deleted successfully') {
           
            window.location.href = 'index.php';
        } else {
            console.log(data);
        }
    })
  });