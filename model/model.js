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

export function hamburgerOpen(){
  const navStyles ={
    'height' : "100vh",
    'width' : "100px",
    'justify-content' : 'space-between'
  }
  $(".links").css("display", "block");
  $("nav").css("height", "100vh");
}
