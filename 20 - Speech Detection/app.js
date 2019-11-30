window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-UK';
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);
recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results).map(res=> res[0]).map(res=> res.transcript).join('')
  p.textContent = transcript;
  const poopScript = transcript.replace(/fuck|bullshit|shit|motherfucker|fucker/gi, '💩');
      p.textContent = poopScript;
  if(e.results[0].isFinal){
    p = document.createElement('p');
    words.appendChild(p)
  }
});
recognition.addEventListener('end', recognition.start)
recognition.start();