$(document).ready(function() {
var side, otherSide;
var modal = document.getElementById('myModal');
var round1 = ["1","3","5","7","9"];
var win =["258","456","789","159","357","147","123","369"];
var rFirst =  "13579";
var  pos=[1,2,3,4,5,6,7,8,9];
var res = [];
var score=0;
var result=[];
var id;
var total=[];
var otRes=[];
var siRes=[];
var round=0;
var hod="u";
var funct;
var test;
var name;
var win2=["258","951","456","789","357","147","123","369"];
var game_over = document.getElementById('game_over');
 modal.style.display = "block";


function search(val){
score=0;
var res2=[];

for(var i=0;i<res.length;i++){
	if(val.indexOf(res[i])!==-1){
		score++;
		res2.push(res[i]);
	}
if(score>1){
	result=val;
	id=result;
	
	id = id.replace(res2[0], "");
	id = id.replace(res2[1],"");
	id=Number(id);
	if(total.indexOf(id)!==-1){
		id=undefined;
	}
	
	}}
	if(id===undefined){test=1;}
	funct="search";
return id, test, funct;

}//Function search

function tot(val){
score=0;
var res3=[];
for(var i=0;i<total.length;i++){

	if(val.indexOf(total[i])!==-1){
		score++;
		res3.push(total[i]);}
if(score>2){
	win=win.filter(function(a){
	return a!==val;});
	}
}

funct="tot";
return win;

}//function tot

function tot2(val){

for(var i=0;i<siRes.length;i++){

	if(val.indexOf(siRes[i])!==-1){
	win2=win2.filter(function(a){
				return a!==val;});
	}
	
}

return win2;

}//function tot2


function draw(val){
var jop;
function filt2(val){
if(win2[0].indexOf(val)!==-1){

	jop=win2[0].replace(val, "");
}
}
total.forEach(filt2);
id=jop[0];
id=Number(id);
if(total.indexOf(id)!==-1){
		id=undefined;
	}
funct="draw";
return id,funct;


}//     DRAW





 $("#Tic").on("click", function(){
modal.style.display = "none";
side = "X";
otherSide ="O";
 });//Tic
  $("#Tac").on("click", function(){
modal.style.display = "none";
side="O";
otherSide = "X";
 });//Tac
$('#play').click(function() {
    location.reload();
});




if(hod==="u"){
 $(".item").on("click",function(){
 
 
 var t=event.target.id;
 var num = Number(t);
 t=num;
 var x = document.getElementById(t).textContent;
 rFirst = rFirst.replace(t, "");
 var le = rFirst[0];
 var l = x.length;
 siRes.push(num);
 total.push(num); 
 hod="o";
	pos=pos.filter(function(val){
		return val!==t;
	});

 	 round++;//round	
 if(l<1){
  	$(this).css("color","green");
	 	
 	$(this).html(side);

 	if(round===1){	

		var y = document.getElementById("5").textContent;
			if(y.length===0){
				id=5;}
			else{id=Number(rFirst[0]);} 

	}else{
	
	win.forEach(tot);

 	id=undefined;
 	test=0;
	if(id===undefined&&siRes.indexOf(3)!==-1&&siRes.indexOf(7)!==-1&&round===2){
		id=4;
	}else if(id===undefined&&siRes.indexOf(1)!==-1&&siRes.indexOf(9)!==-1&&round===2){
		id=4;
	}else if(id===undefined&&siRes.indexOf(2)!==-1&&siRes.indexOf(4)!==-1&&round===2){
		id=1;
	}else if(id===undefined&&siRes.indexOf(2)!==-1&&siRes.indexOf(6)!==-1&&round===2){
		id=3;
	}else if(id===undefined&&siRes.indexOf(4)!==-1&&siRes.indexOf(8)!==-1&&round===2){
		id=7;
	}else if(id===undefined&&siRes.indexOf(8)!==-1&&siRes.indexOf(6)!==-1&&round===2){
		id=9;
	}
	else if(id===undefined&&((siRes.indexOf(2)!==-1&&siRes.indexOf(7)!==-1)||(siRes.indexOf(4)!==-1&&siRes.indexOf(3)!==-1))&&round===2){id=1;}
	else if(id===undefined&&((siRes.indexOf(2)!==-1&&siRes.indexOf(9)!==-1)||(siRes.indexOf(6)!==-1&&siRes.indexOf(1)!==-1))&&round===2){id=3;}
	else if(id===undefined&&((siRes.indexOf(4)!==-1&&siRes.indexOf(9)!==-1)||(siRes.indexOf(8)!==-1&&siRes.indexOf(1)!==-1))&&round===2){id=7;}
	else if(id===undefined&&((siRes.indexOf(8)!==-1&&siRes.indexOf(3)!==-1)||(siRes.indexOf(6)!==-1&&siRes.indexOf(7)!==-1))&&round===2){id=9;}


if(id===undefined){
res=otRes;	
win.forEach(search);
if(id!==undefined){
funct="  work";}


}
 win2.forEach(tot2);

if(id===undefined){
test=0;	
res=siRes;
win.forEach(search);

if(id===undefined&&test===1){

win2.forEach(draw);

if((id===undefined&&pos.indexOf(id)===-1)||id>9){
	id=pos[0];
	funct="pos";
}
	}


}

	

   }

   	function add(){
   		$("#"+id).css("color","red");
   		$("#"+id).html(otherSide);
   		clearInterval(adding);	
   	}

	function endDraw(){                        //funct work
		game_over.style.display = "block";
		$("#result").html("It's a draw");
	}
	function endLose(){
		game_over.style.display = "block";
		$("#result").html("You lose.");

	}



		pos=pos.filter(function(val){
			return val!==id;});
		var adding = setInterval( add, 500);
		//$("#"+id).css("color","red");
		//$("#"+id).html(otherSide);
		total.push(id);
		otRes.push(id);
		hod="u";//                         otRes push
   rFirst = rFirst.replace(le, "");
   rFirst = rFirst.replace(id,"");
	


	

	if(funct==="  work"){

		var endL = setInterval( endLose, 500);

	}
	
	if(round>4){
		var endD = setInterval( endDraw, 500);
	}
	//$("#otherside").html(otRes);
	
	//$("#side").html(siRes);

	
	clearInterval(endLose);
	clearInterval(endDraw);

 	
 }//if l<1

});// on click
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

});