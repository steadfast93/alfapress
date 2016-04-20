

function initMap() {
  var map;
  var myLatLng = {lat: 46.46452676, lng: 30.7119792};

  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 18,
    scrollwheel: false,
    styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#dedede"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"weight":"10.00"},{"invert_lightness":true},{"gamma":"7.24"},{"lightness":"60"},{"saturation":"66"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"invert_lightness":true}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#d2cece"},{"invert_lightness":true},{"weight":"10.00"}]},{"featureType":"poi.sports_complex","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.sports_complex","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"poi.sports_complex","elementType":"labels.text.stroke","stylers":[{"gamma":"10.00"},{"invert_lightness":true},{"weight":"10.00"},{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"labels.icon","stylers":[{"visibility":"on"},{"weight":"5.10"},{"gamma":"0.00"},{"hue":"#ff0000"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
  });

  var image = 'img/map-marker.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: image,
    map: map,
    
  });


}



$(document).ready(function() {

$( "#menu_open" ).click(function() {
  $( ".menu" ).slideToggle( "slow" );
});


$(".menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            top +=15;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
});

$(".techn").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            top +=15;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
});

$('.owl-carousel-one').owlCarousel({
    loop:false,
    margin:0,
    nav: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-carousel-port').owlCarousel({
    loop:true,
    margin:25,
    nav: true,
    dots: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});


var owl = $('.owl-carousel-services').owlCarousel({
    loop:false,
    margin: 0,
    nav: false,
    dots: true,
    navText: ["",""], 
    URLhashListener:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var src = $(property.target).find(".owl-item").eq(current).find(".item").attr("data-hash");
    $(".button-space a").removeClass('active');
    $("a[href='#"+src+"']").addClass('active');
    console.log(src);
});


});