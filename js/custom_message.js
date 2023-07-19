document.addEventListener('DOMContentLoaded', function() {
messageModal = document.getElementById('messageModal');
            closeModalButton = document.getElementById('closeModalButton');
            closeModalButton.addEventListener('click', function() {
                messageModal.classList.add('hidden');
            });
        agreeButton = document.getElementById('agree');
        agreeButton.addEventListener('click', function() {
            messageModal.classList.add('hidden');
        });
    });