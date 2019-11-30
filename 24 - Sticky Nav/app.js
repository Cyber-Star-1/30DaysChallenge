const nav = document.querySelector('#main');
const navTop = nav.offsetTop

var fixNav = function(){
  if(window.scrollY >= navTop){
    document.body.style.paddingTop = `${nav.offsetHeight}px`
    document.body.classList.add('fixed-nav')
  }else{
    document.body.style.paddingTop = `${0}px`
    document.body.classList.remove('fixed-nav')
  }
}
window.onscroll = fixNav