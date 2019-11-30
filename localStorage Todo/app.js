const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name="item"]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(e = [], list) {
  list.innerHTML = e
    .map((el, i) => {
      return `
    <li>
    <input type="checkbox" data-i="${i}" name="chb" id="item${i}" ${
        el.done ? "checked" : ""
      }>
    <label for="item${i}">${el.text}</label>
    </li>
    `;
    })
    .join("");
}
populateList(items, itemsList);
function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const index = e.target.dataset.i;  
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
checkAll.addEventListener('click', ()=>{
  items.forEach(el=>{
    el.done = true;
    populateList(items, itemsList);
  })
})
unCheckAll.addEventListener('click', ()=>{
  items.forEach(el=>{
    el.done = false;
    populateList(items, itemsList);
  })
})
clearAll.addEventListener('click',()=>{
  localStorage.clear()
  items = []
  populateList(items, itemsList);
});