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
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//SIGNUP NEW USER
//ID OF SIGN UP FORM IS "signUpForm"

const signUpForm = document.querySelector("#signUpForm");

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
}


//SIGN IN FORM
//SIMILAR FORMAT AS ABOVE

const signInForm = document.querySelector("#signInForm");
if (signInForm != null) {
    signInForm.addEventListener("submit", event => {
        event.preventDefault();
        const email = signInForm["email"].value;
        const password = signInForm["password"].value;

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
        });
    });
}