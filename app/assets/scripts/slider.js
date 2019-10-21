var count = 1; 
setInterval( function() { 
   $('.slide-' + count).removeClass('show'); 
//    $('.slide-3').hide(); 
   console.log("Hidden image " + count);
   count += 1;
   console.log("Shown image " + count);
   $('.slide-' + count).addClass('show');
   
   if(count  == 4) {
    $('.slide-1').addClass('show');
    count = 1;
    
   }
}, 5000);

$('.slide-1').addClass('show');

var herocount = 1; 

setInterval( function() { 
   $('.heroslide-' + herocount).removeClass('heroshow'); 
   console.log("Hidden image " + herocount);
   herocount += 1;
   console.log("Shown image " + herocount);
   $('.heroslide-' + herocount).addClass('heroshow');
   
   if(herocount  == 5) {
    $('.heroslide-1').addClass('heroshow');
    herocount = 1;
    
   }
}, 5000);

$('.heroslide-1').addClass('heroshow');
