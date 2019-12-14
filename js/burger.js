$(document).ready(function () {
  $('.burger_btn').on('click', function (event) {
    event.preventDefault();
    $('body').toggleClass('menu-show');
    $('body').toggleClass('search-show');
  });
  $(".menu li a").on("click", function (event) {
    $('body').toggleClass('menu-show');
    $('body').toggleClass('search-show');
  });
});