var count = 1; 
setInterval( function() { 
   $('.slide-' + count).removeClass('show'); 
//    $('.slide-3').hide(); 
   console.log("Hidden image " + count);
   count += 1;
   console.log("Shon image " + count);
   $('.slide-' + count).addClass('show');
   
   if(count  == 4) {
    $('.slide-1').addClass('show');
    count = 1;
    
   }
}, 5000);