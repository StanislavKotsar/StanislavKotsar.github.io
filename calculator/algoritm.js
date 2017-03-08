var str ="";
var string=" ";

$(document).ready(function() {
var lScreen = document.getElementById("littleScr");

var number="";
var pl=[];
var operation ="";
var num ; 
var dot = 0;
var act =0;
var oper; 
var trinity = "..."; 

function addN(){
  console.log(pl,operation," addN");
  pl.push(operation);
  console.log(num, "num");
  if(num!==0){
    pl.push(num);
    string =string.concat(num);
  }
  string = string.concat(operation);
  lScreen.textContent = string;
  // lScreen.textContent = string;
  console.log(pl," addN END");

}

function actZero(){
  
  pl.push(num);
  pl.push(operation);
  string = string.concat(num, operation);
  console.log(num, pl, "actZero");
  lScreen.textContent = string;

}

function reset(){
    number ="";
    dot=0;
    act=0;
}
function change(t){
      switch(t){
      case "plus":
        operation="+"; 
        break;
      case "minus":
        operation="-";
        break;
      case "multiply":
        operation="*";
        break;
      case "division":
        operation="/";
        break;
    }
}

$(this).on("click", function (event){
 var t=event.target.id;
  
    if(number.length<10&&t!=="AC"&&t.length===1){

    number=number.concat(Number(t));
    $("#screen").html(number);
    
 }
var res = $( "#screen" ).text();  
if(t===$("#AC").text()||t==="CE"){
  number="";
  pl=[];
  operation ="";
  num = 0; 
  dot = 0;
  act = 0; 
  $("#screen").html("0");
  string = "";
  lScreen.textContent = string;

}
 if(t==="zero"&&number.length<10){
    if(number.length===0||Number(number)===0){      
    number="0";
    }else{
    number=number.concat("0");} 
    $("#screen").html(number);
  }
  var l = $("#screen").text();
  
if(t==="dot"&&dot===0&&l.length>0){
  number= number.concat(".");
  $("#screen").html(number);
  dot=1;
}

  if(t ==="result"){
    num = Number(number);
    pl.push(num);
    var oper = pl[1];
    pl.splice(1, 1);
    console.log(pl);
    if(oper === "+"){

      pl = [pl.reduce(function(a,b){
        return a+b;})];
      }
    else if(oper === "-"){

      pl = [pl.reduce(function(a,b){
        return a-b;})];
      }
    else if(oper === "*"){
      pl= [pl[0]*pl[1]]; 
    }
    else if(oper === "/"){      
      pl= [pl[0]/pl[1]];
      console.log(pl);

    }

   
    console.log(pl);
    oper="";
    
    var n = pl.toString();

    if(typeof(pl)==="object"&&Boolean(pl[0]===false)){
      pl="0";
    }
    var test = pl.toString();
    if(test.length>11){
      test=test.slice(0,10);
      pl=Number(test);
    }
    if(pl[0]>9999999999){
      n=n.slice(0, 10);
      lScreen.textContent="Erorr";
    }else{
      string = "" + pl[0] + "";
      lScreen.textContent= string;
    }


    $("#screen").html(pl[0]);
    number ="";
    dot=0;
    act=1;
    console.log(pl," result");
    }
  

   if(t==="plus"||t==="minus"||t==="multiply"||t==="division"){
    change(t); 
    num = Number(number);
    if(act===1){
      addN();
    }else if(act===0){
      actZero();
      }
    reset();
  }
  

  if(pl.length>3){

    if(string.length<30){
      lScreen.textContent = string;
    }
    var opert = pl[1];
    console.log(pl," pl.length>3");
    var add = pl[3];
    pl.pop();
    pl.splice(1, 1);
    
if(opert === "+"){
    pl= pl.reduce(function(a,b){ return a+b;});
  }else if(opert === "-"){
    pl= pl.reduce(function(a,b){ return a-b;});
  }else if(opert === "*"){
    pl= pl.reduce(function(a,b){ return a*b;}); 
  }else if(opert === "/"){    
    pl= pl.reduce(function(a,b){ return a/b;}); 
   
    }
    
    $("#screen").html(pl);

    opert="";
    pl =[pl];
    pl.push(add);
    console.log(pl," add");


    
}//if oper<3

});
});


