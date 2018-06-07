const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0
  
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;
  
    if (key === codes[index]) {
      index++;
      
    if (idx === codes.length) {
      alert("Hurray!");
      idx = 0;
    }
    else {
      idx = 0;
    }
   }
 })
}