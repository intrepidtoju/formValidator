const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText =  message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    }else{
       showError (input, 'Email is not valid')
    }
}
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim()=== '') {
            showError(input, `${getFeildName(input)} is required`);
        }else {
            showSuccess(input);
        }
    });
}
function getFeildName() {
    return input.id.charAt(0).toUpperCase(); + input.id.slice(1);
}
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2value ){
        showError(input2, 'Passwords do not match');
    }
}
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFeildName(input)} must be atleast ${min} character`);
    }else if(input.value.length > max){
        showError(input, `${getFeildName(input)} must be less than ${max} character`);  
    }else{
        showSuccess(input);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength (username, 3, 16);
    checkLength (password, 6, 25 );
    validateEmail(email);
    checkPasswordsMatch(password, password2);
    // if (username.value === ''){
    //     showError(username, 'Username is required');
    // }else {
    //     showSuccess(username);
    // }
    // if (email.value === ''){
    //     showError(email, 'Email is required');
    // }else if (!validateEmail(email.value)) {  
    //     showError(email, 'Email is not valid');
    // }else {
    //     showSuccess(email);
    // }
    // if (password.value === ''){
    //     showError(password, 'Password is required');
    // }else {
    //     showSuccess(password);
    // }
    // if (password2.value === ''){
    //     showError(password2, 'Password is required');
    // }else {
    //     showSuccess(password2);
    // }
});