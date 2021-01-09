const container = document.querySelector('#container');
const redtext = document.createElement('p');
const content = document.createElement('div');
const blueheading = document.createElement('h3');
const box = document.createElement('div');
const divheading = document.createElement('h1');
const divpar = document.createElement('p');
const btn = document.querySelector('#btn');
const buttons = document.querySelectorAll('button');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

redtext.textContent = "Hey I'm red!";
redtext.style.cssText = "color: red";

blueheading.textContent = "I'm a blue h3!";
blueheading.style.cssText = "color: blue";

box.style.cssText = "border: 5px solid black; background-color: pink";

divheading.textContent = "I'm in a div";
divpar.textContent = "ME TOO!";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

box.appendChild(divheading);
box.appendChild(divpar);
container.appendChild(content);
container.appendChild(redtext);
container.appendChild(blueheading);
container.appendChild(box);

//btn.onclick = () => alert("Hello World");
//btn.addEventListener('click', () => {
//    alert("Hello World");
//});
/*
btn.addEventListener('click', function (f) {
    console.log(f.target);
  });
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  */
