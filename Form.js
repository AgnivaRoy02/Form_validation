function FindAge(){
    var day = document.getElementById("dob").value;
    var DOB = new Date(day);
    var today = new Date();
    var Age = today.getTime() - DOB.getTime();
    Age = Math.floor(Age/(1000*60*60*24*365.25));
    document.getElementById("age").value = Age;
}

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = '<i class="fa fa-times" id="wrong"></i>';
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        nameError.innerHTML = '<i class="fa fa-times" id="Wrong"></i>';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML= '** Please enter your email.';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML= '** Email Invalid';
        return false;
    }
    emailError.innerHTML = '';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
   
    if(phone.value==""){
        phoneError.innerHTML = '* * Please Fill Mobile no*';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = '*Phone no should be 10 didgits*';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = '*Only digits please.*';
        return false;
    }
    if((phone.charAt(0)!=9) && (phone.charAt(0)!=8) && (phone.charAt(0)!=7)){
        phoneError.innerHTML = '** Mobile no must start with 9 ,8 and 7';
        return false;
    }
    phoneError.innerHTML = '';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone()){
        submitError.style.display = 'block';
        submitError.innerHTML = "**Please Fix Error to submit";
        setTimeout(function () {submitError.style.display = 'none';},3000)
        return false;
    }

}
