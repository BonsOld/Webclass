function myProjects() {
    var x = document.getElementById("myProjects");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function myPractices() {
  var x = document.getElementById("myPractices");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myBooks() {
  var x = document.getElementById("myBooks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.onload = function splashtext(){
	var splashes = ["I'm stuff","pip plop","Obama isn't real","Subscribe to PewDiePie","Believe in Steven","Hello Starlight","ðŸ˜ºðŸ˜¸ðŸ˜¹ðŸ˜»ðŸ˜¼ðŸ˜½ðŸ™€ðŸ˜¿ðŸ˜¾","it be like that"
, "Jesus is King", "Area 51 ðŸ‘½","ðŸ¤¡CANCELLEDðŸ¤¡","Gone Fishing","Merry Sample Text","Minecraft","Robert Downey Jr.","I'm monky","ä½•?","Bing Bong",
"BIG BRAIN", "Shrek is King", "Not the bees!", "Gone Mining", "Mining away","Fishing away","Creeper?","Aw man","Sksksksksk","pew pew pew",
"Powered by Redstoneâ„¢","Unless...?","Show feet UwU","*notices paws*","nooo ur so sexy ahaa"];
	var lengthSplashes = splashes.length;
	var randSplashId = Math.floor(Math.random() * lengthSplashes);
	document.getElementById("bounce").innerHTML = splashes[randSplashId];
}

function setHalfVolume(){ 
  var click = document.getElementById("click");
  click.volume = .1;
}