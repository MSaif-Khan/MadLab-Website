function topNavFunction() {
  var x = document.getElementById("mytopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// BLOBS
const svg = document.getElementById("organicSVG");
const audio = document.getElementById("ambientAudio");
const muteButton =  document.getElementById("toggleMute")

function pauseAll() {
    svg.pauseAnimations();
    audio.pause();
  }

function playAll() {
    svg.unpauseAnimations();
    audio.play();
  }

function toggleMute(){
  if (audio.muted === true) {
    // If it is muted, unmute it
    audio.muted = false;
    muteButton.textContent = "Mute";
    } 
  else {
    // If it's not muted, mute it
    audio.muted = true;
    muteButton.textContent = "Unmute"
  }
}