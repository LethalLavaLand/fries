function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
 document.getElementById("saves").style.display = "none";
 document.getElementById("mainTab").click();
 var hunger;
 var multi;
 var hydration;
 var bar1=false;
 var saveFile;
 function beginning(){
	hunger = 13;
	multi = 1;
	hydration = 13;
	resetBars();
	document.getElementById("mainTab").click();
  }
  memes = localStorage.getItem("cool");
if (localStorage.getItem("cool") === null){
beginning();
}
else {
  loadGame((memes.split(',')));
}
   function resetGame() {
   if (confirm('reset everything')) {
     beginning();
   }
 }

  function loadGame(saveInput){
   x = saveInput
   hunger = parseFloat(x[0]) || 13;
   multi = parseFloat(x[1]) || 1;
   hydration = parseFloat(x[2]) || 13;   
}
  function copySave(){
    prompt("Save Data:",saveFile)
    
  }
  function importSave(){
    try {
      importing = prompt("Put Save Data: ")
	if(importing==null||importing=="")
		  alert("nothing");
	  else{
      importing = atob(importing)
      loadGame(importing.split(','))
	  }
    }
    catch(err){
       document.getElementById("mainTab").click();
    }
  }
  
  function resetBars(){
	document.getElementById("bar").style.width= 0 + '%';
	bar1=false;
  }
  
 //////////////////////////////////////////////////////////
  
   function hungerplus(number){
	   if(number==1&&hunger<13){
	hunger=hunger+number; 
	   }
	   else if(number==-1&&hunger>0){
		   	hunger=hunger+number; 
	   }
 }
   function hydrationplus(number){
	   if(number==1&&hydration<13){
	hydration=hydration+number; 
	   }
	   else if(number==-1&&hydration>0){
		   	hydration=hydration+number; 
	   }
 }
 
 function bar() {
  var elem = document.getElementById("bar");   
  var width = 0;
	  elem.style.width = (hydration/13)*100 + '%';
 }
  function hbar() {
  var elem = document.getElementById("hbar");   
  var width = 0;
	  elem.style.width = (hunger/13)*100 + '%';
 }
  function frame() {
    if (width >= 100) {
		hydration++;
		bar1=false
		elem.style.width = 0 + '%'; 
      clearInterval(id);
    } else if(bar1==true){
      width=width+(hunger/100); 
	  if(width>100){
		  width=100
	  }
      elem.style.width = width + '%'; 
	}
		else{
		clearInterval(id);
	}
  }
 
 //////////////////////////////////////////////////////////
 
  setInterval(function(){
	    localStorage.setItem("cool",[hunger, multi, hydration].toString());
		saveFile = btoa(localStorage.getItem("cool"))
		bar();
		hbar();
		document.getElementById("hungerNumber").innerHTML = Math.round(hunger);
		document.getElementById("hydrationNumber").innerHTML = Math.round(hydration);
  }, 50);