const tabButtons = document.querySelectorAll(".tab-btn");
const menuItems = document.querySelectorAll(".menu-items");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    menuItems.forEach((menu) => {
      menu.classList.remove("active");
    });

    button.classList.add("active");

    const menuId = button.dataset.menu;
    const selectedMenu = document.getElementById(menuId);

    selectedMenu.classList.add("active");
  });
});