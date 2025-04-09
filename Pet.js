function MakeSound(url) {
  var audio = new Audio(url);
  audio.currentTime = 0;
  audio.play();
}
function Submit() {
  var feedback = document.getElementById("feedback").value;
  if (feedback == "") {
    alert("You cannot submit an empty feedback!");
  } else {
    alert("Thank you for your feedback!");
    Clear();
  }
}
function Clear() {
  document.getElementById("feedback").value = "";
}
function TextHover() {
  var element = document.getElementById("feedback");
  element.style.backgroundColor = "#f0f0f0";
}
function TextUnhover() {
  var element = document.getElementById("feedback");
  element.style.backgroundColor = "#ffffff";
}
function Step1() {
  var steps = document.getElementsByClassName("step");
  steps[0].style.backgroundColor = "#008080";
  steps[1].style.backgroundColor = "#ffffff";
  steps[2].style.backgroundColor = "#ffffff";
  steps[3].style.backgroundColor = "#ffffff";
  steps[4].style.backgroundColor = "#ffffff";
  var info = document.getElementById("target");
  info.style =
    "background-color: #60656f; border-radius: 20px; border: #ffffff 4px solid; margin: 20px; padding: 15px;";
  info.innerHTML =
    "<h1 style='margin:5px; font-size:50px;color: #00cbcb;'>Register:</h1><p style='font-size: 1.4em; margin:5px; color: #ffffff;'>Select the type of pet you have.</p>";
}
function Step2() {
  var steps = document.getElementsByClassName("step");
  steps[0].style.backgroundColor = "#ffffff";
  steps[1].style.backgroundColor = "#008080";
  steps[2].style.backgroundColor = "#ffffff";
  steps[3].style.backgroundColor = "#ffffff";
  steps[4].style.backgroundColor = "#ffffff";
  var info = document.getElementById("target");
  info.style =
    "background-color: #60656f; border-radius: 20px; border: #ffffff 4px solid; margin: 20px; padding: 15px;";
  info.innerHTML =
    "<h1 style='margin:5px; font-size:50px;color: #00cbcb;'>Breed/Spieces?</h1><p style='font-size: 1.4em; margin:5px; color: #ffffff;'>Select the breed or the spieces of your pet for further identification.</p>";
}
function Step3() {
  var steps = document.getElementsByClassName("step");
  steps[0].style.backgroundColor = "#ffffff";
  steps[1].style.backgroundColor = "#ffffff";
  steps[2].style.backgroundColor = "#008080";
  steps[3].style.backgroundColor = "#ffffff";
  steps[4].style.backgroundColor = "#ffffff";
  var info = document.getElementById("target");
  info.style =
    "background-color: #60656f; border-radius: 20px; border: #ffffff 4px solid; margin: 20px; padding: 15px;";
  info.innerHTML =
    "<h1 style='margin:5px; font-size:50px;color: #00cbcb;'>Tell us more</h1><p style='font-size: 1.4em; margin:5px; color: #ffffff;'>Identify some key features about your pet and how it interacts with its surroundings. Also Upload an image of the pet so that we can identify its physical features.</p>";
}
function Step4() {
  var steps = document.getElementsByClassName("step");
  steps[0].style.backgroundColor = "#ffffff";
  steps[1].style.backgroundColor = "#ffffff";
  steps[2].style.backgroundColor = "#ffffff";
  steps[3].style.backgroundColor = "#008080";
  steps[4].style.backgroundColor = "#ffffff";
  var info = document.getElementById("target");
  info.style =
    "background-color: #60656f; border-radius: 20px; border: #ffffff 4px solid; margin: 20px; padding: 15px;";
  info.innerHTML =
    "<h1 style='margin:5px; font-size:50px;color: #00cbcb;'>Talk to us</h1><p style='font-size: 1.4em; margin:5px; color: #ffffff;'>Fill in your details like username, password, and email so that we can contact you later regarding your pet's new name.</p>";
}
function Finish() {
  var steps = document.getElementsByClassName("step");
  steps[0].style.backgroundColor = "#ffffff";
  steps[1].style.backgroundColor = "#ffffff";
  steps[2].style.backgroundColor = "#ffffff";
  steps[3].style.backgroundColor = "#ffffff";
  steps[4].style.backgroundColor = "#008080";
  var info = document.getElementById("target");
  info.style =
    "background-color: #60656f; border-radius: 20px; border: #ffffff 4px solid; margin: 20px; padding: 15px;";
  info.innerHTML =
    "<h1 style='margin:5px; font-size:50px;color: #00cbcb;'>Thank You</h1><p style='font-size: 1.4em; margin:5px; color: #ffffff;'>Now that we have the details, out experts will review it and forge the perfect name for your PET</p>";
}
function handleFileUpload(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var output = document.getElementById("output");
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
}
