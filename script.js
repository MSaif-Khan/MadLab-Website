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

function pauseAnimation() {
    svg.pauseAnimations();
    audio.pause();
    enableMute()
  }

  function playAnimation() {
    svg.unpauseAnimations();
    audio.play();
    disableMute()
  }