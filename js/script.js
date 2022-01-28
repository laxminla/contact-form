var submitEl = document.querySelector('#submit');
var nameInput = document.querySelector('#name');
var phoneNumberInput = document.querySelector('#phone-number');
var emailInput = document.querySelector('#email');
var githubInput = document.querySelector('#github');
var linkedinInput = document.querySelector('#linkedin');
var submissionResponseEl = document.querySelector('#response');

function showResponse(event) {
    event.perventDefault();
    console.log(event);
    var response = "Thank you for your response" + nameInput.value +  emailInput.value + githubInput.value + linkedinInput.value + ". We are out of office hour. We will reach you out tomorrow at " + phoneNumberInput.value;
    submissionResponseEl.textContent = response;
}

submitEl.addEventListener("click", showResponse);