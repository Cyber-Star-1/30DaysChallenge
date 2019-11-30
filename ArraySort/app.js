const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog"
];
const arrBands = [];
const filterArr = []
bands.forEach(el=>{
  arrBands.push(el.split(' '))
});
arrBands.filter(e=>{
  if(e[0] === `The` || e[0] === `A` || e[0] === `An`){
    
    filterArr.push(e.splice(1))
  }
  else{
    filterArr.push(e)
  }
})
filterArr.sort((a,b)=>{ a>b? 1 : -1});