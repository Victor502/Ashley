//Sticky header

$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
  });

$('.sticky').sticky({
  getWidthFrom: '',
  responsiveWidth: true
});

$('.description').sticky({
  getWidthFrom: '',
  responsiveWidth: true
});

$('.description').sticky({
  topSpacing: 50,
  getWidthFrom: '.container',
  responsiveWidth: true
});


//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);
//Add caption to overlay
$overlay.append($caption);
//Add overlay
$("body").append($overlay);
//Capture the click event on a link to an image
$("#product_gallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
  //Update overlay with the image linked in the link
    $image.attr("src",imageLocation);

  //Get child's alt attribute and set caption
    var $captionText = $("#product_gallery div alt").text();
    //var $paypal = $(".paypal").appendTo($overlay);
    
    //var $captionText = $(this).children("#product_gallery div img").attr("alt");
    
    $caption.text($captionText);
    
        //Show the overlay. 
    $overlay.show();
    
    });


//When overlay is clicked
$overlay.click(function (){
      //Hide the overlay
    $overlay.hide();
   // $(".paypal").appendTo(".product");
    
});


(function($){
  $.ScrollUpToTop({
    "speedUp":1500
  });
})(jQuery);

