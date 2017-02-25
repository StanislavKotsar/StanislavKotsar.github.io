$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    
	})


  var chanell =["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion",  "kinggothalion", "habathcx", "RobotCaleb", "noobs2ninjas","esl_wot_cis","bbrebrberb","Bla_bla_chanell"];
    var res=[];

  var opa = chanell.map(function(val){
 return   "https://api.twitch.tv/kraken/streams/"+val+"?client_id=ak2cy3uik9zeoseg3lsdpfjjm54xm8i";
  });
 

  var n= 0;
  for(var i=0; i<chanell.length;i++){
    var offline=[];
    var online=[];
    var chnl = chanell[i];
   
       
 $.getJSON(opa[i] , function(data){
   
 
 
   if(data.stream==null){
     var names = data._links.self.split("/");
          var name = names[names.length-1]
          var url = "https://www.twitch.tv/"+name;
   offline.push("<div id=\"offline\" class=\"well row center-block\">"+"<h5 id=\"offline\">"+"<a href=\""+url+"\" id=\"offline\""+"target=\"blank\""+">"+name+"</a>"+"</h5>"+"<h6>"+"OFFline :("+"</h6>"+"</div>");
   $("#tab-1").append("<div id=\"offline\" class=\"well row center-block\">"+"<h5 id=\"offline\">"+"<a href=\""+url+"\" id=\"offline\""+"target=\"blank\""+">"+name+"</a>"+"</h5>"+"<h6>"+"OFFline :("+"</h6>"+"</div>");
     
   }else{
     online.push("<div id=\"result\" class=\"well row center-block\">"+"<div id=\"image\">"+"<img align=\"left\" src=\""+data.stream.channel.logo+"\">"+"</div>"+"<div id=\"text\">"+"<h4 id=\"online\">"+"<a href=\""+data.stream.channel.url+"\" id=\"online\""+"target=\"blank\""+">"+data.stream.channel.name+"</a>"+"</h4>"+data.stream.channel.status+"</div>"+"</div>");
     $("#tab-1").append("<div id=\"result\" class=\"well row center-block\">"+"<div id=\"image\">"+"<img align=\"left\" src=\""+data.stream.channel.logo+"\">"+"</div>"+"<div id=\"text\">"+"<h4 id=\"online\">"+"<a href=\""+data.stream.channel.url+"\" id=\"online\""+"target=\"blank\""+">"+data.stream.channel.name+"</a>"+"</h4>"+data.stream.channel.status+"</div>"+"</div>");

   }
   ;
   n=n+1;
   res.push(data);
   $("#tab-3").html(offline);
    $("#tab-2").html(online);

 })  .fail(function(json) { 
    $("#tab-1").append("<div id=\"close\" class=\"well row center-block\">"+"<h5 class=\"red\">"+"WHOOPS)"+"<br>"+"<h5 id=\"close\">"+json.responseJSON.message+"</h5>"+"</div>"); 
 
 })

   };
})