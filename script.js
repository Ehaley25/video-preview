console.log("page loaded...");

let myVideo = document.getElementById("mainVideo")

function playVideo(element){
    if (myVideo.paused)
        element.play();
    else
        element.pause();
}