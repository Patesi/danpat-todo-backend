var checkbox = document.querySelector(".my-input");
var icon = document.querySelector(".side_menu span");
var listener = function (e) {
  if (e.target != checkbox && e.target != icon) {
    checkbox.checked = false;
    document.removeEventListener("click", listener);
  }
};

checkbox.addEventListener("click", function () {
  if (this.checked) {
    document.addEventListener("click", listener);
  }
});
