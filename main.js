const speech = new SpeechSynthesisUtterance();

function play() {
    const message = document.getElementById("message").value;
    speech.lang = "id";
    speech.text = message;
    window.speechSynthesis.speak(speech);
}