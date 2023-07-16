function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  // delete_patient = document.getElementById('delete_patient');
  modal = document.getElementById('modal');
  modal.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('delete_patient');
    const formData = new FormData(modal);
    console.log(formData);
    console.log(formData.get('patient_id'));
    // Make a POST request to the php/login.php page, passing the form data as the body of the request
    fetch('../php/search_edit.php?crud=delete', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'active') {
            setSessionCookie('session', data.user_id);
            setSessionCookie('user_name', data.user_name);
            setSessionCookie('user_type', data.user_type);
            setSessionCookie('user_id', data.user_id);
            window.location.href = 'index.php';
        } else {
            const alertMessage = document.getElementById('alert-meesage');
            alertMessage.innerHTML = data.message;
            // alertMessage.classList
            alertMessage.classList.remove('hidden');
        }
    })
  });