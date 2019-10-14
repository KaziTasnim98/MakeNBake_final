// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCnpK6CztRZt_Gy2DKEChZcXaN2btEhIWI",
    authDomain: "comment-44891.firebaseapp.com",
    databaseURL: "https://comment-44891.firebaseio.com",
    projectId: "comment-44891",
    storageBucket: "",
    messagingSenderId: "506399401209",
    appId: "1:506399401209:web:5b55e2b4df840328aa2e28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var commentForm = document.getElementById("commentForm");
commentForm.name.setAttribute("placeholder", "Your name");
commentForm.message.setAttribute("placeholder", "Your comment");


// Reference messages collection


var path = window.location.pathname;
var page = path.split("/").pop().split(".")[0];
console.log(page);

var messagesRef = firebase.database().ref('comments/' + page);

var arr = [];

var commentsSection = document.getElementById("comments");

messagesRef.on("value", snap => {
    var temp = snap.val();
    console.log(temp);
    for (var i in temp)
        arr.push(temp[i]);
    for (var i = 0; i < arr.length; i++) {
        var singleComment = document.createElement("div");
        singleComment.setAttribute("class", "media mb-4");
        var profilePic = document.createElement("img");
        profilePic.setAttribute("class", "d-flex mr-3 rounded-circle");
        profilePic.setAttribute("src", "http://placehold.it/50x50");

        var commentBody = document.createElement("div");
        commentBody.setAttribute("class", "media-body");
        var commentHeader = document.createElement("h5");
        commentHeader.innerHTML = arr[i].name;
        var commentMessage = document.createElement("p");
        commentMessage.innerHTML = arr[i].message;
        commentBody.appendChild(commentHeader);
        commentBody.appendChild(commentMessage);

        singleComment.appendChild(profilePic);
        singleComment.appendChild(commentBody);

        commentsSection.appendChild(singleComment);
    }
})



/*var arr = [];

Ref.on("value", snap => {
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
        var tableRow1 = document.createElement("name1");
        var tableRow2 = document.createElement("comment");


        tableRow1.innerHTML = arr[i].name;
        tableRow2.innerHTML = arr[i].comment;


        tableRow.appendChild(tableRow1);
        tableRow.appendChild(tableRow2);


        myTable.appendChild(tableRow1);
        myTable.appendChild(tableRow2);
    }
}*/

// Listen for form submit
document.getElementById('commentForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    //var email = getInputVal('email');
    //var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('commentForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        //company: company,
        //email: email,
        //phone: phone,
        message: message
    });
}
