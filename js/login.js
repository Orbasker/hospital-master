const loginForm = document.getElementById('login_form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
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
            window.location.href = 'index.php';
        } else {
            const alertMessage = document.getElementById('alert-meesage');
            alertMessage.innerHTML = data.message;
            alertMessage.classList.remove('hidden');
        }
    })
});
function setSessionCookie(name, value) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000));
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookie;
  }