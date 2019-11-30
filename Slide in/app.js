function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const slides = document.querySelectorAll(".slide-in");
const checkSlides = () => {
  slides.forEach(el => {
    const slideInAt =
      (window.scrollY + window.innerHeight) - (el.height / 2);
    const imgBo = el.offsetTop + el.height;
    const isHalfShown = slideInAt > el.offsetTop;
    const isNotPassed = window.scrollY < imgBo;
    if (isHalfShown && isNotPassed) {
      el.classList.add("active");
    }
    else{
      el.classList.remove("active");
    }
  });
};
window.addEventListener("scroll", debounce(checkSlides));