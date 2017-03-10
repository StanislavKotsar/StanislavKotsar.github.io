

$(document).ready(function() {
  $.ajaxSetup({ cache: false }); 
  
 $("#getMessage").on("click", function (){
  
      $("#content").fadeOut(1000, function(){
        $.getJSON("https://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback="  + new Date().getTime(), function(json){
var val =json[0]; 
var content =val.content;      
   if(content.length> 140&&content.length<220){ 
      document.getElementById("quote").style.font= " 3em 'Oleo Script', cursive";
      document.getElementById("tweet").disabled = true;             
    }else if(content.length<= 140){
      document.getElementById("quote").style.font= " 3.5em 'Oleo Script', cursive";
      document.getElementById("tweet").disabled = false;                            
    }else{
      document.getElementById("quote").style.font= " 2em 'Oleo Script', cursive";
      document.getElementById("tweet").disabled = true;
    } 
    $('#quote').html(content);
    $('#author').html( val.title );
    $("#content").fadeIn(500);
    
      });
      
  });

 });
  
     $('#tweet').click(function() {
    window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote").text())+ encodeURIComponent($('#author').text()));
  });
});
    
  