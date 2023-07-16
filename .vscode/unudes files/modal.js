(function() {
    // Get all elements that should open the modal
    const modalToggleElements_update = document.querySelectorAll("[target='updateUserModal']");
    const modalToggleElements_preview = document.querySelectorAll("[target='readClientModal']");
    const modalToggleElements_delete = document.querySelectorAll("[target='deleteModal']");
  
    // Get the update modal element
    const updateModal = document.getElementById("updateUserModal");
    const previewModal = document.getElementById("readClientModal");
    const deleteModal = document.getElementById("deleteModal");
  
    // Get the close button inside the modal
    const closeModalButton = updateModal.querySelector("[data-modal-toggle='updateUserModal']");
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
  
    
  })();
  

  // Function to close the update modal
  function closeUpdateModal() {
    console.log("closeUpdateModal");
    let update_modal = document.getElementById("updateUserModal");
    update_modal.classList.add("hidden");
  }

  // Function to close the preview modal
  function closePreviewModal() {
    console.log("closePreviewModal");
    let preview_modal = document.getElementById("readClientModal");
    preview_modal.classList.add("hidden");
  }

  // Function to close the delete modal
  function closeDeleteModal() {
    console.log("closeDeleteModal");
    let delete_modal = document.getElementById("deleteModal");
    delete_modal.classList.add("hidden");
  }

  // Your other functions and event listeners go here
  // ...