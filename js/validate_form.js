function loadHospital() {
  return fetch("http://se.shenkar.ac.il/students/2022-2023/web1/dev_209/assets/json/hospitals.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
let hospitals;
window.onload = function () {
  loadHospital()
    .then((loadedHospitals) => {
      hospitals = loadedHospitals;
      loadDepartments();
      loadDoctors();
      loadNurses();

      let depElement = document.getElementById("departments");
      depElement.addEventListener("change", loadDoctors);
      depElement.addEventListener("change", loadNurses);
    })
    .catch((error) => {
      console.error("Error loading hospitals:", error);
    });
};
function loadDepartments() {
  let departmentsElement = document.getElementById("departments");
  for (let department of Array.from(hospitals.departments)) {
    let optionElement = document.createElement("option");
    optionElement.value = department.name;
    optionElement.innerHTML = department.name;
    departmentsElement.appendChild(optionElement);
  }
}
function loadDoctors() {
  let doctorsElement = document.getElementById("doctors");
  let selectedDepartment = document.getElementById("departments").value;
  doctorsElement.innerHTML = "";
  for (let department of hospitals.departments) {
    if (department.name == selectedDepartment) {
      for (let doctor of department.doctors) {
        let optionElement = document.createElement("option");
        optionElement.value = doctor.name;
        optionElement.innerHTML = doctor.name;
        doctorsElement.appendChild(optionElement);
      }
    }
  }
}
function loadNurses() {
  let nursesElement = document.getElementById("nurses");
  let selectedDepartment = document.getElementById("departments").value;
  nursesElement.innerHTML = "";
  for (let department of hospitals.departments) {
    if (department.name == selectedDepartment) {
      for (let nurse of department.nurse) {
        let optionElement = document.createElement("option");
        optionElement.value = nurse.name;
        optionElement.innerHTML = nurse.name;
        nursesElement.appendChild(optionElement);
      }
    }
  }
}
function isDoctorExists(doctorName) {
  for (let department of hositals.departments) {
    for (let doctor of department.doctors) {
      if (doctor.name == doctorName) {
        return true;
      }
    }
  }
  return false;
}
const radioButtons = document.getElementsByClassName("radio-button");
Array.from(radioButtons).forEach((radioButton) => {
  radioButton.addEventListener("click", (event) => {
    Array.from(radioButtons).forEach((otherRadioButton) => {
      if (otherRadioButton !== event.target) {
        otherRadioButton.checked = false;
      }
    });
  });
});
