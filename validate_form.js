let hospitals = {
  name: "Hospital XYZ",
  departments: [
    {
      name: "Cardiology",
      doctors: [
        {
          name: "Dr. Smith",
          specialty: "Cardiologist",
        },
        {
          name: "Dr. Johnson",
          specialty: "Cardiologist",
        },
        {
          name: "Dr. Lee",
          specialty: "Cardiologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Cardiology Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Cardiology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Cardiology Nurse",
        },
      ],
    },
    {
      name: "Orthopedics",
      doctors: [
        {
          name: "Dr. Davis",
          specialty: "Orthopedic Surgeon",
        },
        {
          name: "Dr. Brown",
          specialty: "Orthopedic Surgeon",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Orthopedic Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Orthopedic Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Orthopedic Nurse",
        },
      ],
    },
    {
      name: "Gastroenterology",
      doctors: [
        {
          name: "Dr. Patel",
          specialty: "Gastroenterologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Gastroenterologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Gastroenterologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Gastroenterologist",
        },
        {
          name: "Dr. Noya",
          specialty: "Gastroenterologist",
        },
      ],
    },
    {
      name: "Neurology",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Neurologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Neurologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Neurology Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Neurology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Neurology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Neurology Nurse",
        },
      ],
    },
    {
      name: "Oncology",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Oncologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Oncologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Oncology Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Oncology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Oncology Nurse",
        },
      ],
    },
    {
      name: "Pediatrics",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Pediatrician",
        },
        {
          name: "Dr. Kim",
          specialty: "Pediatrician",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Pediatric Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Pediatric Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Pediatric Nurse",
        },
      ],
    },
    {
      name: "Psychiatry",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Psychiatrist",
        },
        {
          name: "Dr. Kim",
          specialty: "Psychiatrist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Psychiatry Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Psychiatry Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Psychiatry Nurse",
        },
      ],
    },
    {
      name: "Radiology",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Radiologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Radiologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Radiology Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Radiology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Radiology Nurse",
        },
      ],
    },
    {
      name: "Urology",
      doctors: [
        {
          name: "Dr. Lee",
          specialty: "Urologist",
        },
        {
          name: "Dr. Kim",
          specialty: "Urologist",
        },
      ],
      nurse: [
        {
          name: "Sara Smith",
          specialty: "Urology Nurse",
        },
        {
          name: "Linda Cohen",
          specialty: "Urology Nurse",
        },
        {
          name: "Kim Wilson",
          specialty: "Urology Nurse",
        },
      ],
    },
  ],
};
function loadHospital() {
  fetch('assets/hospitals.json')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   return data;
  })
   // Loop through the patient data and create a card for each patient
  //  data.forEach(patient => {

}
function loadDepartments() {
  let departmentsElement = document.getElementById("departments");
  for (let department of hospitals.departments) {
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
window.onload = function () {
  let hospitals = loadHospital();
  loadDepartments(hospitals);
  loadDoctors(hospitals);
  loadNurses(hospitals);
  let depElement = document.getElementById("departments");
  depElement.addEventListener("change", loadDoctors);
  depElement.addEventListener("change", loadNurses);
};

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

// function handleAlertClose() {
//   let alertElement = document.getElementById("alert");
//   alertElement.setAttribute("hidden", true);
// }
