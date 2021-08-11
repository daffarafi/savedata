$(window).scroll(function () {
  let scroll = $(this).scrollTop();
  $("h1").css({
    transform: `translateY(${scroll / 2}%)`,
  });

  $(".kotak").css({
    transform: `translateY(${scroll / 4}%)`,
  });
});
