

document.addEventListener("DOMContentLoaded", () => {
    const hat = document.querySelector(".hat");
    const speechBubble = document.querySelector(".speech-bubble");

 function animateWithSpeechBubble() {

    // Löscht die Klassen für die Animation, um sie neu zu starten //
    hat.classList.remove("hatAnimation");
    void hat.offsetWidth; 
    hat.classList.add("hatAnimation");
       
    speechBubble.classList.remove("animate-bubble");
    void speechBubble.offsetWidth;
    speechBubble.classList.add("animate-bubble");


    setTimeout(() => {
        hat.classList.add("hatAnimation");
    }, 100);
    }
    
    // Triggert die Animation durch hover//
    hat.addEventListener("mouseenter", animateWithSpeechBubble);

});
