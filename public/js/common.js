// bg-random
$(function () {
  var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg'];
  $('.site-wrapper-home').css({
    'background-image': 'url(public/img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'
  });
});
// bg-random end

// wow
$(function() {
	new WOW().init();
});
// wow end
// top
$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("active");
  } else {
    $('.top').removeClass("active");
  };
});
// top end

// sidebar
$(function() {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
});
// sidebar end
