const mainContainer = document.querySelector("#container");

const para = document.createElement("p");
const header = document.createElement("h3");
const container = document.createElement("div");
const innerHeader = document.createElement("h1");
const innerPara = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";
header.style.color = "blue";
header.textContent = "I'm a blue h3";
container.setAttribute("style", "border: 2px solid black; background-color: pink");
innerHeader.textContent = "I'm in a div";
innerPara.textContent = "ME TOO!";

container.appendChild(innerHeader);
container.appendChild(innerPara);

mainContainer.appendChild(para);
mainContainer.appendChild(header);
mainContainer.appendChild(container);

const btn = document.querySelector("#btn");
btn.onclick = (e) => {alert("Hello World");console.log(e)}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
  alert("Hello World");
  console.log(e)
});

const btn3 = document.querySelector("#btn3");
btn3.onclick = alertFunction;

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", alertFunction);


function alertFunction(e) {
  alert("YAY! YOU DID IT!");
  console.log(e.target);
  console.log(e);
  e.target.style.background = "blue";
}
