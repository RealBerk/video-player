let play = document.getElementById('play');
let video = document.getElementById('video');
let stop = document.getElementById('stop');
let fullscreen = document.getElementById('fullscreen');

play.onclick = () => {
    video.play();
}
stop.onclick = () => {
    video.pause();
}


fullscreen.onclick = () => {
   video.classList.toggle('ekran1519')
    
}