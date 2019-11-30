let countDown;
const buttons = document.querySelectorAll('[data-time]');
const displayTimeLeft =(sec) => {
  const mins = Math.floor(sec/60);
  const remainderSec = sec%60
  const display = `${mins}:${remainderSec<10? '0': '' }${remainderSec}`;
  document.querySelector('#display').innerHTML = display
  document.title= display
}
const timer = (sec)=>{
  clearInterval(countDown)
  const now = Date.now();
  const then = now + sec* 1000;
  displayTimeLeft(sec)
  displayEndTime(then)
  countDown = setInterval(() => {
    const secLeft = Math.round((then - Date.now())/1000)
    if(secLeft < 0){
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secLeft)
  }, 1000);
}

const displayEndTime = (time)=>{
  const end = new Date(time);
  console.log(end);
  const hours = end.getHours()
  const mins = end.getMinutes();
  document.querySelector('#endTime').innerHTML = `Be Back At ${hours > 12? hours-12 : hours}:${mins < 10 ? '0': '' }${mins}  ${end.getDate()}/${end.getMonth()+1}/${end.getFullYear()}`
}
buttons.forEach(el=> el.addEventListener('click',(e)=> timer(el.dataset.time)))
custom.onsubmit = (e)=>{
  e.preventDefault();
  timer(custom.firstElementChild.value *60 )
}