$(document).ready(function() {
   $('#slider').lightSlider({
       item:1,
       loop:true,
       slideMove:0,
       pager:true
   });


   $(function() {
       $('a.page-scroll').bind('click', function(event) {
           var $anchor = $(this);
           $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top
           }, 1500, 'easeInOutExpo');
           event.preventDefault();
       });
   });

 });
