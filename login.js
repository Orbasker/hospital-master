const loginForm = document.getElementById('login_form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    console.log(formData);
    console.log(formData.get('user_name'));
    // Make a POST request to the login.php page, passing the form data as the body of the request
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 'active') {
            window.location.href = 'index.html';
        } else {
            const alertMessage = document.getElementById('alert-meesage');
            alertMessage.innerHTML = data.message;
            alertMessage.classList.remove('hidden');
        }
    })
});
