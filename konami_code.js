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
  let i = 0
  
  document.body.addEventListener('keydown', (e) => {
    const key = e.key;
  
    if (key === code[i]) {
      i++;
      
    if (i === code.length) {
      alert("Hurray!");
      i = 0;
    }
    else {
      i = 0;
    }
   }
 })
}