// menu
const menuBtn = document.querySelector(".menu-btn");
// const hamburger = document.querySelector(".menu-btn-burger");
// const menu = document.querySelector(".menu");
// const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
// const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", menuShow);

let menuOpen = false;

function menuShow() {
  if (!menuOpen) {
    // hamburger.classList.add("open");
    // menu.classList.add("open");
    // nav.classList.add("open");
    menuNav.classList.add("open");
    // menuItem.forEach(item => item.classList.add("open"));
    menuOpen = true;
  } else {
    // hamburger.classList.remove("open");
    // menu.classList.remove("open");
    // nav.classList.remove("open");
    menuNav.classList.remove("open");
    // menuItem.forEach(item => item.classList.remove("open"));
    menuOpen = false;
  }
}

// setting
const settingBtn = document.querySelector(".setting-btn");
const themeBtn = document.querySelector(".theme-btn");

settingBtn.addEventListener("click", settingShow);

let settingOpen = false;

function settingShow() {
  if (!settingOpen) {
    themeBtn.classList.add("open");
    settingOpen = true;
  } else {
    themeBtn.classList.remove("open");
    settingOpen = false;
  }
}

// dark/light theme
const themeCheckBox = document.querySelector(".theme-checkbox");
const loginLinkTheme = document.querySelector(".login-link");
const signupLinkTheme = document.querySelector(".signup-link");
const menuLinkTheme = document.querySelectorAll(".menu-link");
const generalInfoTheme = document.querySelector(".general-info");
const searchInputTheme = document.querySelector(".search-input");
const searchBtnTheme = document.querySelector(".search-btn");
const contactMenuTheme = document.querySelector(".contact-menu");
const contactLinkTheme = document.querySelectorAll(".contact-link");

themeCheckBox.addEventListener("change", themeChange);

function themeChange() {
  document.body.classList.toggle("light");
  loginLinkTheme.classList.toggle("light");
  signupLinkTheme.classList.toggle("light");
  menuLinkTheme.forEach(item => item.classList.toggle("light"));
  generalInfoTheme.classList.toggle("light");
  searchInputTheme.classList.toggle("light");
  searchBtnTheme.classList.toggle("light");
  contactMenuTheme.classList.toggle("light");
  contactLinkTheme.forEach(item => item.classList.toggle("light"));
}