function MakeSound(url) {
    var audio = new Audio(url);
    audio.currentTime = 0;
    audio.play();
}