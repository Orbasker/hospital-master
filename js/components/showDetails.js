function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function showPatientDetails() {
  let bed_number = getParameterByName("bed_number");
  fetch("../assets/json/patients.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((patient) => {
        if (patient.bed_number == bed_number) {
          document.getElementById("patient_id").textContent =
            patient.bed_number;
          document.getElementById("patient_name").textContent =
            patient.patient_name;
          document.getElementById("patient_doctor").textContent =
            patient.doctor;
          document.getElementById("patient_status").textContent =
            patient.status;
        } else {
          console.log(
            "not bed number" +
              patient.bed_number +
              " " +
              bed_number +
              " " +
              patient.id +
              " " +
              patient.name +
              " "
          );
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
window.onload = showPatientDetails();
