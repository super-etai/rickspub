var popup = document.getElementById("popup");
var acceptButton = document.getElementById("accept");
var video = document.getElementById("rickroll");
var leftbar = document.getElementById("left-sidebar");
var rightbar = document.getElementById("right-sidebar");
var header = document.getElementById("piratehead");
var imperialhead = document.getElementById("imperialhead");

popup.style.display = "flex";

acceptButton.addEventListener("click", function() {
    popup.style.display = "none";
    video.muted = false;
    video.play();
    leftbar.style.display = "none";
    rightbar.style.display = "none";
    header.style.display = "none";
    imperialhead.style.display = "flex";
});