
// countdown timer //

var countDownDate = new Date("Dec 20, 2023 15:37:25").getTime()

var x = setInterval(function () {
   var now = new Date().getTime()
   var distance = countDownDate - now;
   var days = Math.floor(distance / (1000 * 60 * 60 * 24))
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
      minutes + "m " + seconds + "s "

   if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "EXPIRED"
   }
}, 1000)

function showDialog() {
   document.querySelector('.dialog-container').style.display = 'flex'
   document.querySelector('.mask').style.display = 'block'
}

function hideDialog() {
   document.querySelector('.dialog-container').style.display = 'none'
   document.querySelector('.mask').style.display = 'none'
}

// Modal box
function showDialog() {
   document.querySelector('.dialog-container').style.display = 'flex'
}

function hideDialog() {
   document.querySelector('.dialog-container').style.display = 'none'
   document.querySelector('.mask').style.display = 'none'
}

// book now button

document.getElementById("bookNowButton").addEventListener("click", function () {
window.location.href = "deals.html"
})

// forms


function showCreateAccountForm() {
   document.getElementById('createAccountFormContainer').style.display = 'block'
   document.getElementById('loginFormContainer').style.display = 'none'
   document.getElementById('getStartedFormContainer').style.display = 'none'
}

function showLoginForm() {
   document.getElementById('loginFormContainer').style.display = 'block'
   document.getElementById('createAccountFormContainer').style.display = 'none'
   document.getElementById('getStartedFormContainer').style.display = 'none'
}

function showGetStartedForm() {
   document.getElementById('getStartedFormContainer').style.display = 'block'
   document.getElementById('createAccountFormContainer').style.display = 'none'
   document.getElementById('loginFormContainer').style.display = 'none'
}

function createAccount() {
   alert('Account created successfully!')
   hideForms()
}

function login() {
   alert('Login successful!')
   hideForms()
}

function sendData() {
   alert('Data sent successfully! Check you email shortly')
   hideForms()
}

function hideForms() {
   document.getElementById('createAccountFormContainer').style.display = 'none'
   document.getElementById('loginFormContainer').style.display = 'none'
   document.getElementById('getStartedFormContainer').style.display = 'none'
}

document.querySelectorAll('.form-container .close-button').forEach(function (button) {
   button.addEventListener('click', hideForms)
})

// header buttons//

document.addEventListener('scroll', function () {
   var headerButtons = document.getElementById('header-buttons')
   if (window.scrollY > 50) {
      headerButtons.classList.add('hidden')
   } else {
      headerButtons.classList.remove('hidden')
   }
});

// captcha //

// Function to generate a random CAPTCHA //
function generateCaptcha() {
   const captchaText = Math.random().toString(36).substring(2, 8).toUpperCase()
   document.getElementById('captchaText').innerText = captchaText
   return captchaText
}

// Function to check if the entered CAPTCHA is correct //
function verifyCaptcha() {
   const enteredCaptcha = document.getElementById('captcha').value.toUpperCase()
   const generatedCaptcha = document.getElementById('captchaText').innerText
   return enteredCaptcha === generatedCaptcha
}

// CAPTCHA verification //

function login() {
   if (verifyCaptcha()) {
      alert('Login successful!')
      hideForms();
   } else {
      alert('Invalid CAPTCHA. Please try again.')
   }
}

// Generate a new CAPTCHA  //
function showLoginForm() {
   document.getElementById('loginFormContainer').style.display = 'block'
   document.getElementById('createAccountFormContainer').style.display = 'none'
   document.getElementById('getStartedFormContainer').style.display = 'none'

// Generate a new CAPTCHA //
   generateCaptcha()
}

// chat box //

function showChat() {
   document.getElementById('chatBox').style.display = 'block'
}

function closeChat() {
   document.getElementById('chatBox').style.display = 'none'
}

function sendMessage() {
   const messageInput = document.getElementById('messageInput')
   const message = messageInput.value.trim()

   if (message !== '') {
      const chatBody = document.getElementById('chatBody')

      const newMessage = document.createElement('div')
      newMessage.className = 'message'
      newMessage.textContent = 'You: ' + message
      chatBody.appendChild(newMessage)
      messageInput.value = ''
   }
}

// Auto-show the chat box after 5 seconds)

setTimeout(showChat, 5000)