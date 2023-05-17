let is_clicked = true;
    avatarButton = document.getElementById('avatarButton');
    avatarButton.addEventListener('click', function() {
     
    userDropdown = document.getElementById('userDropdown');
    if (is_clicked) {
    userDropdown.classList.remove('hidden');
    is_clicked = false;
    } else {
      userDropdown.classList.add('hidden');
      is_clicked = true;
    }
    });
  