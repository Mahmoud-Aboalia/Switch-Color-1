/*
  
*/
$(document).ready(function () {
  let
    colorIcon = $("ul li");
  colorIcon.eq(0).css("background", "red");
  colorIcon.eq(1).css("background", "green");
  colorIcon.eq(2).css("background", "blue");
  colorIcon.eq(3).css("background", "yellow");
  colorIcon.click(function () {
    $("div").css("background", $(this).css("background"));
  });


});