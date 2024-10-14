import { changePage } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("route", pageID);
    changePage(pageID);
    
  }

function initSite() {
    $(window).on("hashchange", route);
    route();
  }
  
  $(document).ready(function () {
    initSite();
  });
  