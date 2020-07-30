// nav pull
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

// nav feedback
const select = document.querySelectorAll('.mark');
const toHideen = document.querySelector('nav div.navbar ul');
const nav = document.querySelector('a[id=pull]');

const navDisplay = getComputedStyle(nav);
console.log(navDisplay.display);

select.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (navDisplay.display === 'block') {
      e.target.parentElement.parentElement.style.display = 'none';
    }

  })
})