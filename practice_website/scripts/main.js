const listItems = document.querySelectorAll("li");

console.debug("yes");
console.log(2)

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

let changeUserButton = document.querySelector("button")
let heading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    heading.textContent = `Welcome ${myName}`;
}


changeUserButton.addEventListener("click", () => {
  console.log("change user button pressed");
  setUserName();
});

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const userName = localStorage.getItem("name");
    heading.textContent = `Welcome, ${userName}`;
}
setUserName();

let images = ["https://t3.ftcdn.net/jpg/01/04/40/06/360_F_104400672_zCaPIFbYT1dXdzN85jso7NV8M6uwpKtf.jpg",
"https://t4.ftcdn.net/jpg/02/11/55/43/360_F_211554351_vskHrPyfc21kabwzRWfaFlFddfE2cAkO.jpg"];

let currentIndex = 0;
let imgElement = document.getElementById("kittens");
function animateImage() {
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
  console.log(currentIndex,images.length,`mod 3 ${currentIndex % 3}`)
}

setInterval(animateImage, 2000); // Change image every 200 milliseconds
