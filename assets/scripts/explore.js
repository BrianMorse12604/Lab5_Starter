// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
    // Get elements to add functionality
    let textArea = document.getElementById("text-to-speak");
    let speakButton = document.querySelector("button");
    let image = document.querySelector("[alt='Smiling face']");
    console.log(image);
    let voiceSelector = document.getElementById("voice-select");

    // Get all the voices and add them to the list
    function populateVoiceList() {
        if (typeof speechSynthesis === "undefined") {
            return;
        }

        const voices = speechSynthesis.getVoices();

        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement("option");
            option.textContent = `${voices[i].name} (${voices[i].lang})`;

            option.setAttribute("data-lang", voices[i].lang);
            option.setAttribute("data-name", voices[i].name);
            voiceSelector.appendChild(option);
        }
    }

    populateVoiceList();
    if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
    ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
    }



    // Have the face speak the text in the textarea
    speakButton.addEventListener("click", speak);
    function speak(e) {
        console.log(textArea.value)
        const utterance = new SpeechSynthesisUtterance(textArea.value);
        const selectedOption = voiceSelector.selectedOptions[0].getAttribute("data-name");
        const voices = speechSynthesis.getVoices();
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterance.voice = voices[i];
            }
        }
        speechSynthesis.speak(utterance);
        image.src = "assets/images/smiling-open.png";
        image.alt = "Smiling face speaking";
    

        function onEnd() {
            image.src = "assets/images/smiling.png";
            image.alt = "Smiling face";
        } 
        utterance.onend = onEnd;
    }
}