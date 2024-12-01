function showTab(event, tabId) {
    event.preventDefault();

    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    var tabContent = document.getElementById(tabId);
    tabContent.classList.add("active");
}

function saveAppointment(event) {
event.preventDefault();

var patientName = document.getElementById("patient-name").value;
var appointmentDate = document.getElementById("appointment-date").value;
var appointmentTime = document.getElementById("appointment-time").value;
var selectedDoctor = document.getElementById("doctor").value;
var selectedLab = document.getElementById("lab").value;
var selectedStatus = document.getElementById("status").value;

var isExistingAppointment = upcomingAppointments.some(function (appointment) {
return (
    appointment.patient === patientName &&
    appointment.date === appointmentDate &&
    appointment.time === appointmentTime &&
    appointment.doctor === selectedDoctor &&
    appointment.lab === selectedLab
);
});

var hasClash = upcomingAppointments.some(function (appointment) {
return (
    appointment.date === appointmentDate &&
    appointment.time === appointmentTime &&
    appointment.doctor === selectedDoctor &&
    appointment.lab === selectedLab
);
});

var newAppointmentForm = document.getElementById("new-content");
var successMsg = document.getElementById("success-msg");
var errorMsg = document.getElementById("error-msg");

if (isExistingAppointment || hasClash) {
errorMsg.textContent = "Appointment clashes with an existing appointment.";
errorMsg.style.display = "block";
successMsg.style.display = "none";
} else {
var appointmentDetails = {
    patient: patientName,
    date: appointmentDate,
    time: appointmentTime,
    doctor: selectedDoctor,
    lab: selectedLab,
    status: selectedStatus
};

upcomingAppointments.push(appointmentDetails);
updateUpcomingAppointments();

successMsg.textContent = "Appointment saved successfully!";
successMsg.style.display = "block";
errorMsg.style.display = "none";

// Clear form fields
document.getElementById("patient-name").value = "";
document.getElementById("appointment-date").value = "";
document.getElementById("appointment-time").value = "";
document.getElementById("doctor").value = "";
document.getElementById("lab").value = "";
document.getElementById("status").value = "";
}

// Scroll to top of the page
window.scrollTo(0, 0);
}


function updateUpcomingAppointments() {
var upcomingContent = document.getElementById("upcoming-content");
upcomingContent.innerHTML = "";

upcomingAppointments.forEach(function (appointment) {
var appointmentDetails = document.createElement("div");
appointmentDetails.innerHTML = `
    <h3>${appointment.patient}</h3>
    <p>Date: ${appointment.date}</p>
    <p>Time: ${appointment.time}</p>
    <p>Doctor: ${appointment.doctor}</p>
    <p>Lab: ${appointment.lab}</p>
    <p>Status: ${appointment.status}</p>
    <hr>
`;
upcomingContent.appendChild(appointmentDetails);
});
}


function getExistingAppointments() {
    var existingAppointments = localStorage.getItem("labAppointments");
    return existingAppointments ? JSON.parse(existingAppointments) : [];
}

function saveExistingAppointments(appointments) {
    localStorage.setItem("labAppointments", JSON.stringify(appointments));
}

// Populate Upcoming Appointments
var upcomingContent = document.getElementById("upcoming-content");
var upcomingAppointments = [
{
patient: "John Smith",
date: "2023-07-10",
time: "10:00 AM",
doctor: "Dr. Johnson",
lab: "Lab A",
status: "Confirmed"
},
{
patient: "Jane Doe",
date: "2023-07-12",
time: "2:30 PM",
doctor: "Dr. Wilson",
lab: "Lab B",
status: "Confirmed"
},
{
patient: "Mike Brown",
date: "2023-07-15",
time: "9:00 AM",
doctor: "Dr. Smith",
lab: "Lab C",
status: "Pending"
}
];

upcomingAppointments.forEach(function (appointment) {
var appointmentDetails = document.createElement("div");
appointmentDetails.innerHTML = `
<h3>${appointment.patient}</h3>
<p>Date: ${appointment.date}</p>
<p>Time: ${appointment.time}</p>
<p>Doctor: ${appointment.doctor}</p>
<p>Lab: ${appointment.lab}</p>
<p>Status: ${appointment.status}</p>
<hr>
`;
upcomingContent.appendChild(appointmentDetails);
});

// Populate Appointment History
var historyContent = document.getElementById("history-content");
var appointmentHistory = [
    {
        patient: "John Smith",
        date: "2023-07-05",
        time: "11:30 AM",
        doctor: "Dr. Johnson",
        lab: "Lab A",
        status: "Completed"
    },
    {
        patient: "Jane Doe",
        date: "2023-07-07",
        time: "3:00 PM",
        doctor: "Dr. Wilson",
        lab: "Lab B",
        status: "Completed"
    },
    {
        patient: "Mike Brown",
        date: "2023-07-09",
        time: "8:30 AM",
        doctor: "Dr. Smith",
        lab: "Lab C",
        status: "Completed"
    }
];

appointmentHistory.forEach(function (appointment) {
    var appointmentDetails = document.createElement("div");
    appointmentDetails.innerHTML = `
        <h3>${appointment.patient}</h3>
        <p>Date: ${appointment.date}</p>
        <p>Time: ${appointment.time}</p>
        <p>Doctor: ${appointment.doctor}</p>
        <p>Lab: ${appointment.lab}</p>
        <p>Status: ${appointment.status}</p>
        <hr>
    `;
    historyContent.appendChild(appointmentDetails);
});