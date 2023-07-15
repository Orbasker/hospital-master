const loginForm = document.getElementById('login_form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    console.log(formData);
    console.log(formData.get('user_name'));
    // Make a POST request to the php/login.php page, passing the form data as the body of the request
    fetch('../php/login.php', {
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
            window.location.href = 'index.html';
        } else {
            const alertMessage = document.getElementById('alert-meesage');
            alertMessage.innerHTML = data.message;
            alertMessage.classList.remove('hidden');
        }
    })
});



function setSessionCookie(name, value) {
    const expirationDate = new Date();
    // Set the cookie to expire in 1 hour (adjust as needed)
    expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000));
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookie;
  }