window.onload = function () {

document.getElementById('knapp')
.addEventListener('click', function() {
alert('Du klikket meg!');
});

document.getElementById('knapp2')
.addEventListener('click', function() {
var area1 = document.getElementById('area1');
area1.innerHTML="Du klikket meg";
area1.style.background = "navy";
area1.style.color = "white";
area1.style.height = "200px";
area1.style.width = "600px";
area1.style.padding = "10px";
});

document.getElementById('knapp3')
.addEventListener('click', function() {
var area1 = document.getElementById('area1');
area1.innerHTML='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgvOmQuoS70nXrE18HJCGBV4mTnnV_E5EYu2po-NQV6qisTyQ">';
area1.style.background = "#606060"

});
} // end window.onload()
