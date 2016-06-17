    /*
    @title - Calculator
    @author - mike
    @date -13/06/2016
    */


var compteur = 0;

/**var $position = $(".fond").position().left;
if ($position>0 && $position<3500){    **/
$( document).keydown(function( event ) {

/**frontiere maps à gauche**/
var posX = $(".map").position().left;
        if (posX > 0){
            $( ".map" ).stop().animate({left:"-=" +posX});
        };
/**frontiere maps à droite**/
var rightPosX = $(".map").position().left;
    if (rightPosX < -7500){
            $( ".map" ).stop().animate({left:"-=" +rightPosX});
        };


  switch(parseInt(event.which,10)) {
      // On a appuyé sur la touche gauche
      case 68:
      
        $(".map").animate({left: "-=30px"}, 20);
        $(".yoshi").css({transform: 'scaleX(-1)'});
        break;
    
      // On a appuyé sur la touche droite//
      case 81:
        $(".map").animate({left: "+=30px"}, 20);
        $(".yoshi").css({transform: 'scaleX(1)'});
        break;
       // On a appuyé sur la touche saut//
      case 83:
        $(".yoshi").animate({top: "-=120px"}, 150);
        $(".yoshi").animate({top: "+=120px"}, 150);
        break;
    }       
});
/**detection des collisions entre Yoshi et les anneaux**/
function collision($yoshi, $ring) {
      var x1 = $yoshi.offset().left;
      var y1 = $yoshi.offset().top;
      var h1 = $yoshi.outerHeight(true);
      var w1 = $yoshi.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $ring.offset().left;
      var y2 = $ring.offset().top;
      var h2 = $ring.outerHeight(true);
      var w2 = $ring.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
      }

/**recuperer la valeur true retournée par la fonction collision: faire disparaitre les anneaux**/
 window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring2"))==true) 
        {       
            $(".ring2").fadeOut();
            compteur+1;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
 window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring3"))==true) 
        {       
            $(".ring3").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
 window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring4"))==true) 
        {       
            $(".ring4").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
  window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring5"))==true) 
        {       
            $(".ring5").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
   window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring6"))==true) 
        {       
            $(".ring6").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
    window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring7"))==true) 
        {       
            $(".ring7").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
     window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring8"))==true) 
        {       
            $(".ring8").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
      window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring9"))==true) 
        {       
            $(".ring9").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
       window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring10"))==true) 
        {       
            $(".ring10").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
        window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring11"))==true) 
        {       
            $(".ring11").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
         window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring12"))==true) 
        {       
            $(".ring12").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
          window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring13"))==true) 
        {       
            $(".ring13").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
           window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring14"))==true) 
        {       
            $(".ring14").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });
            window.setInterval(function(){
    if (collision($(".yoshi"), $(".ring15"))==true) 
        {       
            $(".ring15").fadeOut();
            compteur++;
            $(".score").text(compteur);
            $(".sound")[0].play();
        };
    });

/**clignotement du texte**/
function FaireClignoterText (){ 
   $(".clignotant").fadeOut(400).delay(400).fadeIn(400); 
} 
$(document).ready(function(){ 
    setInterval('FaireClignoterText()',500); 
});


/**ouvrir nouvelle page HTML with spacebar**/
$(window).keypress(function(e) {
    if (e.which === 32) {
      window.open("second-fichier.html");
      $(".yoshiGetEgg")[0].play();
    }


});
