// window.base_url = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/web1/dev_209"
// let base_url = ""
const loginForm = document.getElementById('login_form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    fetch(`php/sessions_managment.php?action=login`, {
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
            const messageModal = document.getElementById('messageModal');
            messageModal.classList.remove('hidden');
            const messageHeader = document.getElementById('messageHeader');
            messageHeader.innerHTML = 'Error';
            messageHeader.classList.add('text-red-500');
            const customMessage = document.getElementById('customMessage');
            customMessage.classList.add('text-white');
            customMessage.innerHTML = `Error: ${data.message}<br/> Please try again`;
        }
    })
});
function setSessionCookie(name, value) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000));
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookie;
  }