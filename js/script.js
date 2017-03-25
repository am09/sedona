//Mobile menu
var mobileBtn = document.querySelector('.nav__btn');
var menuList = document.querySelector('.nav');

mobileBtn.addEventListener('click', function(event) {
    menuList.classList.toggle('nav--hide');
});

//Google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat: 34.869993, lng: -111.759950},
  	scrollwheel: false,
  	zoom: 8,
  	disableDefaultUI: true
  });
};

//Serch hotel
var formBtn = document.querySelector('.map-block__btn');
var form = document.querySelector('.map-block__form-wrapper');

formBtn.addEventListener('click', function(event) {
		event.preventDefault();
    form.classList.toggle('map-block__form-wrapper--show');
});

