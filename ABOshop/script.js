
//  signin.html script
function backHome() {
    window.location.href = "./index.html"
}
function submitFunctionBtn() {
    // getting the input values
    let usernameLoginInput = document.getElementById("username-login-input").value
    let passwordLoginInput = document.getElementById("password-login-input").value
    let validation = true
    // creating condition for the user if for the valid input with setted rules
    if (usernameLoginInput) {
        // i must write a script which checks if the user input finish with "@gmail.com"
        if (!usernameLoginInput.endsWith("@gmail.com")) {
            // border becomes red 
            document.getElementById("username-login-input").style.borderColor = "red"
            // a text must be appear to explain the problem like "please finish your username with @gmail.com"
            document.getElementById("username-login-warning").innerHTML = "+@gmail.com"
            validation = false;
        }
    }else{
        validation = false
    }
    if (passwordLoginInput) {
        // i must write a script which checks if the user password has at least 6 character
        if (passwordLoginInput.length < 6) {
            document.getElementById("password-login-input").style.borderColor = "red"
            document.getElementById("password-login-warning").innerHTML = "wrong password, try again."
            validation = false
        }
    } else {
        validation = true
    }
    if(validation){
        alert("Login sucessfully, Welcome "+usernameLoginInput + " to continue please click on image.")
    }
}   