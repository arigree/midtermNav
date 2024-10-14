import { changePage, hamburgerOpen, hamburgerClose } from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log("route", pageID);
  changePage(pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initSite();
});

$(document).on("click", ".hamburger", function (event) {
  event.preventDefault();

  const nav = document.getElementById("nav");
  const links = document.getElementById("links");

  if (window.innerWidth >= 400) {
    nav.style.width = "100vw";
    links.style.display ="block"
    
  } else {
    hamburgerOpen();
  }
  console.log("app open hamburger");
});
$(document).on("click", ".hamburgerClose", function (event) {
  event.preventDefault();
  const nav = document.getElementById("nav");
  const links = document.getElementById("links");

  if (window.innerWidth >= 400) {
    nav.style.width = "100vw";
    links.style.display ="block"
  } else {
    hamburgerClose();
  }

  console.log("app hamburger");
});
