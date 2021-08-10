var neoBackgroundt = document.getElementById("background");
var neotextColor = document.getElementById("textColor");
var neofont = document.getElementById("font");
var body = document.querySelector("body");

neoBackgroundt.addEventListener('keyup', function(event){
    body.style.backgroundColor = event.target.value;
});

neotextColor.addEventListener('keyup', function(e){
    body.style.color = e.target.value;
});

neofont.addEventListener('keyup',function(e){
    console.log(e. target.value);
    body.style.fontFamily = e.target.value;
    console.log("font is: ", body.style.fontFamily);
})