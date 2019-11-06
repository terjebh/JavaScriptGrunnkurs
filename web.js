window.onload = function() {
        let bakgrunn = false;

        document.getElementById('background-color').addEventListener("change",
            function() {
                document.body.style.backgroundColor = document.getElementById("background-color").value;
            });


        document.getElementById('knapp')
            .addEventListener('click', function() {
                if (!bakgrunn) {
                    let y = confirm('Vil du ha lyseblå bakgrunn?');

                    if (y) {
                        document.body.style.backgroundColor = "";
                        document.body.className = "lyseBlaa";
                        bakgrunn = true;
                    }

                } else {
                    let y = confirm('Tilbakestill bakgrunnsfarge?');
                    if (y) {
                        document.body.style.backgroundColor = "";
                        document.body.className = "";
                        bakgrunn = false;
                    }

                }

            });

        let visBilde = false;
        document.getElementById('knapp3')
            .addEventListener('click', function() {
                var area1 = document.getElementById('area1');
                area1.innerHTML = '<img id="bilde1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgvOmQuoS70nXrE18HJCGBV4mTnnV_E5EYu2po-NQV6qisTyQ">';
                area1.style.background = "#000";
                area1.style.width = "40%";
                area1.style.height = "300px";
                area1.style.display = "flex";
                area1.style.cssFloat = "left";
                area1.style.padding = "10px";
                area1.style.marginTop = "5px";
                area1.style.marginLeft = "5px";
                let bilde = document.getElementById('bilde1');
                bilde.style.border = "solid 10px red";
                bilde.style.margin = "auto";

                if (visBilde == false) {
                    document.getElementById('knapp3').innerHTML = "Skjul bilde";
                    document.getElementById("area1").style.visibility = "visible";

                    visBilde = true;
                } else {
                    document.getElementById('knapp3').innerHTML = "Vis bilde";
                    // document.getElementById("area1").style.visibility = "hidden";
                    area1.innerHTML = "";
                    area1.style.width = "0";
                    area1.style.height = "0";
                    area1.style.padding = "0";
                    area1.style.margin = "0";

                    visBilde = false;
                }
            });





        document.getElementById('knapp4')
            .addEventListener('click', function() {
                lagBokser();
            });

        function lagBokser() {

            let antall = prompt("Hvor mange bokser vil du lage?", "Antall bokser");

            for (let i = 1; i <= antall; i++) {

                let box = document.createElement("div");
                box.id = "box" + i;
                box.style.width = "40px";
                box.style.height = "40px";
                box.style.marginLeft = "5px";
                box.style.marginTop = "5px";
                box.style.padding = "10px";
                box.style.cssFloat = "left";
                box.style.border = "solid 1px silver";
                box.style.backgroundColor = "#efefef";
                box.appendChild(document.createTextNode(i));
                document.body.appendChild(box);

                document.getElementById("box" + i).addEventListener("dblclick",
                    function() {
                        fjernBoks(i);
                    });

                document.getElementById("box" + i).addEventListener("click",
                    function() {
                        markerBoks(i);
                    });
            } // end loop
        } // end lagBokser

        function fjernBoks(i) {
            document.getElementById("box" + i).remove();
        }

        function markerBoks(i) {
            let boks = document.getElementById("box" + i);
            boks.style.backgroundColor = "#333";
            boks.style.color = "white";

        }


    } // end window.onload()