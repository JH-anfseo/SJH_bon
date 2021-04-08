$(function() {
    
    
$(window).scroll(function() {
  var asideScroll = $('div.aside_menu');
  var MainWidth = $('#mainheader').innerHeight();
  if($(this).scrollTop() >= MainWidth) {
      asideScroll.css({'opacity': 1});
    }else if($(this).scrollTop() <= MainWidth){
       asideScroll.css({'opacity': 0}); 
    }
});

var numSlide = $('.slidetext li').length;
var slideNow = 0;
var slidePrev = 0;
var slideNext = 0;
var slideFirst = 1;
var timerId = '';
var isTimerOn = true;
var timerSpeed = 3000;

showSlide(slideFirst);

$('#mainheader ul.slidetext li').each(function(i) {
    $(this).css({'left': (i * 100) + '%', 'display': 'block'});
    });

$('#mainheader ul.indicator li a').on('click', function() {
    var index = $('#mainheader ul.indicator li').index($(this).parent());
    showSlide(index + 1);
    });
function showSlide(n) {
     clearTimeout(timerId);
    if (slideNow === 0) {
        $('#mainheader ul.slidetext').css({'transition': 'none', 'left': -((n - 1) * 100) + '%'});
    } else {
        $('#mainheader ul.slidetext').css({'transition': 'left 0.3s', 'left': -((n - 1) * 100) + '%'});
    }
    $('#mainheader ul.indicator li').removeClass('on');
    $('#mainheader ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
    slideNow = n;
    slidePrev = (n - 1) < 1 ? numSlide : n - 1;
    slideNext = (n + 1) > numSlide ? 1 : n + 1;
    if (isTimerOn === true) {
        timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
    }
    };
    
    
    
$(window).on('scroll resize', function() {
    checkVisibility('#menutitle article');
});

    
function checkVisibility(selector) {
    var scrollTop = $(document).scrollTop();
    $(selector).each(function() {
        var $selector = $(this);
        var minScroll = $selector.offset().top - $(window).height();
        var maxScroll = $selector.offset().top + $selector.outerHeight();
        if (scrollTop < minScroll) {
            if ($selector.hasClass('down') !== true) {
                $selector.removeClass('show');
                $selector.addClass('down');
            }
        } else {
            if ($selector.hasClass('show') !== true) {
                $selector.removeClass('down');
                $selector.addClass('show');
            }
        }
    });
}
var startSlide = $('div.start_in ul.bonstart li').length;
var startNow = 0;
var startPrev = 0;
var startNext = 0;
var startFirst = 2;

$('div.start_in ul.bonstart li').each(function(i) {
    $(this).css({'left': (i * 60) + '%', 'display': 'block'});
    });
startShow(startFirst);    
$('div.arrow_control a.prev').on('click', function() {
    startShow(startPrev);
});
$('div.arrow_control a.next').on('click', function() {
    startShow(startNext);
});    
    
function startShow(n) {
    if (startNow === 0) {
        $('div.start_in ul.bonstart').css({'transition': 'none', 'left': -((n - 1) * 60) + '%'});
    } else {
        $('div.start_in ul.bonstart').css({'transition': 'left 0.3s', 'left': -((n - 1) * 60) + '%'});
    }
    $('ul.start_txt li').removeClass('on')
    $('ul.start_txt li:eq(' + (n - 1) +')').addClass('on');
    startNow = n;
    startPrev = (n - 1) < 1 ? startSlide : n - 1;
    startNext = (n + 1) > startSlide ? 1 : n + 1;
    }  ;  
    
	$('.nmenu_in ul li a').on('click',function(){
	$('div.nmenupic img').before("<img src='" + $(this).attr('href') + "' alt=''>");
	$('div.nmenupic img:last').fadeOut('fast',function(){
	$(this).remove();
	});
	return false;
	});
  
  $('#news article').on('click',function(){
    $('#news article').css({'width': 20 + '%'});
    $(this).css({'width': 50 + '%'});
     $('#news article').on('click',function(){
    $('#news article').css({'width': 30 + '%'});
     });
  })
});