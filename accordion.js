const icons = document.querySelectorAll(".icon");
const items = document.querySelectorAll(".item");
// icons.forEach((el) => {
//   el.addEventListener("click", function (e) {
//     if (!e.target.parentElement.classList.contains("open"))
//       e.target.parentElement.classList.add("open");
//     else e.target.parentElement.classList.remove("open");
//   });
// });

items.forEach((el) => {
  el.addEventListener("click", function (e) {
    let target = e.target.closest(".item");
    if (!target.classList.contains("open")) target.classList.add("open");
    else target.classList.remove("open");
  });
});
