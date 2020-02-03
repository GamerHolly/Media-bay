$(document).ready(function(){
    
	new WOW().init();
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
    });
    
    (function($) {  
        $(function() {  
          $('#up').click(function() {  
            $('body,html').animate({scrollTop:0},800);  
            return false;  
          })  
           
        })  
    })(jQuery)  
    
});

