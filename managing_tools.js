fetch('/managing_tools.php')
.then(response => response.json())
.then(data => {
    console.log(data);
    generateDropdown(data);
    data.forEach(user => {
        create_user_row(user);
    });
  // Call functions to render the user data table, perform CRUD operations, and handle sorting/filtering
//   renderUserTable(data);
  // Add code for CRUD operations and filtering/sorting here

})
.catch(error => {
  console.error('Error:', error);
});
document.addEventListener('DOMContentLoaded', () => {
    const userTable = document.getElementById('userTable');
  
    
  });
  

  function create_user_row(user_data) {
    // Create the table row element
    let row = document.createElement('tr');
    row.classList.add('border-b', 'dark:border-gray-700');
  
    // Create and append the table cell for the user ID
    let userIdCell = document.createElement('td');
    userIdCell.classList.add('px-4', 'py-3');
    userIdCell.textContent = user_data.user_id;
    row.appendChild(userIdCell);
  
    // Create and append the table cell for the user first name
    let firstNameCell = document.createElement('td');
    firstNameCell.classList.add('px-4', 'py-3');
    firstNameCell.textContent = user_data.user_first_name;
    row.appendChild(firstNameCell);
  
    // Create and append the table cell for the username
    let usernameCell = document.createElement('td');
    usernameCell.classList.add('px-4', 'py-3');
    usernameCell.textContent = user_data.username;
    row.appendChild(usernameCell);
  
    // Create and append the table cell for the user last name
    let lastNameCell = document.createElement('td');
    lastNameCell.classList.add('px-4', 'py-3');
    lastNameCell.textContent = user_data.user_last_name;
    row.appendChild(lastNameCell);
  
    // Create and append the table cell for the user password
    let passwordCell = document.createElement('td');
    passwordCell.classList.add('px-4', 'py-3');
    passwordCell.textContent = user_data.user_password;
    row.appendChild(passwordCell);
  
    // Create and append the table cell for the user type
    let userTypeCell = document.createElement('td');
    userTypeCell.classList.add('px-4', 'py-3');
    userTypeCell.textContent = user_data.user_type;
    row.appendChild(userTypeCell);
  
    // Create and append the table cell for the user creation date
    let createDateCell = document.createElement('td');
    createDateCell.classList.add('px-4', 'py-3');
    createDateCell.textContent = user_data.user_create_date;
    row.appendChild(createDateCell);
  
    // Create and append the table cell for the last modified date
    let lastModifiedDateCell = document.createElement('td');
    lastModifiedDateCell.classList.add('px-4', 'py-3');
    lastModifiedDateCell.textContent = user_data.last_modified_date;
    row.appendChild(lastModifiedDateCell);
  
    // Create and append the table cell for the actions
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
            <button type="button" id="${user_data.user_id}-edit-button" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
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
          // Clicked inside the dropdown, do nothing
          return;
        }
      
        dropdown.classList.toggle("hidden");
      });
    //   console.log(actionsCell);
    //   console.log(actionsCell.querySelector(`-edit-button`));
    //  // ...
    const editButton = actionsCell.querySelector(`[id$="-edit-button"]`);
    editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    fillUpdateFieldsWithData(user_data);
    openUpdateModal();
    console.log("edit button clicked");
    const update_button = document.getElementById("update_user_edit");
    // update_button.addEventListener("click", (handleUpdateUser(user_data)));

    const delete_button = document.getElementById("delete_user_edit");
    // console.log(delete_button);
    delete_button.addEventListener("click", () => {
            openDeleteModal(user_id = user_data.user_id);
    //     const cancelButton = deleteModal.querySelector("[data-modal-toggle='deleteModal']");
    //     cancelButton.addEventListener("click", closeDeleteModal);
    //     const confirmButton = deleteModal.querySelector("[type='submit']");
    //     confirmButton.addEventListener("click", (handleConfirmDeleteUser(user_data)));
    //     console.log("delete button clicked in edit modal");
    

    });
    });
    const previewButton = actionsCell.querySelector(`[id$="-preview-button"]`);
    // console.log(previewButton);
    previewButton.addEventListener("click", (event) => {
        console.log("preview button clicked");
    event.stopPropagation();
    openPreviewModal();
    fillPreviewFieldsWithData(user_data);
    
    console.log(user_data);
    });
    const deleteButton = actionsCell.querySelector(`[id$="-delete-button"]`);
    deleteButton.addEventListener("click", (event) => {
        console.log("delete button clicked");
    event.stopPropagation();
    openDeleteModal(user_id=0);
    const cancelButton = deleteModal.querySelector("[data-modal-toggle='deleteModal']");
            cancelButton.addEventListener("click", closeDeleteModal);
            const confirmButton = deleteModal.querySelector("[type='submit']");
            // confirmButton.addEventListener("submit", (handleConfirmDeleteUser(user_data)));
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
  
      // Function to toggle the dropdown visibility
      function toggleContainerVisibility() {
          const filterDropdown = document.getElementById("filterDropdown");
          filterDropdown.classList.toggle("hidden");
      };
    //function to clean the table body
      function cleanTableBody() {
          const tableBody = document.getElementById("users_tbl");
          tableBody.innerHTML = "";
      };
    // Function to refresh the data
    function refreshData() {
        // let query = "";
        let arr =[];
        const selectedCheckboxes = document.querySelectorAll("#filterDropdown input[type='checkbox']:checked");
        // const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.name);
        selectedCheckboxes.forEach(checkbox => {
            arr.push(checkbox.id);
        });
        // console.log(arr);
        // const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.id);
        const query = arr.join(',');
        cleanTableBody();
      
    
        console.log('/managing_tools.php' + '?values='+query);
      fetch('/managing_tools.php' + '?values='+query) 
      .then(response => response.json())
      .then(jsonData => {
          console.log(jsonData);
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
//           // Get the add product option and add a click event listener
// const addProductOption = document.getElementById("addProductOption");
// addProductOption.addEventListener("click", addProduct);

// // Function to handle the click event of the add product option
// function addProduct(event) {
//   event.preventDefault();
//   // Add your code here to handle the "Add product" functionality
//   console.log("Add product clicked");
// }


document.addEventListener("DOMContentLoaded", function() {
    // Get all elements that should open the modal
    const modalToggleElements_update = document.querySelectorAll("[target='updateProductModal']");
    // console.log(modalToggleElements_update);
    const modalToggleElements_preview = document.querySelectorAll("[target='readClientModal']");
    // console.log(modalToggleElements_preview);
    const modalToggleElements_delete = document.querySelectorAll("[target='deleteModal']");
    // console.log(modalToggleElements_delete);
    // Get the update modal element
    const updateModal = document.getElementById("updateProductModal");
    const previewModal = document.getElementById("readClientModal");
    const deleteModal = document.getElementById("deleteModal");

    // Get the close button inside the modal
    const closeModalButton = updateModal.querySelector("[data-modal-toggle='updateProductModal']");
    const closeModalButton_preview = previewModal.querySelector("[data-modal-toggle='readClientModal']");
    const closeModalButton_delete = deleteModal.querySelector("[data-modal-toggle='deleteModal']");

    
    // Add a click event listener to each modal toggle element
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
        element.addEventListener("click", (event) => {
            event.preventDefault();
            const modalTarget = element.getAttribute("data-modal-target");
            const modal = document.getElementById(modalTarget);
            const closeModalButton = modal.querySelector("[data-modal-toggle='" + modalTarget + "']");
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

    // Add a click event listener to the close button
    closeModalButton.addEventListener("click", closeUpdateModal);
    closeModalButton_preview.addEventListener("click", closePreviewModal);
    closeModalButton_delete.addEventListener("click", closeDeleteModal);

});


  function openUpdateModal() {
    let update_modal = document.getElementById("updateProductModal");
    update_modal.classList.remove("hidden");
  }

  // Function to close the update modal
  function closeUpdateModal() {
    console.log("closeUpdateModal");
    let update_modal = document.getElementById("updateProductModal");
    update_modal.classList.add("hidden");
  }
  
  function fillUpdateFieldsWithData(user_data) {
    // Sample data object
    // Retrieve the input elements
    const userIdInput = document.getElementById("userId");
    const firstNameInput = document.getElementById("firstName");
    const usernameInput = document.getElementById("username");
    const lastNameInput = document.getElementById("lastName");
    const passwordInput = document.getElementById("password");
    const userTypeInput = document.getElementById("userType");
    const lastModifiedDateInput = document.getElementById("lastModifiedDate");
  
    // Set the values of the input fields
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
    fetch(`/managing_tools.php?delete_user=${user_data.user_id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        if (data == 200) {
          window.location.href = "managing_tools.html";
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
    console.log("handleUpdateUser");
    console.log(user_data);
    
    const data = {
       
        user_id: user_data.userID,
        user_first_name: user_data.firstName,
        username: user_data.username,
        user_last_name: user_data.lastName,
        user_password: user_data.password,
        user_type: user_data.userType,
        

    };
    // Convert user_data to JSON string
    const jsonData = JSON.stringify(data);
  
    // Send a PUT request to the server
    fetch("/managing_tools.php?update_user=" + user_data.userId, {
      method: "PUT",
      body: jsonData
    })
      .then(response => response.status)
      .then(data => {
        if (data === 200) {
          window.location.href = "managing_tools.html";
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
    console.log("update_modal_form");
    event.preventDefault();
    let form_data = new FormData(event.target);
    let user_data = Object.fromEntries(form_data.entries());
    console.log(user_data);
    handleUpdateUser(user_data);
  });

  document.getElementById("delete_modal_form").addEventListener("submit", event => {
    console.log("delete_modal_form");
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

// document.getElementById("createUserModal").addEventListener("click", openAddModal);

document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    console.log(event);
    console.log(event.target);
    console.log(event.target.elements);
    console.log(event.target.elements.firstName);
    console.log(event.target.elements.firstName.value);
    console.log(event.target.elements.lastName.value);
    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
    // Get form data
    let firstName = event.target.elements.firstName.value;
    let lastName = event.target.elements.lastName.value;
    let username = event.target.elements.username.value;
    let password = event.target.elements.password.value;
    let userType = event.target.elements.userType.value;
  
    // Create user object
    let user = {
      firstName: firstName,
      username: username,
      lastName: lastName,
      password: password,
      userType: userType
    };
    console.log(user);
    // Send user data as JSON to PHP script
    const controller = new AbortController();
    const {signal} = controller;
    
    // Set the desired timeout value in milliseconds
    const timeoutValue = 10000; // 5 seconds
    
    // Start the timer
    const timeout = setTimeout(() => {
      controller.abort(); // Abort the request if it takes too long
    }, timeoutValue);
    
    fetch('/managing_tools.php?add_user=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      signal: signal // Pass the signal option
    })
      .then(response => {
        clearTimeout(timeout); // Clear the timeout if the request completes within the timeout value
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        if (data === true) {
          window.location.href = "managing_tools.html";
        } else {
          alert("User could not be added");
        }
      })
      .catch(error => {
        clearTimeout(timeout); // Clear the timeout if an error occurs
        console.error('Error:', error);
      });
    });
    