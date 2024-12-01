document.addEventListener('DOMContentLoaded', function() {
    // Hardcoded patient data
    var patients = [
      {
        id: 1,
        name: "John Doe",
        age: 35,
        gender: "Male",
        address: "123 Main St",
        phone: "555-1234",
        email: "john@example.com",
        bloodType: "A+",
        height: "175 cm",
        weight: "70 kg",
        allergies: "Pollen",
        medicalConditions: "Asthma",
        medications: "Aspirin",
        lastVisit: "2022-06-15",
        nextAppointment: "2022-07-10"
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 42,
        gender: "Female",
        address: "456 Oak St",
        phone: "555-5678",
        email: "jane@example.com",
        bloodType: "O-",
        height: "160 cm",
        weight: "60 kg",
        allergies: "Penicillin",
        medicalConditions: "Diabetes",
        medications: "Insulin",
        lastVisit: "2022-05-20",
        nextAppointment: "2022-08-05"
      }
      // Add more patient objects here
    ];
  
    function populateTable() {
      var table = document.getElementById("patientTable");
  
      patients.forEach(function (patient) {
        var row = table.insertRow();
  
        var idCell = row.insertCell();
        idCell.textContent = patient.id;
  
        var nameCell = row.insertCell();
        nameCell.textContent = patient.name;
  
        var ageCell = row.insertCell();
        ageCell.textContent = patient.age;
  
        var genderCell = row.insertCell();
        genderCell.textContent = patient.gender;
  
        var addressCell = row.insertCell();
        addressCell.textContent = patient.address;
  
        var phoneCell = row.insertCell();
        phoneCell.textContent = patient.phone;
  
        var emailCell = row.insertCell();
        emailCell.textContent = patient.email;
  
        var bloodTypeCell = row.insertCell();
        bloodTypeCell.textContent = patient.bloodType;
  
        var heightCell = row.insertCell();
        heightCell.textContent = patient.height;
  
        var weightCell = row.insertCell();
        weightCell.textContent = patient.weight;
  
        var allergiesCell = row.insertCell();
        allergiesCell.textContent = patient.allergies;
  
        var medicalConditionsCell = row.insertCell();
        medicalConditionsCell.textContent = patient.medicalConditions;
  
        var medicationsCell = row.insertCell();
        medicationsCell.textContent = patient.medications;
  
        var lastVisitCell = row.insertCell();
        lastVisitCell.textContent = patient.lastVisit;
  
        var nextAppointmentCell = row.insertCell();
        nextAppointmentCell.textContent = patient.nextAppointment;
        
      });
    }
  
    populateTable();
  
    function searchTable() {
      var input, filter, table, tr, td, i, txtValue, noResultsMessage;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("patientTable");
      tr = table.getElementsByTagName("tr");
      noResultsMessage = document.getElementById("noResultsMessage");
  
      var foundMatch = false;
  
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Index 1 is the name column
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().includes(filter)) {
            tr[i].style.display = "";
            foundMatch = true;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
  
      if (foundMatch) {
        noResultsMessage.style.display = "none";
      } else {
        noResultsMessage.style.display = "block";
      }
    }
  
    function filterByAge() {
      var ageRange = document.getElementById("ageRange");
      var ageValue = document.getElementById("ageValue");
  
      ageValue.textContent = ageRange.value;
  
      var table = document.getElementById("patientTable");
      var tr = table.getElementsByTagName("tr");
  
      for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[2]; // Index 2 is the age column
        if (td) {
          var age = parseInt(td.textContent || td.innerText);
          if (age <= ageRange.value) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  
    // Attach event listeners
    document.getElementById("searchInput").addEventListener("input", searchTable);
    document.getElementById("ageRange").addEventListener("input", filterByAge);
  });
  