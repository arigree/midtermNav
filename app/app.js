import { changePage, hamburgerOpen } from "../model/model.js";

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

$(document).on("click", ".hamburger", function(event){
  event.preventDefault();
  hamburgerOpen()
  console.log("app hamburger")
})