// Event ketika diklik
$(".page-scroll").on("click", (e) => {
  let event = $(this).attr("href");
  let element = $(event);

  // $('html, body').scrollTop(element.offset().top - 50)
  $("html, body").animate(
    {
      scrollTop: element.offset().top - 50,
    },
    700,
    "easeInOutExpo"
  );

  e.preventDefault();
});

$(window).scroll(() => {
  let scroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: `translateY(${scroll / 4}px)`,
  });
  $(".jumbotron h1").css({
    transform: `translateY(${scroll / 4}px)`,
  });
  $(".jumbotron p").css({
    transform: `translateY(${scroll / 4}px)`,
  });

  //   let port = $(".portofolio .thumbnail").offset().top;

  //   if (scroll > port - 280) {
  //     $(".portofolio .thumbnail").addClass("summon");
  //   }

  let allport = $(".portofolio .thumbnail");

  for (let i = 0; i < allport.length; i++) {
    if (scroll > allport.eq(i).offset().top - 280) {
      $(allport).eq(i).addClass("summon");
    }
  }

  let about = $(".about");
  let pabout = $(".about p");

  if (scroll > about.offset().top - 600) {
    pabout.addClass("pmuncul");
  }
});

// let pabout = $(".about p");

// $(window).on("load", () => pabout.addClass("pmuncul"));
