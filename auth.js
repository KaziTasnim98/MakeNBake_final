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
const auth = firebase.auth();
// const db = firebase.database();
// db.settings({ timestampsInSnapshots: true });

//SIGNUP NEW USER
//ID OF SIGN UP FORM IS "signUpForm"

/*const signUpForm = document.querySelector("#signUpForm");

if (signUpForm != null) {
    signUpForm.addEventListener("submit", event => {
        event.preventDefault();

        //Form's username input has attribute name="username"
        const username = signUpForm["username"].value;

        //Form's email input has attribute name="email"
        const email = signUpForm["email"].value;

        //Form's password input has attribute name="password"
        const password = signUpForm["password"].value;

        //CALL FIREBASE FUNCTION
        auth.createUserWithEmailAndPassword(email, password).then(cred => {

            //SEE CONSOLE OUTPUT TO VERIFY THIS
            console.log(cred);

            //BLANKS THE FORM AFTER SUBMISSION
            signUpForm.reset();
        });
    });
}*/


//SIGN IN FORM

/*const signInForm = document.querySelector("#signInForm");
if (signInForm != null) {
    signInForm.addEventListener("submit", event => {
        event.preventDefault();
        const email = signInForm["email"].value;
        const password = signInForm["password"].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(email);
        });
    });
}*/

var btn = document.getElementById("sub-btn");
if (btn) {
    btn.addEventListener("click", hello);
}
var login = document.getElementById("login-btn");
if (login) {
    login.addEventListener("click", function (event) {
        event.preventDefault();
        loginn();
    });
}
var lout = document.getElementById("logout-btn");
if (lout) {
    lout.addEventListener("click", function (event) {
        event.preventDefault();
        logoutt();
    })
}

function hello(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(email, pass);

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        window.location.href = "hacks.html";
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    // window.location.href = "hacks.html"

    console.log("user signed up");
    //console.log();
}

function logoutt() {
    // e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // console.log(email, pass);

    firebase.auth().signOut().then(function (user) {
        window.location.href = "index.html";
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

    // window.location.href = "hacks.html"

    console.log("user signed out");
    //console.log();
}

function loginn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function () {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user.email == "a@a.com") {
                    window.location.href = "contact_table.html";
                }
                else {
                    window.location.href = "baking_hacks.html";
                    //console.log(email);
                }
            }
            )
        }
    ).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        var u = checkUser();
        if (u) {
            console.log(u);
        }
        else console.log("No user");
    });
}

function checkUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            return user.email;
            // ...
        } else {
            // User is signed out.
            // ...
            console.log("not logged in");
            return null;
        }
    });
}