const passwordChecker = function() { 

let passwordInput = document.getElementById('password').value;
let confirmPasswordInput = document.getElementById('confirmPassword').value;

let passwordSection = document.getElementById('password');
let confirmPasswordSection = document.getElementById('confirmPassword');

let wrongPassword = document.getElementById('wrongpassword');

if(passwordInput == confirmPasswordInput) {
    passwordSection.classList.remove('invalid');
    passwordSection.classList.add('validInput');
    wrongPassword.textContent = "";

} else {
    passwordSection.classList.add('invalid');
    passwordSection.classList.remove('validInput')


    wrongPassword.textContent = "* Passwords do not match";

}
}


document.getElementById('password').addEventListener('change', passwordChecker);
document.getElementById('confirmPassword').addEventListener('change', passwordChecker);