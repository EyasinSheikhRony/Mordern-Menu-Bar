let list = document.querySelectorAll(".list");
let barSection = document.querySelector(".bar_section");
let navBar = document.querySelector(".nav_bar_container");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  });
}

barSection.addEventListener("click", () => {
  barSection.classList.toggle("active");
  navBar.classList.toggle("active");
});
