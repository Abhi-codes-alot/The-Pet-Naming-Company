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
function checkFileInput(event) {
  const fileInput = document.getElementById("file");
  if (!fileInput.files || fileInput.files.length === 0) {
    event.preventDefault(); // Prevent form submission
    alert("Please select a file before submitting.");
    return false;
  } else {
    console.log("File selected:", fileInput.files[0].name);
    return true;
  }
}

document.getElementById("myform").addEventListener("submit", function (e) {
  checkFileInput(e);
});
function validateDataForm(event) {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (username === "") {
    alert("Username cannot be empty.");
    event.preventDefault();
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one digit."
    );
    event.preventDefault();
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    event.preventDefault();
    return false;
  }

  // Optional: console log or further handling
  console.log("All inputs valid.");
  return true;
}

document.getElementById("data").addEventListener("submit", function (e) {
  validateDataForm(e);
});
function P1show() {
  var id1=document.getElementById("p1");
  id1.style="background-color: #008080; color: #ffffff; font-size: 4em; border-radius: 25px; border: #ffffff 4px solid; margin: 20px; padding: 15px; padding-left: 90px; padding-right: 90px;";
  var type=document.getElementById("type");
  type.innerHTML="Dog";
  var breed=document.getElementById("breed");
  breed.innerHTML="German Shepherd";
  var status=document.getElementById("status");
  status.innerHTML="Unnamed";
  var name=document.getElementById("name");
  name.innerHTML="Karl";
  var img=document.getElementById("image");
  img.innerHTML="<img src='Breeds/german.webp' style='object-fit: cover; width: 100%; height: 100%; border-radius: 25px;'>";
  var id2=document.getElementById("p2");
  id2.style="  display: inline-block; font-size: 4em; margin: 10px;";
}
function P2show() {
  var id2=document.getElementById("p2");
  id2.style="background-color: #008080; color: #ffffff; font-size: 4em; border-radius: 25px; border: #ffffff 4px solid; margin: 20px; padding: 15px; padding-left: 90px; padding-right: 90px;";
  var type=document.getElementById("type");
  type.innerHTML="Cat";
  var breed=document.getElementById("breed");
  breed.innerHTML="Main coon";
  var status=document.getElementById("status");
  status.innerHTML="Named";
  var name=document.getElementById("name");
  name.innerHTML="-------";
  var img=document.getElementById("image");
  img.innerHTML="<img src='Breeds/main.jpg' style='object-fit: cover; width: 100%; height: 100%; border-radius: 25px;'>";
  var id1=document.getElementById("p1");
  id1.style="  display: inline-block; font-size: 4em; margin: 10px;";
}
