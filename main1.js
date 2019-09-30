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




// Reference messages collection
var messagesRef = firebase.database().ref('comments');

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
