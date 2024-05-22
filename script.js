// scroll section

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 100;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
// active nav bar links
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

// window.onscroll = () => {
// Sticky header
//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);
// };

let menu = document.querySelector("#menu-icon");
let navLinks = document.querySelector("header nav");
const links = document.querySelectorAll("header nav a"); // Corrected this line

menu.onclick = () => {
  navLinks.classList.toggle("active");
};

links.forEach((link) => {
  link.onclick = () => {
    navLinks.classList.remove("active");
  };
});
