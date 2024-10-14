export function changePage(pageName) {
  console.log("pageName:", pageName);
  if (pageName == "") {
    // $("#app").html(`<h1>home</h1>`);
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
    });
  } else {
    // $("#app").html(`<h1>${pageName}</h1>`);
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
    });
  }
}

export function hamburgerOpen() {
 
  $(".links").css("display", "block");
  $("nav").css("height", "100vh");
  $("nav").css("width", "100px");
  $("nav").css("justify-content", "space-between");
  $(".hamburger").css("display", "none");
  $(".hamburgerClose").css("display", "block");
  




  // $("nav").css("height", "100vh", "width", "100px");
}
export function hamburgerClose() {
 console.log("close")
  $(".links").css("display", "none");
  $("nav").css("height", "50px");
  $("nav").css("width", "50px");
  $(".hamburger").css("display", "block");
  $(".hamburgerClose").css("display", "none");
  // $("nav").css("height", "100vh", "width", "100px");
}
