$(document).ready(function() {

var greenC = {
		oldColor:"#52CD5E",
		color:"#66FF76",
		id:"greenC",
		audio: new Audio('simonSound1.mp3')

	};

var redC = {
		oldColor:"#CD5262",
		color:"#FF667B",
		id:"redC",
		audio: new Audio('simonSound2.mp3')

	};

var blueC = {
		oldColor:"#528BCD",
		color:"65ADFF",
		id:"blueC",
		audio:new Audio('simonSound3.mp3')
	};

var yellowC = {
		oldColor:"#BCCD52",
		color:"ECFF66",
		id:"yellowC",
		audio: new Audio('simonSound4.mp3')
	};
var mistake= new Audio("metal_plate_2.aac");


 var list = [blueC, yellowC, redC, greenC, redC, blueC, blueC,
 yellowC, redC, greenC, redC, blueC, yellowC, greenC, greenC,
 redC, yellowC, yellowC, greenC , blueC ];
var find =[ "greenC","redC","blueC","yellowC"];
var find2 =[ greenC,redC,blueC,yellowC];
var rightList =[];
var myList =[];
var change = false;
var strict_change = false;
var wait = false;
var right = 0;
var count=1;
var time;
var waiT;
var game_over = document.getElementById('game_over');
var block =false;
var start = false;

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

shuffle(list);


function notActive(){

$( ".item" )
  .mouseup(function() {
 var t=event.target.id;
 var n= find.indexOf(t);
 $("#test").html(find2[n].id);
 $( "#"+t ).css( "fill", find2[n].oldColor );
  })
  .mousedown(function() {
  var t=event.target.id;
  var n= find.indexOf(t);
    $( this ).css( "fill", find2[n].oldColor );
    find2[n].audio.pause();
    mistake.pause();
  });

}//not active


function show(val){
   // notActive();
    block=true;
    setTimeout (function(){ block=false;}, 1000*val);
for (var i = 0; i < val; i++) {

	rightList.push(list[i].id);
   (setTimeout(function(x) { return function() { 
  	$("#"+list[x].id).css("fill", list[x].color);
	list[x].audio.play();
	setTimeout( function(x){ return function(){
	 	$("#"+list[x].id).css("fill", list[x].oldColor);
	 	
	  		};

	 	}(x),	500);

     };
      }(i), 1000*i)


    );
  
    
}// end for
if(count<10){
$("#screen").html("0"+count);}
else{$("#screen").html(count);}

time=setTimeout(function(){return waitFor();}, count*1000+7000);
}//end show

function active(){

function stopTimeFunction() {
    clearTimeout(time);
}
function stopWaitT(){
	clearTimeout(waiT);
}	


$( ".item" )
  .mouseup(function() {
 var t=event.target.id;
 var n= find.indexOf(t);

 $( "#"+t ).css( "fill", find2[n].oldColor );

  })
  .mousedown(function() {

  stopTimeFunction();
  stopWaitT();

  var t=event.target.id;
  var n= find.indexOf(t);
 if(block===false){
  	myList.push(find[n]);
	}

  if(myList[right]===list[right].id&&right<=count&&block===false){
  	find2[n].audio.play();
  	right++;
  	if(right===count){
  		if(right===list.length){
	game_over.style.display = "block";
	$("#result").html("Congratulations!!!");
	}else{	
		block=true;
  		count++;
  		setTimeout(function(){ return show(count);},3000);
  		right=0;
  		myList = [];}
  	}
  }else{
  	if(strict_change===false&&block===false){
  	mistake.play();
  	right=0;
  	myList = [];
    block=true;
  	setTimeout(function(){ return show(count);},3000);
  }else if(strict_change===true&&block===false){
  	mistake.play();
  	right=0;
  	count=1;
  	myList = [];
    block=true;
  	setTimeout(function(){ return show(count);},3000);
  }
  }




  $( this ).css( "fill", find2[n].color );
  });

  
}//active



function waitFor(){
	mistake.play();
		if(strict_change===true){
		count=1;
	}
	waiT=setTimeout( function(){	return show(count);}, 2000);

}

$("#strict").on("click",function(){
	if(change==true){
	if(strict_change===false){
		$( "#strictC").css( "fill", "#66FFF6" );
		strict_change=true;//on
	}else{
		$( "#strictC").css( "fill", "#33807B" );
		strict_change=false;}//off
}



});

$('.button-wrap').on("click", function(){
  $(this).toggleClass('button-active');
    if(change===false){
      change=true;
      start=true;
      $("#screen").html("00");
    }else{

	change=false;
	notActive();

    }


  });


$("#start").on("click", function(){
	if(change===true&&start===true){
	setTimeout(function(){ return show(count);},1000);
	active();
  start=false;
	

	}
});

$('#play').click(function() {
    location.reload();
});

	                       //funct work
	







});

