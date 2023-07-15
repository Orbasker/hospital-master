

document.getElementById("log-out").addEventListener("click", function () {
    fetch('php/logout.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Session is active, do something
                console.log('Session active:', data.user_name);
            } else {
                deleteSessionCookie('session');
                deleteSessionCookie('user_name');
                deleteSessionCookie('user_type');
                deleteSessionCookie('user_id');
              window.location.href = "login.html";
                // Session is inactive
            }
        })
        .catch(error => {
            console.error('Error:', error)
            });
  });
  function checkSession() {
    // Function to check session status in cookie
    let sessionCookie = getSessionCookie('session');
    console.log(sessionCookie);
    if (!sessionCookie) {
        window.location.href = "login.html";
    }

    fetch('php/check_session.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'active') {
                // Session is active, do something
                console.log('Session active:', data.user_name);
                if (data.user_type == "Admin") {
                  document.getElementById("admin").classList.remove("hidden");
                }
            } else {
              window.location.href = "login.html";
                // Session is inactive, do something else
            }
        });
  }
  

  function getSessionCookie(name) {
    // Function to retrieve the value of a cookie by its name
    // console.log(document.cookie);
    const cookies = document.cookie.split(';');
    console.log(cookies);
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        // console.log(cookie.substring(name.length + 1));
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
checkSession();
  // Check if the session cookie is present
//   const sessionCookie = getSessionCookie('session');
//   if (!sessionCookie) {
//     // Session cookie is not present, redirect to login page
//     console.log('Session cookie not found, redirecting to login page');
//     window.location.href = 'login.html'; // Replace with the actual login page URL
//   }
// window.addEventListener('DOMContentLoaded', (event) => {
//         checkSession();
//         console.log("DOM fully loaded and parsed");
// });
function deleteSessionCookie(name) {
    const expirationDate = new Date();
    // Set the cookie expiration to a past date to delete it
    expirationDate.setTime(expirationDate.getTime() - 1);
    const cookie = `${encodeURIComponent(name)}=;expires=${expirationDate.toUTCString()};path=/`;
    document.cookie = cookie;
  }
