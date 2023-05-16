        // Function to determine the fill color based on occupancy level

function getFillColor(occupancyLevel) {
    switch (occupancyLevel) {
      case 'high':
        return '#BD362F';
      case 'medium':
        return '#4ECB71';
      case 'low':
        return '#FFC40D';
      default:
        return '#000000';
    }
}
    // const department_load = {
    //   "logs": [
    //     {
    //       "department": "Children",
    //       "occupancyLevel": "high"
    //     },
    //     {
    //       "department": "Neurology",
    //       "occupancyLevel": "medium"
    //     },
    //     {
    //       "department": "Maternity",
    //       "occupancyLevel": "low"
    //     },
    //     {
    //       "department": "Surgery",
    //       "occupancyLevel": "medium"
    //     },
    //     {
    //       "department": "Emergency A",
    //       "occupancyLevel": "low"
    //     },
    //     {
    //       "department": "Emergency B",
    //       "occupancyLevel": "low"
    //     }
    //   ]
    // };

    // const doctors = [
    //     {
    //       "name": "Prof. Uri Peled",
    //       "department": "Otolaryngology",
    //       "phoneNumber": "0524443230"
    //     },
    //     {
    //       "name": "Dr. Schwartz Or",
    //       "department": "Maternity",
    //       "phoneNumber": "0524371230"
    //     },
    //     {
    //       "name": "Dr. Bar Or Shira",
    //       "department": "Radiology",
    //       "phoneNumber": "0535743230"
    //     },
    //     {
    //       "name": "Prof. Uri Peled",
    //       "department": "Radiology",
    //       "phoneNumber": "0535743230"
    //     },
    //     {
    //       "name": "Dr. Bar On Odel",
    //       "department": "Children",
    //       "phoneNumber": "0505223230"
    //     }
    //   ];
      
    // window.onload = function () {
    //     fetch('components/department-load.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const loads = data.logs;
      
    //     // Get the logs container element
    //     const loadContainer = document.getElementById('loadContainer');
      
    //     // Create HTML markup for each log entry
    //     const logsHTML = loads.map(log => {
    //       const departmentName = log.department;
    //       const {occupancyLevel} = log;
    //       const fillColor = getFillColor(occupancyLevel);
      
    //       return `
    //         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    //           <th scope="row" class="px-2 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${departmentName}</th>
    //           <td class="flex justify-center items-center">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="${fillColor}" class="bi bi-circle-fill" viewBox="0 0 16 16">
    //               <circle cx="8" cy="8" r="8"/>
    //             </svg>
    //           </td>
    //         </tr>
    //       `;
    //     }).join('');
    //     // Set the generated HTML markup inside the logs container
    //     loadContainer.innerHTML = `
    //       <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
    //         <thead class="text-xs md:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //           <tr>
    //             <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Department</th>
    //             <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Occupancy Level</th>
    //           </tr>
    //         </thead>
    //         <tbody>${logsHTML}</tbody>
    //       </table>
    //     `;

  
    // })
      
        
      
        
    //     //doctors on load
    //     fetch('components/doctors.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         const tbody = document.getElementById('doctorsContainer');
      
    //         data.forEach(doctor => {
    //           const row = document.createElement('tr');
    //           row.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
      
    //           const nameCell = document.createElement('th');
    //           nameCell.scope = 'row';
    //           nameCell.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');
    //           nameCell.textContent = doctor.name;
      
    //           const departmentCell = document.createElement('td');
    //           departmentCell.classList.add('px-6', 'py-4');
    //           departmentCell.textContent = doctor.department;
      
    //           const phoneNumberCell = document.createElement('td');
    //           phoneNumberCell.classList.add('px-6', 'py-4');
    //           phoneNumberCell.textContent = doctor.phoneNumber;
      
    //           row.appendChild(nameCell);
    //           row.appendChild(departmentCell);
    //           row.appendChild(phoneNumberCell);
    //           tbody.appendChild(row);
    //         });
            
    //         });
            



    //     //logs

    //     // Fetch the JSON file containing system recommendation logs
    //     fetch('components/logs.json')
    //     .then(response => response.json())
    //     .then(data => {
    //     const logsContainer = document.getElementById('logsContainer'); // Get the container element to hold the logs

    //     // Generate HTML content for each log
    //     const logsHTML = data.map(log => {
    //         const {logId, logText} = log;
    //         const detailsLink = log.detailsLink || '';

    //         return `
    //         <li class="p-4">
    //             <div class="flex items-center justify-between">
    //             <span class="tdark:text-white">Log ${logId}</span>
    //             </div>
    //             <p class="tdark:text-white">${logText}<a href="${detailsLink}" color="#2563eb">Click for more details.</a></p>
    //         </li>
    //         `;
    //     }).join('');

    //     // Insert the generated HTML content into the logs container
    //     logsContainer.innerHTML = `
    //         <ul class="shadow-md rounded-lg divide-y divide-gray-50">${logsHTML}</ul>
    //     `;
    //     })
    //     .catch(error => {
    //     console.error('Error fetching system recommendation logs:', error);
    //     });

    //     console.log("window loaded");
    //   };
      
      //new test

      window.onload = function () {
        fetch('components/department-load.json')
          .then(response => response.json())
          .then(data => {
            const loads = data.logs;
       // Get the logs container element
       const loadContainer = document.getElementById('loadContainer');
      
       // Create HTML markup for each log entry
       const logsHTML = loads.map(log => {
         const departmentName = log.department;
         const {occupancyLevel} = log;
         const fillColor = getFillColor(occupancyLevel);
     
         return `
           <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-2 py-3 md:px-6 md:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${departmentName}</th>
             <td class="flex justify-center items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="${fillColor}" class="bi bi-circle-fill" viewBox="0 0 16 16">
                 <circle cx="8" cy="8" r="8"/>
               </svg>
             </td>
           </tr>
         `;
       }).join('');
       // Set the generated HTML markup inside the logs container
       loadContainer.innerHTML = `
         <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
           <thead class="text-xs md:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
             <tr>
               <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Department</th>
               <th scope="col" class="px-2 py-2 md:px-6 md:py-3">Occupancy Level</th>
             </tr>
           </thead>
           <tbody>${logsHTML}</tbody>
         </table>
       `;
            // Rest of the code for processing department load data
          })
          .catch(error => {
            console.error('Error fetching department load data:', error);
          });
      
        fetch('components/doctors.json')
          .then(response => response.json())
          .then(data => {
            const tbody = document.getElementById('doctorsContainer');
      
            // Rest of the code for processing doctors data
            data.forEach(doctor => {
                const row = document.createElement('tr');
                row.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700');
        
                const nameCell = document.createElement('th');
                nameCell.scope = 'row';
                nameCell.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white');
                nameCell.textContent = doctor.name;
        
                const departmentCell = document.createElement('td');
                departmentCell.classList.add('px-6', 'py-4');
                departmentCell.textContent = doctor.department;
        
                const phoneNumberCell = document.createElement('td');
                phoneNumberCell.classList.add('px-6', 'py-4');
                phoneNumberCell.textContent = doctor.phoneNumber;
        
                row.appendChild(nameCell);
                row.appendChild(departmentCell);
                row.appendChild(phoneNumberCell);
                tbody.appendChild(row);
              });
          })
          .catch(error => {
            console.error('Error fetching doctors data:', error);
          });
      
        fetch('components/logs.json')
          .then(response => response.json())
          .then(data => {
            const logsContainer = document.getElementById('logsContainer');
      
            // Rest of the code for processing logs data
             // Generate HTML content for each log
        const logsHTML = data.map(log => {
            const {logId, logText} = log;
            const detailsLink = log.detailsLink || '';

            return `
            <li class="p-4">
                <div class="flex items-center justify-between">
                <span class="tdark:text-white">Log ${logId}</span>
                </div>
                <p class="tdark:text-white">${logText}<a href="${detailsLink}" color="#2563eb">Click for more details.</a></p>
            </li>
            `;
        }).join('');

        // Insert the generated HTML content into the logs container
        logsContainer.innerHTML = `
            <ul class="shadow-md rounded-lg divide-y divide-gray-50">${logsHTML}</ul>
        `;
          })
          .catch(error => {
            console.error('Error fetching system recommendation logs:', error);
          });
      
        console.log("window loaded");
      };
      
      
            
          
          
      