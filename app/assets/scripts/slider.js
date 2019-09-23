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


function getMood(){
   var mood = ["Angry", "Happy", "Hungry", "Quiet"];
   return mood[Math.floor(Math.random() * mood.length)];
}


class JSdemo extends React.Component {
   render() {
      return(
         <div>
            <h1> My current mood is : {getMood()}</h1>
         </div>
      );
   }
}
React.createElement(components, props, children);