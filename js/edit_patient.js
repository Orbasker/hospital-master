

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  

  search_patient = document.getElementById('search_patient');
  search_patient.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('edit_patient');
    const formData = new FormData(search_patient    );
    // console.log(formData);
    // console.log(formData.get('id'));
    // closeModal();
    // Make a POST request to the php/login.php page, passing the form data as the body of the request
    fetch('php/search_edit.php?crud=select', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        data = JSON.parse(data)
        if (data.status === 'Patient found') {
            search_patient = document.getElementById('search_patient').classList.add('hidden');
            ;
            let patient = data[0];
            // console.log(data);
        //    console.log(data[0]);
            //  console.log(data[0].patient_first_name);
            // console.log(data[1]);
                    // Get the form element
            let form = document.getElementById('edit');
            form.classList.remove('hidden');
            
            // Populate the form fields with the data
            // if (data.length > 0) {
            // const patient = data[0];

            // Personal Information
            document.getElementById('first-name').setAttribute('value', patient.patient_first_name);
            console.log(patient.patient_first_name);
            console.log(document.getElementById('first-name'));
            // console.log(data);
            document.getElementById('last-name').value = patient.patient_last_name;
            document.getElementById('patient_id').value = patient.patient_id;

            // Medical Information
            document.getElementById('departments').value = patient.patient_department;
            document.getElementById('doctors').value = patient.patient_doctor;
            document.getElementById('nurses').value = patient.patient_nurse;

            // Estimated Time
            const estimatedTime = patient.patient_estimated_time;
            if (estimatedTime === '0') {
                document.getElementById('one_day').checked = true;
            } else if (estimatedTime === '1') {
                document.getElementById('two_day').checked = true;
            } else if (estimatedTime === '2') {
                document.getElementById('three_day').checked = true;
            }

        } else {
            console.log(data);
            console.log(data.status);
            alert(data.status);
        }
        
    })
    
    });

    let form = document.getElementById('edit');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData);
        console.log(formData.get('first-name'));
        // Make a POST request to the php/login.php page, passing the form data as the body of the request
        fetch('php/search_edit.php?crud=update', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status === 'Patient updated successfully') {
               
                window.location.href = 'index.php';
            } else {
                console.log(data);
                console.log(data.status);
                // const alertMessage = document.getElementById('alert-meesage');
                // alertMessage.innerHTML = data.message;
                // // alertMessage.classList
                // alertMessage.classList.remove('hidden');
            }
        })
    }
)