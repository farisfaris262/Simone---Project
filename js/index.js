let up_Contenar = document.querySelector(".up-contenar");
let home = document.getElementById("home");
let navbar = document.querySelector(".navbar");

//---------- up-arrow-icone ----------
window.onscroll = function () {
  if (scrollY > $("#home").outerHeight(true) - $(".navbar").outerHeight(true)) {
    up_Contenar.style.display = "block";
    navbar.classList.replace("bg-transparent", "bg-body-tertiary");
  } else {
    up_Contenar.style.display = "none";
    navbar.classList.replace("bg-body-tertiary", "bg-transparent");
  }
  up_Contenar.addEventListener("click", function () {
    scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};


let color = ["red", "#09c", "blue", "tomato"];

for (let i = 0; i < $(".color-contenal li").length; i++) {
  $(".color-contenal li").eq(i).css("background-color", color[i]);
}
optinAnimate();
$(".color-icon").click(optinAnimate);

function optinAnimate() {
  if ($(".color-option").css("left") == "0px") {
    $(".color-option").animate(
      { left: -$(".color-contenal").outerWidth(true) },
      500
    );
  } else {
    $(".color-option").animate({ left: "0px" }, 500);
  }
}


$(".color-contenal li").click((e)=>{

  let selected_color = $(e.target).css('background-color')

  $('.selected_color').css('color' ,selected_color)
})