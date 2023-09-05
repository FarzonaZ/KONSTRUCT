const navbar = document.querySelector("#navbar");
const containers = document.querySelectorAll(".container");
const title = document.querySelector("#main-title");
console.dir(navbar);
console.dir(containers);
console.dir(title);

const accordion = document.querySelectorAll(".accordion-service");

accordion.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});




