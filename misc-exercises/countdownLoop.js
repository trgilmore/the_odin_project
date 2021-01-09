let output = document.querySelector('.output');
output.innerHTML = '';
const para = document.createElement('p');
let i = 10;

while (i >= 0 ) {
   para.textContent += i;
   output.appendChild(para);
   i--
}