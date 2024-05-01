// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    // Get all the elements needed
    let image = document.querySelector("[src='assets/images/no-image.png']");
    let hornSelector = document.getElementById("horn-select");
    let volume = document.getElementById("volume");
    let volumeLogo = document.querySelector("[alt='Volume level 2']");
    let button = document.querySelector("button");
    let audio = document.getElementsByClassName("hidden")[0];
    // Set up the confetti
    let jsConfetti = new JSConfetti();

    // Change image and audio when horn is selected
    hornSelector.addEventListener("change", hornChange);
    function hornChange(e) {
        image.src = "assets/images/" + e.target.value + ".svg";
        image.alt = e.target.value + " image";
        audio.src = "assets/audio/" + e.target.value + ".mp3";
    }

    // Alter volume logo and audio sound when volume is changed
    volume.addEventListener("input", volumeChange);
    function volumeChange(e) {
        if (e.target.value == 0) {
            volumeLogo.src = "assets/icons/volume-level-0.svg";
            volumeLogo.alt = "Volume level 0";
            audio.volume = 0;
        }
        else if (e.target.value < 33) {
            volumeLogo.src = "assets/icons/volume-level-1.svg";
            volumeLogo.alt = "Volume level 1";
            audio.volume = e.target.value / 100;
        }
        else if (e.target.value < 67) {
            volumeLogo.src = "assets/icons/volume-level-2.svg";
            volumeLogo.alt = "Volume level 2";
            audio.volume = e.target.value / 100;
        }
        else {
            volumeLogo.src = "assets/icons/volume-level-3.svg";
            volumeLogo.alt = "Volume level 3";
            audio.volume = e.target.value / 100;
        }
    }

    // Play audio when button is clicked
    button.addEventListener("click", playAudio);
    function playAudio(e) {
        audio.play();
        if (hornSelector.value == "party-horn") { 
            jsConfetti.addConfetti();
        }
    }
}