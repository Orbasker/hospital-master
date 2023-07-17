let is_clicked_dropdown = true;
avatarButton = document.getElementById("avatarButton");
avatarButton.addEventListener("click", function () {
  userDropdown = document.getElementById("userDropdown");
  if (is_clicked_dropdown) {
    userDropdown.classList.remove("hidden");
    is_clicked_dropdown = false;
  } else {
    userDropdown.classList.add("hidden");
    is_clicked_dropdown = true;
  }
});
let is_clicked_hamburger = true;
hamburgerButton = document.getElementById("hamburger");
hamburgerButton.addEventListener("click", function () {
  logo_side_bar = document.getElementById("logo-sidebar");
  if (is_clicked_hamburger) {
    logo_side_bar.classList.remove("hidden");
    is_clicked_hamburger = false;
  } else {
    logo_side_bar.classList.add("hidden");
    is_clicked_hamburger = true;
  }
});
function getFillColor(occupancyLevel) {
  switch (occupancyLevel) {
    case "high":
      return "#BD362F";
    case "medium":
      return "#4ECB71";
    case "low":
      return "#FFC40D";
    default:
      return "#000000";
  }
}
window.onload = function () {
  fetch("assets/json/department-load.json")
    .then((response) => response.json())
    .then((data) => {
      const loads = data.logs;
      const loadContainer = document.getElementById("loadContainer");
      const logsHTML = loads
        .map((log) => {
          const departmentName = log.department;
          const { occupancyLevel } = log;
          const fillColor = getFillColor(occupancyLevel);
          return `
        <tr class="bg-white border-b">
        <th scope="row" class="px-2 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap ">${departmentName}</th>
          <td class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="${fillColor}" class="bi bi-circle-fill" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </td>
        </tr>
           `;
        })
        .join("");
      loadContainer.innerHTML = `
           <table class="w-full text-sm text-center text-gray-500">
             <thead class="text-xs md:text-sm text-gray-700 uppercase bg-gray-50">
               <tr>
                 <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Department</th>
                 <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Occupancy Level</th>
               </tr>
             </thead>
             <tbody>${logsHTML}</tbody>
           </table>
         `;
    })
    .catch((error) => {
      console.error("Error fetching department load data:", error);
    });
  fetch("assets/json/doctors.json")
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.getElementById("doctorsContainer");
      data.forEach((doctor) => {
        const row = document.createElement("tr");
        row.classList.add("bg-white", "border-b", "bg-white", "border-b");
        const nameCell = document.createElement("th");
        nameCell.scope = "row";
        nameCell.classList.add(
          "px-6",
          "py-4",
          "font-medium",
          "text-neutral-950",
          "whitespace-nowrap",
          "text-neutral-950"
        );
        nameCell.textContent = doctor.name;
        const departmentCell = document.createElement("td");
        departmentCell.classList.add("px-6", "py-4");
        departmentCell.textContent = doctor.department;
        const phoneNumberCell = document.createElement("td");
        phoneNumberCell.classList.add("px-6", "py-4");
        phoneNumberCell.textContent = doctor.phoneNumber;
        row.appendChild(nameCell);
        row.appendChild(departmentCell);
        row.appendChild(phoneNumberCell);
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching doctors data:", error);
    });
  fetch("assets/json/logs.json")
    .then((response) => response.json())
    .then((data) => {
      const logsContainer = document.getElementById("logsContainer");
      const logsHTML = data
        .map((log) => {
          const { logId, logText } = log;
          const detailsLink = log.detailsLink || "";
          return `
              <li class="p-4">
                  <div class="flex items-center justify-between">
                  <span class="tdark:text-white">Log ${logId}</span>
                  </div>
                  <p class="tdark:text-white">${logText}<a href="${detailsLink}" color="#2563eb">Click for more details.</a></p>
              </li>
              `;
        })
        .join("");
      logsContainer.innerHTML = `
              <ul class="shadow-md rounded-lg divide-y divide-gray-50">${logsHTML}</ul>
          `;
    })
    .catch((error) => {
      console.error("Error fetching system recommendation logs:", error);
    });
    
};


