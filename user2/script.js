
var nameError = document.getElementById('name-error');
var surnameError = document.getElementById('surname-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName() {
var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
   

    if (name.length < 3) {
        nameError.innerHTML = 'Invalid Name';
        return false;
    }
    

    if (!name.match(/^[A-Za-z]+$/)) {
       nameError.innerHTML = 'Name must contain only letters';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;



}

function validateSurname() {
    var surname = document.getElementById('contact-surname').value;
    if (surname.length == 0) {
        surnameError.innerHTML = 'Name is required';
        return false;
    }


    if (surname.length < 3) {
        surnameError.innerHTML = 'Invalid Surname';
        return false;
    }


    if (!surname.match(/^[A-Za-z]+$/)) {
        surnameError.innerHTML = 'Surname must contain only letters';
        return false;
    }

    surnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;



}

   

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}



function validateMessage() {

    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
       messageError.innerHTML = left + 'more characters required';
        return false;
    }

   messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}








