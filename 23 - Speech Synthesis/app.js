const msg = new SpeechSynthesisUtterance();
let voices = {};
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector('[name="text"]').value;

function populateVoice() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice=> voice.lang.includes('en'))
    .map(el => `<option value="${el.name}">${el.name} (${el.lang})</option>`)
    .join("");
}
function setVoice(){
  msg.voice = voices.find(voice=> voice.name === this.value);
  toggle()
}
function toggle(set = true){
  speechSynthesis.cancel();
  if(set){
    speechSynthesis.speak(msg)
  }
}
function setOption(){
  msg[this.name] = this.value
}
speechSynthesis.addEventListener("voiceschanged", populateVoice);
voicesDropdown.addEventListener('change',setVoice)
speakButton.addEventListener('click',toggle)
stopButton.addEventListener('click',toggle.bind(null,false))
options.forEach(opt=> opt.addEventListener('change',setOption))