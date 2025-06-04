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

function pauseTask() {
    svg.pauseAnimations();
    audio.pause();
  }

function playTask() {
    svg.unpauseAnimations();
    audio.play();
  }

