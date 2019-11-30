const chbs = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));
let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    chbs.forEach(chb => {
      console.log(chb);
      if (chb === this || chb === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting Ending");
      }
      if (inBetween) {
        chb.checked = true;
      }
    });
  }

  lastChecked = this;
}
chbs.forEach(chb => chb.addEventListener("click", handleCheck));
