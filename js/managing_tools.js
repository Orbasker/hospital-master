fetch('/php/crud_users.php')
.then(response => response.json())
.then(data => {
    (data);
    data = JSON.parse(data);
    data = data.data;
    generateDropdown(data);
    data.forEach(user => {
        create_user_row(user);
    });
})
.catch(error => {
  console.error('Error:', error);
});
  document.addEventListener('DOMContentLoaded', () => {
    const userTable = document.getElementById('userTable');
  });
  function create_user_row(user_data) {
    let row = document.createElement('tr');
    row.classList.add('border-b', 'dark:border-gray-700');
    let userIdCell = document.createElement('td');
    userIdCell.classList.add('px-4', 'py-3');
    userIdCell.textContent = user_data.user_id;
    row.appendChild(userIdCell);
    let firstNameCell = document.createElement('td');
    firstNameCell.classList.add('px-4', 'py-3');
    firstNameCell.textContent = user_data.user_first_name;
    row.appendChild(firstNameCell);
    let usernameCell = document.createElement('td');
    usernameCell.classList.add('px-4', 'py-3');
    usernameCell.textContent = user_data.username;
    row.appendChild(usernameCell);
    let lastNameCell = document.createElement('td');
    lastNameCell.classList.add('px-4', 'py-3');
    lastNameCell.textContent = user_data.user_last_name;
    row.appendChild(lastNameCell);
    let passwordCell = document.createElement('td');
    passwordCell.classList.add('px-4', 'py-3');
    passwordCell.textContent = user_data.user_password;
    row.appendChild(passwordCell);
    let userTypeCell = document.createElement('td');
    userTypeCell.classList.add('px-4', 'py-3');
    userTypeCell.textContent = user_data.user_type;
    row.appendChild(userTypeCell);
    let createDateCell = document.createElement('td');
    createDateCell.classList.add('px-4', 'py-3');
    createDateCell.textContent = user_data.user_create_date;
    row.appendChild(createDateCell);
    let lastModifiedDateCell = document.createElement('td');
    lastModifiedDateCell.classList.add('px-4', 'py-3');
    lastModifiedDateCell.textContent = user_data.last_modified_date;
    row.appendChild(lastModifiedDateCell);
    let actionsCell = document.createElement('td');
    actionsCell.classList.add('px-4', 'py-3', 'flex', 'items-center', 'justify-end');
    actionsCell.innerHTML = `
      <button id="${user_data.user_id}-dropdown-button" data-dropdown-toggle="${user_data.user_id}-dropdown" class="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover:bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      <div id="${user_data.user_id}-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul id="${user_data.user_id}-toggle-drop-down" class="py-1 text-sm" aria-labelledby="${user_data.user_id}-dropdown-button">
          <li>
            <button type="button" id="${user_data.user_id}-edit-button" data-modal-target="updateUserModal" data-modal-toggle="updateUserModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              Edit
            </button>
          </li>
          <li>
            <button type="button" id="${user_data.user_id}-preview-button" data-modal-target="readClientModal" data-modal-toggle="readClientModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Preview
            </button>
          </li>
          <li>
            <button type="button" id="${user_data.user_id}-delete-button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
              <svg class="w-4 h-4 mr-2" viewbox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM7.89922 5.70078C7.89922 5.46209 7.8044 5.23317 7.63561 5.06439C7.46683 4.8956 7.23791 4.80078 6.99922 4.80078C6.76052 4.80078 6.53161 4.8956 6.36282 5.06439C6.19404 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.19404 11.5684 6.36282 11.7372C6.53161 11.906 6.76052 12.0008 6.99922 12.0008C7.23791 12.0008 7.46683 11.906 7.63561 11.7372C7.8044 11.5684 7.89922 11.3395 7.89922 11.1008V5.70078Z" fill="currentColor"/>
              </svg>
              Delete
            </button>
          </li>
        </ul>
      </div>
    `;
    actionsCell.addEventListener("click", (event) => {
        const dropdown = actionsCell.querySelector("[id$='-dropdown']");
        const {target} = event;
        if (target.closest("[id$='-dropdown']")) {
          return;
        }
        dropdown.classList.toggle("hidden");
      });
    const editButton = actionsCell.querySelector(`[id$="-edit-button"]`);
    editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    fillUpdateFieldsWithData(user_data);
    openUpdateModal();
    ("edit button clicked");
    const update_button = document.getElementById("update_user_edit");
    const delete_button = document.getElementById("delete_user_edit");
    delete_button.addEventListener("click", () => {
            openDeleteModal(user_id = user_data.user_id);
    });
    });
    const previewButton = actionsCell.querySelector(`[id$="-preview-button"]`);
    previewButton.addEventListener("click", (event) => {
        ("preview button clicked");
    event.stopPropagation();
    openPreviewModal();
    fillPreviewFieldsWithData(user_data);
    (user_data);
    });
    const deleteButton = actionsCell.querySelector(`[id$="-delete-button"]`);
    deleteButton.addEventListener("click", (event) => {
        ("delete button clicked");
    event.stopPropagation();
    openDeleteModal(user_id=0);
    const cancelButton = deleteModal.querySelector("[data-modal-toggle='deleteModal']");
            cancelButton.addEventListener("click", closeDeleteModal);
            const confirmButton = deleteModal.querySelector("[type='submit']");
    });
    row.appendChild(actionsCell);
    tableBody = document.getElementById("users_tbl");
    tableBody.appendChild(row);
  }
  function generateDropdown(jsonData) {
    const ulElement = document.createElement("ul");
    ulElement.classList.add("space-y-2", "text-sm");
    ulElement.setAttribute("aria-labelledby", "filterDropdownButton");
    jsonData.forEach(user => {
      const liElement = document.createElement("li");
      liElement.classList.add("flex", "items-center");
      const inputElement = document.createElement("input");
      inputElement.id = `${user.user_id}`;
      inputElement.name = `${user.user_name}`;
      inputElement.type = "checkbox";
      inputElement.value = "";
      inputElement.classList.add(
        "w-4",
        "h-4",
        "bg-gray-100",
        "border-gray-300",
        "rounded",
        "text-primary-600",
        "focus:ring-primary-500",
        "dark:focus:ring-primary-600",
        "dark:ring-offset-gray-700",
        "focus:ring-2",
        "dark:bg-gray-600",
        "dark:border-gray-500"
      );
      inputElement.addEventListener("change", refreshData);
      const labelElement = document.createElement("label");
      labelElement.htmlFor = `user_${user.user_id}`;
      labelElement.classList.add(
        "ml-2",
        "text-sm",
        "font-medium",
        "text-gray-900",
        "dark:text-gray-100"
      );
      labelElement.innerText = `${user.user_first_name} ${user.user_last_name} (${user.user_id})`;
      liElement.appendChild(inputElement);
      liElement.appendChild(labelElement);
      ulElement.appendChild(liElement);
    });  
    const filterDropdown = document.getElementById("filterDropdown"); 
    filterDropdown.appendChild(ulElement);
    const button = document.getElementById("filterDropdownButton");
    button.addEventListener("click", toggleContainerVisibility);
};
      function toggleContainerVisibility() {
          const filterDropdown = document.getElementById("filterDropdown");
          filterDropdown.classList.toggle("hidden");
      };
      function cleanTableBody() {
          const tableBody = document.getElementById("users_tbl");
          tableBody.innerHTML = "";
      };
    function refreshData() {
        let arr =[];
        const selectedCheckboxes = document.querySelectorAll("#filterDropdown input[type='checkbox']:checked");
        selectedCheckboxes.forEach(checkbox => {
            arr.push(checkbox.id);
        });
        const query = arr.join(',');
        cleanTableBody();
        ('/php/managing_tools.php' + '?values='+query);
      fetch('/php/managing_tools.php' + '?values='+query) 
      .then(response => response.json())
      .then(jsonData => {
          (jsonData);
          jsonData.forEach(user => {
            create_user_row(user);
          });
      });
    };
    let actionsDropdownButton = document.getElementById("actionsDropdownButton");
    actionsDropdownButton.addEventListener("click", toggleActionsDropdown);
    function toggleActionsDropdown() {
        const actionsDropdown = document.getElementById("actionsDropdown");
        actionsDropdown.classList.toggle("hidden");
    };
    const modalToggleElements_update = document.querySelectorAll("[target='updateUserModal']");
    const modalToggleElements_preview = document.querySelectorAll("[target='readClientModal']");
    const modalToggleElements_delete = document.querySelectorAll("[target='deleteModal']");
    const modalToggleElements_add = document.querySelectorAll("[target='createUserModal']");
    const updateModal = document.getElementById("updateUserModal");
    const previewModal = document.getElementById("readClientModal");
    const deleteModal = document.getElementById("deleteModal");
    const addModal = document.getElementById("createUserModal");
    const closeModalButton = updateModal.querySelector("[data-modal-toggle='updateUserModal']");
    ("closeModalButton" + closeModalButton);
    (closeModalButton);
    const closeModalButton_preview = previewModal.querySelector("[data-modal-toggle='readClientModal']");
    ("closeModalButton_preview" + closeModalButton_preview);
    const closeModalButton_delete = deleteModal.querySelector("[data-modal-toggle='deleteModal']");
    const closeModalButton_add = addModal.querySelector("[data-modal-toggle='createUserModal']");
    modalToggleElements_update.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const modalTarget = element.getAttribute("data-modal-target");
        const modal = document.getElementById(modalTarget);
        const closeModalButton = modal.querySelector("[data-modal-toggle='" + modalTarget + "']");
        closeModalButton.addEventListener("click", closeUpdateModal);
        modal.addEventListener("click", (event) => {
          if (event.target === modal) {
            closeUpdateModal();
          }
        });
      });
    });
    modalToggleElements_preview.forEach((element) => {
        ("element is" + element);
      element.addEventListener("click", (event) => {
        event.preventDefault();
        ("clicked");
        ("event" + event);
        ("target" + event.target);
        const modalTarget = element.getAttribute("data-modal-target");
        ("modatl target" + modalTarget);
        const modal = document.getElementById(modalTarget);
        ("modal" + modal);
        const closeModalButton = modal.querySelector("[data-modal-toggle='" + modalTarget + "']");
        ("close modal button" + closeModalButton);
        closeModalButton.addEventListener("click", closePreviewModal);
        modal.addEventListener("click", (event) => {
          if (event.target === modal) {
            closePreviewModal();
          }
        });
      });
    });
    modalToggleElements_delete.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const modalTarget = element.getAttribute("data-modal-target");
        const modal = document.getElementById(modalTarget);
        const closeModalButton = modal.querySelector("[data-modal-toggle='" + modalTarget + "']");
        closeModalButton.addEventListener("click", closeDeleteModal);
        modal.addEventListener("click", (event) => {
          if (event.target === modal) {
            closeDeleteModal();
          }
        });
  
      });
    });
    modalToggleElements_add.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            const modalTarget = element.getAttribute("data-modal-target");
            const modal = document.getElementById(modalTarget);
            const closeModalButton = modal.querySelector("[data-modal-toggle='" + modalTarget + "']");
            closeModalButton.addEventListener("click", closeAddModal);
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    closeAddModal();
                }
            });
        });
    });
    closeModalButton.addEventListener("click", closeUpdateModal);
    closeModalButton_preview.addEventListener("click", closePreviewModal);
    closeModalButton_delete.addEventListener("click", closeDeleteModal);
    closeModalButton_add.addEventListener("click", closeAddModal);
  function openUpdateModal() {
    let update_modal = document.getElementById("updateUserModal");
    update_modal.classList.remove("hidden");
  }
  function closeUpdateModal() {
    ("closeUpdateModal");
    let update_modal = document.getElementById("updateUserModal");
    update_modal.classList.add("hidden");
  }
  function fillUpdateFieldsWithData(user_data) {
    const userIdInput = document.getElementById("userId");
    const firstNameInput = document.getElementById("firstName");
    const usernameInput = document.getElementById("username");
    const lastNameInput = document.getElementById("lastName");
    const passwordInput = document.getElementById("password");
    const userTypeInput = document.getElementById("userType");
    const lastModifiedDateInput = document.getElementById("lastModifiedDate");
    userIdInput.value = user_data.user_id;
    firstNameInput.value = user_data.user_first_name;
    usernameInput.value = user_data.username;
    lastNameInput.value = user_data.user_last_name;
    passwordInput.value = user_data.user_password;
    userTypeInput.value = user_data.user_type;
    lastModifiedDateInput.value = user_data.last_modified_date;
  }
