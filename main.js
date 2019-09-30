// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDLaM0vvfKkBIveJQaphcpPAKioethJ_5E",
    authDomain: "conform-ad2d3.firebaseapp.com",
    databaseURL: "https://conform-ad2d3.firebaseio.com",
    projectId: "conform-ad2d3",
    storageBucket: "",
    messagingSenderId: "332122214570",
    appId: "1:332122214570:web:ccf408c4b921faa89240d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var arr = [];


var rootRef = firebase.database().ref("messages");
rootRef.on("value", snap => {
    var temp = snap.val();

    for (var i in temp) {
        arr.push(temp[i]);
    }

    console.log(arr);

    //ACCESS LIKE THIS:
    // console.log(arr[0].company);

    //put values from arr[] to HTML <DO WITH FUNCTION>
    loadFromDatabase();
})

function loadFromDatabase() {
    var myTable = document.getElementById("main_table");
    for (var i = 0; i < arr.length; i++) {
        var tableRow = document.createElement("tr");

        var tableData1 = document.createElement("td");
        var tableData2 = document.createElement("td");
        var tableData3 = document.createElement("td");
        var tableData4 = document.createElement("td");
        var tableData5 = document.createElement("td");

        tableData1.innerHTML = arr[i].name;
        tableData2.innerHTML = arr[i].company;
        tableData3.innerHTML = arr[i].phone;
        tableData4.innerHTML = arr[i].email;
        tableData5.innerHTML = arr[i].message;


        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);


        myTable.appendChild(tableRow);
    }
}

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
