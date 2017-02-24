$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $("#random").click(function() {window.open("https://en.wikipedia.org/wiki/Special:Random")});
   
  $("#search").keypress(function(e){
    if(e.which==13){
    $("#ok").click();
    }
  });
$("#ok").on("click",  function(){
   $("#list").empty().fadeOut('slow');
    var search = document.getElementById("search").value;

$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent(search) +"&limit=8&format=json&callback=?", function(json){
    
   var i =0;
  var results = json[1];
  var text =  json[2];
  var html ="";
  var link = json[json.length - 1];
  

 while( i<results.length){
   $("#list").append("<div id=\"result\" class=\"well center-block\">"+ " "+"<a href="+"\""+link[i]+"\""           +"target=\"blank\""+"<p id=\"word\">"+results[i]+"</p>"+"</a>" +" "+"<p id=\"text\">"+text[i]+"</p>" +"</div>").fadeIn('slow');i++;
}
document.getElementById("footer").style.position = "static";
     });
  });
});