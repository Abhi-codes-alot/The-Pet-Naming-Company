function MakeSound(url) {
    var audio = new Audio(url);
    audio.currentTime = 0;
    audio.play();
}
function Submit() {
    var feedback=document.getElementById("feedback").value;
    if (feedback == "") {
        alert("You cannot submit an empty feedback!");
    }
    else {
        alert("Thank you for your feedback!");
        Clear();
    }
}
function Clear() {
    document.getElementById("feedback").value = "";
}