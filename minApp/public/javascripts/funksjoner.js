// funksjoner til front end
window.onload = function () {
    
document.getElementById("pw2").addEventListener("blur",function() {

    if(document.getElementById("pw2").value != document.getElementById("pw1").value) {
        alert("Passordene er ikke like");
    }
});

} // slutt på onload