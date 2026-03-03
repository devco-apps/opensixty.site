// Countdown Timer
const launchDate = new Date('2026-03-10T00:00:00Z').getTime(); // Set your launch date here

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-container").innerHTML = "<h2>WE ARE LIVE!</h2>";
    }
}, 1000);

// Email Subscription Form
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const formMessage = document.getElementById('form-message');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    if (validateEmail(email)) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Thank you for subscribing! We\'ll notify you soon.';
        emailInput.value = ''; // Clear the input field
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}