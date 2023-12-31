var getemail = document.getElementById("signInEmail");
var getpass = document.getElementById("signInPassword");
var users = JSON.parse(localStorage.getItem('users')) || [];

var getnameup = document.getElementById("signupName");
var getemailup = document.getElementById("signupEmail");
var getpassup = document.getElementById("signupPassword");
var PasswCheck = document.getElementById("PasswordCheck");
var usersup = JSON.parse(localStorage.getItem('usersup')) || [];

function login() {
    var userinformation = {
        email: getemail.value,
        pass: getpass.value,
    };

    if (getemail.value == "") {
        alert("Please enter your email...");
        return false;
    } else if (!getemail.value.match(/^[a-z]{4,12}@gmail.com$/)) {
        alert("There is a problem with your email...");
        return false;
    } else if (getpass.value == "") {
        alert("Please enter your password...");
    } else if (getpass.value.length < 8) {
        alert("Your password is less than 8 characters...");
        return false;
    } else if (getpass.value.length > 20) {
        alert("Your password is more than 20 characters...");
        return false;
    } else {
        var existingUser = users.find(u => u.email === userinformation.email);
        if (!existingUser) {
            alert("Email not found. Please sign up.");
            return false;
        } else if (existingUser.pass !== userinformation.pass) {
            alert("Incorrect password. Please try again.");
            return false;
        } else {
            localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
            alert("Successful");
            clearValue();
            window.location.assign("page.html");
        }
    }
}

function signUp() {
    var userinformationup = {
        name: getnameup.value,
        email: getemailup.value,
        pass: getpassup.value,
        passcheck: PasswCheck.value,
    };

    if (getnameup.value == "") {
        alert("Please enter your name...");
    } else if (getnameup.value.length < 10) {
        alert("Your Name is less than 8 characters...");
    } else if (getnameup.value.length > 30) {
        alert("Your Name is more than 30 characters...");
    } else if (getemailup.value == "") {
        alert("Please enter your email...");
    } else if (getpassup.value == "") {
        alert("Please enter your password...");
    } else if (PasswCheck.value == "") {
        alert("Please check your password...");
    } else if (PasswCheck.value !== getpassup.value) {
        alert("Passwords do not match...");
    } else if (!getemailup.value.match(/^[a-z]{4,12}@gmail.com$/)) {
        alert("There is a problem with your email...");
    } else if (getpassup.value.length < 8) {
        alert("Your password is less than 8 characters...");
    } else if (getpassup.value.length > 20) {
        alert("Your password is more than 20 characters...");
    } else {
        var existingUser = usersup.find(u => u.email === userinformationup.email);
        if (existingUser) {
            alert("This email is already used. Please use another email.");
            return false;
        } else {
            alert("Successful");
            usersup.push(userinformationup);
            localStorage.setItem('usersup', JSON.stringify(usersup));
            clearValueup();
            localStorage.setItem('loggedInUser', JSON.stringify(userinformationup));
            window.location.assign("page.html");
        }
    }
}

function clearValue() {
    getemail.value = "";
    getpass.value = "";
}

function clearValueup() {
    getnameup.value = "";
    getemailup.value = "";
    getpassup.value = "";
    PasswCheck.value = "";
}

function displayUserName() {
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        var helloElement = document.getElementById('helloText');
        helloElement.innerHTML = `Hello, ${loggedInUser.name}!`;
    }
}


