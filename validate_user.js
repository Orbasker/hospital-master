

document.getElementById("log-out").addEventListener("click", function () {
    fetch('logout.php')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Session is active, do something
                console.log('Session active:', data.user_name);
            } else {
              window.location.href = "login.html";
                // Session is inactive
            }
        })
        .catch(error => {
            console.error('Error:', error)
            });
  });