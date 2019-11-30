const input = Array.from(document.querySelectorAll('.controls input'));

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value + suffix}`)
}

input.forEach(el=> el.addEventListener('change',handleUpdate))
input.forEach(el=> el.addEventListener('mousemove',handleUpdate))
