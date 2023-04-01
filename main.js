// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');
const likeButtons = document.querySelectorAll('.like');

// Hide error modal on page load
modal.classList.add('hidden');

// Function to handle heart icon click
function handleClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      // On successful response, update heart icon and style
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart');
    })
    .catch(() => {
      // On error response, display modal with message
      modalMessage.innerText = 'Random server error. Please try again.';
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listener to all heart icons
for (const button of likeButtons) {
  button.addEventListener('click', handleClick);
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
