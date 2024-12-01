// Hardcoded room details
var roomDetails = [
    {
        roomType: "sharing",
        occupancyStatus: "occupied",
        patientDetails: "John Doe",
        checkInTime: "2022-06-15 10:00 AM",
        checkOutTime: "2022-06-20 11:00 AM",
        queries: ["Issue with AC", "Additional pillow request"]
    },
    {
        roomType: "nonsharing",
        occupancyStatus: "unoccupied",
        patientDetails: "",
        checkInTime: "",
        checkOutTime: "",
        queries: []
    },
    {
        roomType: "ac",
        occupancyStatus: "occupied",
        patientDetails: "Jane Smith",
        checkInTime: "2022-06-18 02:00 PM",
        checkOutTime: "2022-06-25 12:00 PM",
        queries: ["Room cooling issue"]
    },
    {
        roomType: "nonac",
        occupancyStatus:"occupied",
        patientDetails: "Michael Johnson",
        checkInTime: "2022-06-10 08:00 AM",
        checkOutTime: "2022-06-22 10:00 AM",
        queries: []
    }
];

function displayRoomDetails() {
    var sharingCheckbox = document.getElementById("sharingCheckbox");
    var nonsharingCheckbox = document.getElementById("nonsharingCheckbox");
    var acCheckbox = document.getElementById("acCheckbox");
    var nonacCheckbox = document.getElementById("nonacCheckbox");

    var selectedRoomTypes = [];
    if (sharingCheckbox.checked) selectedRoomTypes.push(sharingCheckbox.value);
    if (nonsharingCheckbox.checked) selectedRoomTypes.push(nonsharingCheckbox.value);
    if (acCheckbox.checked) selectedRoomTypes.push(acCheckbox.value);
    if (nonacCheckbox.checked) selectedRoomTypes.push(nonacCheckbox.value);

    var table = document.getElementById("roomDetailsTable");

    // Clear previous table rows
    clearTableRows(table);

    // Populate table with room details
    roomDetails.forEach(function(room) {
        if (selectedRoomTypes.includes(room.roomType)) {
            var row = table.insertRow();

            var roomTypeCell = row.insertCell();
            roomTypeCell.textContent = room.roomType;

            var occupancyStatusCell = row.insertCell();
            occupancyStatusCell.textContent = room.occupancyStatus;

            var patientDetailsCell = row.insertCell();
            patientDetailsCell.textContent = room.patientDetails;

            var checkInTimeCell = row.insertCell();
            checkInTimeCell.textContent = room.checkInTime;

            var checkOutTimeCell = row.insertCell();
            checkOutTimeCell.textContent = room.checkOutTime;

            var queriesCell = row.insertCell();
            if (room.queries.length > 0) {
                var queriesCount = room.queries.length;
                var queriesText = document.createElement("span");
                queriesText.classList.add("queries");
                queriesText.textContent = queriesCount;
                queriesText.addEventListener("click", function() {
                    showMessageBox(room.queries);
                });
                queriesCell.appendChild(queriesText);
            } else {
                queriesCell.textContent = "-";
            }
        }
    });
}

function clearTableRows(table) {
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function showMessageBox(queries) {
    var messageBox = document.getElementById("messageBox");
    var messageList = document.getElementById("messageList");

    // Clear previous messages
    messageList.innerHTML = "";

    // Add queries to message list
    queries.forEach(function(query) {
        var listItem = document.createElement("li");
        listItem.textContent = query;
        messageList.appendChild(listItem);
    });

    // Show message box
    messageBox.style.display = "block";
}

function hideMessageBox() {
    var messageBox = document.getElementById("messageBox");
    messageBox.style.display = "none";
}