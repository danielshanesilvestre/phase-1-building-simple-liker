// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function handleClick (event) {
  if (event.target.textContent === EMPTY_HEART) {
    mimicServerCall()
        .then(() => {
          event.target.textContent = FULL_HEART;
          event.target.classList.add("activated-heart");
        })
        .catch(error => {
          const modal = document.getElementById("modal");
          modal.classList.remove("hidden");

          document.getElementById("modal-message").textContent = error.message;

          window.setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
  } else if (event.target.textContent === FULL_HEART) {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.remove("activated-heart");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let glyphList = document.getElementsByClassName("like-glyph");
  for (let glyph of glyphList) {
    glyph.addEventListener("click", handleClick);
  }
});

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
