document.getElementById("log-out").addEventListener("click", function () {
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=logout')
        .then(response => response.json())
        .then(data => {
          console.log(data);
            if (data.status === 'inactive') {
              
                window.location.href = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php";
            } else {
                window.location.href = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php";
            }
        })
        .catch(error => {
            console.error('Error:', error)
            });
  });
  function checkSession() {
    fetch('http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/php/sessions_managment.php?action=check_session')
        .then(response => response.json())
        .then(data => {

            if (data.status === 'active') {
                if (data.user_type == "Admin") {
                  document.getElementById("admin").classList.remove("hidden");
                  document.getElementById("profilLogo").src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/assets/svg/peled.jpg"
                }
                else
                {
                  document.getElementById("profilLogo").src="http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/assets/svg/sapir.jpg"
                }
            } else {
              window.location.href = "http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/login.php";
            }
        });
  }

checkSession();