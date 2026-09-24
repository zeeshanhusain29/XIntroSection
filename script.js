document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.querySelector(".open-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const nav = document.querySelector("nav");
  const overlay = document.querySelector(".overlay");

  // Mobile Menu Toggle Functions
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

  // Dropdown Toggling - Handles both .dropdown-btn and .nav-link clicks
  const dropdownTriggers = document.querySelectorAll(".dropdown-btn, .has-dropdown > .nav-link");

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const parent = trigger.closest(".has-dropdown");
      const dropdown = parent.querySelector(".dropdown-list");
      const arrow = parent.querySelector(".arrow");

      const isActive = dropdown.classList.contains("active");

      // Close all active dropdowns first
      document.querySelectorAll(".dropdown-list").forEach((list) => {
        list.classList.remove("active");
      });
      document.querySelectorAll(".dropdown-btn").forEach((button) => {
        button.classList.remove("link-open");
      });
      document.querySelectorAll(".arrow").forEach((img) => {
        img.src = "./assets/images/icon-arrow-down.svg";
      });

      // Toggle current dropdown
      if (!isActive) {
        dropdown.classList.add("active");
        trigger.classList.add("link-open");
        if (arrow) arrow.src = "./assets/images/icon-arrow-up.svg";
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-list").forEach((list) => {
      list.classList.remove("active");
    });
    document.querySelectorAll(".dropdown-btn").forEach((button) => {
      button.classList.remove("link-open");
    });
    document.querySelectorAll(".arrow").forEach((img) => {
      img.src = "./assets/images/icon-arrow-down.svg";
    });
  });
});