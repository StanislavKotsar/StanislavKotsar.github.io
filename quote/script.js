

$(document).ready(function() {
  $.ajaxSetup({ cache: false }); 
  
 $("#getMessage").on("click", function (){
      
  $.getJSON("https://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="  + new Date().getTime(), function(json){
     

var val =json[0]; 
var content =val.content;
    
               

     $('#quote').html( val.content);
    document.getElementById("quote").style.font= "'Oleo Script', cursive";
    
   if(content.length> 140&&content.length<220){ document.getElementById("quote").style.font= " 30px 'Oleo Script', cursive";
document.getElementById("tweet").disabled = true;                 
    }else if(content.length<= 140){document.getElementById("quote").style.font= " 35px 'Oleo Script', cursive";
document.getElementById("tweet").disabled = false;                            
                                  }else{
      document.getElementById("quote").style.font= " 20px 'Oleo Script', cursive";
      document.getElementById("tweet").disabled = true;
    } 
    
    
    
 
    $('#author').html( val.title );
    

  });

 });
  
     $('#tweet').click(function() {
    window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote").text())+ encodeURIComponent($('#author').text()));
  });
});
    
  