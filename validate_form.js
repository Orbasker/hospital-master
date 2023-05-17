 function loadHospital() {
  return fetch('assets/hospitals.json')
 .then(response => response.json())
 .then(data => {
   console.log(data);
  return data;
  })
}
let hospitals;
window.onload = function () {
  console.log("window loaded");
  loadHospital()
    .then((loadedHospitals) => {
      hospitals = loadedHospitals;
      console.log(hospitals);

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
  for (let department of Array.from(hospitals.departments) ) {
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
let formElement = document.getElementById("form");
formElement.onsubmit = function (event) {
  if (isFormValid()) {
    return true;
  } else {
    event.preventDefault();
  }
};
let alertRaised = false;
function isFormValid() {
  if (alertRaised == true) {
    return false;
  }
  let validations = {
    id: {
      pattern: /[0-9]{9,10}/,
      message: "Please enter a valid phone number, valid phone: 9-10 digits",
    },
    name: {
      pattern: /[a-zA-Z]{2,}/,
      message: "Please enter a valid name, valid name: 2 or more characters",
    },
  };
  let alertElement = document.getElementById("alert");
  let errorMessageElement = document.getElementById("errorMessage");
  let ulElement = document.createElement("ul");
  ulElement.className = "list-disc space-y-1 pl-5";

  errorMessageElement.appendChild(ulElement);
  let shouldAlert = false;

  for (let [id, validation] of Object.entries(validations)) {
    let inputElement = document.getElementById(id);
    if (inputElement) {
      let inputValue = inputElement.value;
      let isValid = validation.pattern.test(inputValue);
      if (!isValid) {
        let liElement = document.createElement("li");
        liElement.innerHTML = validation.message;
        ulElement.appendChild(liElement);
        shouldAlert = true;
      }
    }
  }
  if (shouldAlert) {
    alertElement.removeAttribute("hidden");
    alertRaised = true;

    setTimeout(() => {
      alertElement.setAttribute("hidden", true);
      errorMessageElement.innerHTML = "";
      alertRaised = false;
    }, 5000);
    return false;
  } else {
    return true;
  }
}

const radioButtons = document.getElementsByClassName("radio-button");
Array.from(radioButtons).forEach((radioButton) => {
  radioButton.addEventListener("click", (event) => {
    console.log(event.target + " is checked");
    // uncheck all other radio buttons
    Array.from(radioButtons).forEach((otherRadioButton) => {
      if (otherRadioButton !== event.target) {
        otherRadioButton.checked = false;
      }
    });
  });
});
