document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.querySelector(".open-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const nav = document.querySelector("nav");
  const overlay = document.querySelector(".overlay");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  // Mobile Menu Toggle Functionality
  function openNav() {
    nav.classList.add("active");
    overlay.classList.add("active");
  }

  function closeNav() {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  }

  if (openMenuBtn) openMenuBtn.addEventListener("click", openNav);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeNav);
  if (overlay) overlay.addEventListener("click", closeNav);

  // Dropdown Toggle on Click (Explicitly disabled on hover per requirements)
  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parent = btn.closest(".has-dropdown");
      const dropdown = parent.querySelector(".dropdown-list");
      const arrow = btn.querySelector(".arrow");

      // Toggle current dropdown
      const isActive = dropdown.classList.contains("active");

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-list").forEach((list) => {
        list.classList.remove("active");
      });
      document.querySelectorAll(".arrow").forEach((img) => {
        img.src = "./assets/images/icon-arrow-down.svg";
      });

      if (!isActive) {
        dropdown.classList.add("active");
        if (arrow) arrow.src = "./assets/images/icon-arrow-up.svg";
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-list").forEach((list) => {
      list.classList.remove("active");
    });
    document.querySelectorAll(".arrow").forEach((img) => {
      img.src = "./assets/images/icon-arrow-down.svg";
    });
  });
});