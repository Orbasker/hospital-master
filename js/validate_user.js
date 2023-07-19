document.getElementById("log-out").addEventListener("click", function () {
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=logout')
        .then(response => response.json())
        .then(data => {
          console.log(data);
            if (data.status === 'active') {
                console.log('Session active:', data.user_name);
            } else {
                deleteSessionCookie('session');
                deleteSessionCookie('user_name');
                deleteSessionCookie('user_type');
                deleteSessionCookie('user_id');
            }
        })
        .catch(error => {
            console.error('Error:', error)
            });
  });
  function checkSession() {
    let sessionCookie = getSessionCookie('session');
    console.log(sessionCookie);
    if (!sessionCookie) {
        window.location.href = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php";
    }
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/check_session.php?get=session')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'active') {
                console.log('Session active:', data.user_name);
                if (data.user_type == "Admin") {
                  document.getElementById("admin").classList.remove("hidden");
                }
            } else {
              window.location.href = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php";
            }
        });
  }
  function getSessionCookie(name) {
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
checkSession();
function deleteSessionCookie(name) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() - 1);
    const cookie = `${encodeURIComponent(name)}=;expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookie;
  }
