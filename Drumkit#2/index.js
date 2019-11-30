const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== `transform`) return;
  this.classList.remove("playing");
};
const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);
keys.forEach(el => el.addEventListener("transitionend", removeTransition));
