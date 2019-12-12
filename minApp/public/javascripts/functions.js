window.onload = function() {
        document.getElementById("pw2").addEventListener("blur", function() {

            if (document.getElementById("pw1").value != document.getElementById("pw2").value) {
                alert("Passordene er ikke like...");
                document.getElementById("pw2").focus();

            }

        });





    } // slutt på windiw.onload