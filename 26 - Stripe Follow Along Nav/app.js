const triggers = document.querySelectorAll('.cool > li');
const bg = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

var handleEnter = function (){
  this.classList.add('trigger-enter');
  setTimeout(() => {
    if(this.classList.contains('trigger-enter')) this.classList.add('trigger-enter-active')
  }, 200);
  const dropdown = this.querySelector('.dropdown');
  const linkCord = dropdown.getBoundingClientRect();
  const navCord = nav.getBoundingClientRect();
  const coords = {
    height: linkCord.height,
    width: linkCord.width,
    top: linkCord.top-navCord.top,
    left: linkCord.left - navCord.left,
  }
  bg.classList.add('open')
  bg.style.width = `${linkCord.width}px`;
  bg.style.height = `${linkCord.height}px`;
  bg.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}
function handleLeave (){
  this.classList.remove('trigger-enter-active')
  setTimeout(() => {
    this.classList.remove('trigger-enter');
  }, 50);
  bg.classList.remove('open')
}

triggers.forEach(tr=>tr.addEventListener('mouseenter' ,handleEnter))
triggers.forEach(tr=>tr.addEventListener(`mouseleave` ,handleLeave))