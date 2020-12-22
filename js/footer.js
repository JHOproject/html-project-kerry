$(document).ready(function () {
  $('.top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 700);
    // $('html, body').animate({
    //     scrollTop: 100, //jQuery屬性
    // }, 'slow'); //秒數可放變數, slow, fast, 數字....
  });
});