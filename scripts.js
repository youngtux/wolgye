/*!
* Start Bootstrap - Simple Sidebar v5.2.0 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// Toggles the sidebar

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// 현재 클릭한 a tag
function callFunction(obj) {
  console.log($(obj).attr('attr-c'));
  console.log($(obj).attr('attr-a'));
  var i = parseInt($(obj).attr('attr-a'));
  var j = parseInt($(obj).attr('attr-b'));
  var f_name = $(obj).attr('attr-c');
  changeCarousel(i,j,f_name);
}

// carousel 변경
function changeCarousel(i,j,f_name) {
  var text= "";
  var init= "active"
  var d_name="img/"
  // 
  if (f_name==="excel_basic") {
    d_name="course/excel_basic/"
    f_name="슬라이드"
  }
  for (cnt = i; cnt < j; cnt++) {
      text = text + "<div class="+"'"+"carousel-item "+init+"'"+">";
      text = text + "<img class="+"'"+"d-block w-100"+"'"+" src="+"'"+d_name+f_name+String(cnt)+".PNG"+"'"+" alt="+"'"+"slide "+ String(cnt) +"'"+">";
      text = text + "</div>"
      init ="";
  }
  $(".carousel-inner").empty();
  $(".carousel-inner").append(text);
}