function openPreviewModal() {
    let preview_modal = document.getElementById("readClientModal");
    preview_modal.classList.remove("hidden");
};
function closePreviewModal() {
    let preview_modal = document.getElementById("readClientModal");
    preview_modal.classList.add("hidden");
}
function fillPreviewFieldsWithData(user_data) {
    let user_id = document.getElementById("user_id");
    let user_first_name = document.getElementById("user_first_name");
    let username = document.getElementById("username");
    let user_last_name = document.getElementById("user_last_name");
    let user_password = document.getElementById("user_password");
    let user_type = document.getElementById("user_type");
    let last_modified_date = document.getElementById("last_modified_date");

    user_id.innerHTML += user_data.user_id;
    user_first_name.innerHTML += user_data.user_first_name;
    username.innerHTML += user_data.username;
    user_last_name.innerHTML += user_data.user_last_name;
    user_password.innerHTML += user_data.user_password;
    user_type.innerHTML += user_data.user_type;
    last_modified_date.innerHTML += user_data.last_modified_date;
};
function openDeleteModal(user_id=0) {
    let delete_modal = document.getElementById("deleteModal");
    delete_modal.classList.remove("hidden");
}
function closeDeleteModal() {
    let delete_modal = document.getElementById("deleteModal");
    delete_modal.classList.add("hidden");
}
function openAddModal() {
    let add_modal = document.getElementById("createUserModal");
    add_modal.classList.remove("hidden");
}
function closeAddModal() {
    let add_modal = document.getElementById("createUserModal");
    add_modal.classList.add("hidden");
}
function handleConfirmDeleteUser(user_data) {
    fetch(`/php/crud_users.php?delete_user=${user_data.user_id}`)
      .then(response => response.json())
      .then(data => {
        ("Success:", data);
        if (data == 200) {
          window.location.href = "managing_tools.php";
        } else {
          alert("User could not be deleted");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while deleting the user");
      });
  }
  function handleUpdateUser(user_data) {
    ("handleUpdateUser");
    (user_data);
    const data = {
    user_id: user_data.userID,
    user_first_name: user_data.firstName,
    username: user_data.username,
    user_last_name: user_data.lastName,
    user_password: user_data.password,
    user_type: user_data.userType,
    };
    const jsonData = JSON.stringify(data);
    fetch("/php/crud_users.php?update_user=" + user_data.userId, {
      method: "PUT",
      body: jsonData
    })
      .then(response => response.status)
      .then(data => {
        if (data === 200) {
          window.location.href = "managing_tools.php";
        } else {
          alert("User could not be updated");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while updating the user");
      });
  }
  document.getElementById("update_modal_form").addEventListener("submit", event => {
    ("update_modal_form");
    event.preventDefault();
    let form_data = new FormData(event.target);
    let user_data = Object.fromEntries(form_data.entries());
    (user_data);
    handleUpdateUser(user_data);
  });
document.getElementById("delete_modal_form").addEventListener("submit", event => {
  ("delete_modal_form");
  event.preventDefault();
  let form_data = new FormData(event.target);
  let user_data = Object.fromEntries(form_data.entries());
  handleConfirmDeleteUser(user_data);
});
document.getElementById("edit_user_preview").addEventListener("click", openUpdateModal);
document.getElementById("delete_user_preview").addEventListener("click", openDeleteModal);
document.getElementById("action_edit").addEventListener("click", openUpdateModal);
document.getElementById("action_delete").addEventListener("click", openDeleteModal);
document.getElementById("action_add").addEventListener("click", openAddModal);
document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    (event);
    (event.target);
    (event.target.elements);
    (event.target.elements.firstName);
    (event.target.elements.firstName.value);
    (event.target.elements.lastName.value);
    (event.target.elements.username.value);
    (event.target.elements.password.value);
    let firstName = event.target.elements.firstName.value;
    let lastName = event.target.elements.lastName.value;
    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;
    let userType = event.target.elements.userType.value;
    let user = {
      firstName: firstName,
      username: username,
      lastName: lastName,
      password: password,
      userType: userType
    };
    (user);
    const controller = new AbortController();
    const {signal} = controller;
    const timeoutValue = 10000;    
    const timeout = setTimeout(() => {
      controller.abort(); 
    }, timeoutValue);
    
    fetch('/php/crud_users.php?add_user=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      signal: signal 
    })
      .then(response => {
        clearTimeout(timeout); 
        return response.json();
      })
      .then(data => {
        ('Success:', data);
        if (data === true) {
          window.location.href = "managing_tools.php";
        } else {
          alert("User could not be added");
        }
      })
      .catch(error => {
        clearTimeout(timeout); 
        console.error('Error:', error);
      });
    });    
