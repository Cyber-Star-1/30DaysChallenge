const a = document.querySelectorAll("button");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);
a.forEach(el => {
  el.addEventListener("mouseenter", e => {
    linkCord = el.getBoundingClientRect();
    // console.log(linkCord);
    highlight.style.width = `${linkCord.width}px`;
    highlight.style.height = `${linkCord.height}px`;
    highlight.style.transform = `translate(${linkCord.left +
      window.scrollX}px,${linkCord.top + window.scrollY}px)`;
      
      if(highlight.style.width === el.style.width && highlight.style.height === el.style.height){
        el.style.color = `white`;
      }
    });
});
