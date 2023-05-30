const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        // shown error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    }else {
        // add success class
        setSuccessFor(username);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //cont
    const small = formControl.querySelector('small');

    // add error message inside small 
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';

}