const table = document.getElementById('users_tbl');
const rowsPerPage = 20;
const rowCount = table.rows.length;
const totalPages = Math.ceil(rowCount / rowsPerPage);
const navContainer = document.querySelector('.table-navigation');
const nav = document.createElement('nav');
nav.className = 'flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4';
nav.setAttribute('aria-label', 'Table navigation');
const infoSpan = document.createElement('span');
infoSpan.className = 'text-sm font-normal text-gray-500 dark:text-gray-400';
const infoText = document.createTextNode(`Showing 1-${rowsPerPage} of ${rowCount}`);
infoSpan.appendChild(infoText);
const ul = document.createElement('ul');
ul.className = 'inline-flex items-stretch -space-x-px';
const prevLi = document.createElement('li');
const prevButton = createNavButton('Previous', 'Previous', 'flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white');
prevLi.appendChild(prevButton);
for (let i = 1; i <= totalPages; i++) {
  const li = document.createElement('li');
  const pageButton = createNavButton(i, i, 'flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white');
  li.appendChild(pageButton);
  ul.appendChild(li);
}
const nextLi = document.createElement('li');
const nextButton = createNavButton('Next', 'Next', 'flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white');
nextLi.appendChild(nextButton);
nav.appendChild(infoSpan);
nav.appendChild(ul);
navContainer.appendChild(nav);
function createNavButton(text, ariaLabel, className) {
  const button = document.createElement('a');
  button.href = '#';
  button.className = className;
  button.setAttribute('aria-label', ariaLabel);
  button.textContent = text;
  return button;
}
function updateNavigationButtons() {
prevButton.disabled = currentPage === 1;
nextButton.disabled = currentPage === totalPages;
pageButtons.forEach((button) => {
  button.classList.remove('active');
});
  pageButtons[currentPage - 1].classList.add('active');
}
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updateNavigationButtons();
  }
}
function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateNavigationButtons();
  }
}
function goToPage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    updateNavigationButtons();
  }
}
prevButton.addEventListener('click', goToPreviousPage);
nextButton.addEventListener('click', goToNextPage);
const pageButtons = ul.querySelectorAll('li a');
pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    goToPage(index + 1);
  });
});
let currentPage = 1;
updateNavigationButtons();
