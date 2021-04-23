const navbtn = document.querySelector(".navbar_btn");
const navicon = document.querySelector(".navbar_btn .icon");
const navitems = document.querySelector(".nav_items");
const navitem = document.querySelectorAll(".nav_item");
const main = document.querySelector("main");
let isOpen = false;

navbtn.addEventListener("click", () => {
  if (!isOpen) {
    navicon.classList.add("open");
    navitems.classList.add("open");
    navitem.forEach((item) => item.classList.add("open"));
    main.style.visibility = "hidden";
    isOpen = true;
  } else {
    navicon.classList.remove("open");
    navitems.classList.remove("open");
    navitem.forEach((item) => item.classList.remove("open"));
    main.style.visibility = "visible";
    isOpen = false;
  }
});

// fetch("https://api.github.com/users/vinayaksaubhri/repos")
//   .then((response) => response.json()) //Converting the response to a JSON object
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
