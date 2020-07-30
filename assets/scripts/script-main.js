const pull = $('#pull');
menu = $('nav div.navbar ul');

$(pull).on('click', function (e) {
  e.preventDefault();
  menu.slideToggle();
});
$(window).resize(function () {
  var w = $(window).width();
  if (w > 600 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});