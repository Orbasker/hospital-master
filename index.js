

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
  
// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "World Wine Production 2018"
//     }
//   }
// });