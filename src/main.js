const sidebar = document.querySelector("#sidebar")
const button = document.querySelector("#menu-expand")

button.addEventListener("click", () => sidebar.classList.toggle("open"))
