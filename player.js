(function(){
var path = location.href.substr(0, location.href.lastIndexOf("/")) + "/";
var player = document.getElementById("player");
var playing = document.getElementById("playing");
var file = document.getElementById("audiofile");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var controls;

file.addEventListener("change", function(){
    player.src = path + this.files[0].fileName;
    player.load();
    player.play();
    playing.innerHTML = "Playing "+player.src;
}, false);

function seek(ev){
    ev.preventDefault();
    var hrefList = ev.target.href.split("/");
    var href = hrefList[hrefList.length-1];
    var op = href.substr(0, 1);
    var time = parseInt(href.substr(1, href.length), 10);
    if(op === "+"){ player.currentTime += time; }
    if(op === "-"){ player.currentTime -= time; }
}

controls = document.getElementsByClassName("control");
for(var i=0, l=controls.length; i<l; i++){
    controls[i].addEventListener("click", seek, false);
}

play.addEventListener("click", function(ev){ev.preventDefault(); player.play();}, false);
pause.addEventListener("click", function(ev){ev.preventDefault(); player.pause();}, false);
stop.addEventListener("click", function(ev){ev.preventDefault(); player.stop();}, false);

}());
