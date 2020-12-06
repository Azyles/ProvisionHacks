jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 4;
    mouseY = e.pageY - 4; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/10);
    yp += ((mouseY - yp)/10);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});