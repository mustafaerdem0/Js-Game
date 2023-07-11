// Game Start
let startbtn = document.getElementById("game-start")
startbtn.addEventListener("click", gamestart)
function gamestart() {
    alert("Oyun Aranıyor...");
    alert("Oyun Bulundu.");
    return game();
}
// Game
function gecikme(saniye) {
    return new Promise(basarili => setTimeout(basarili, saniye));
}
let umitozdagcan = 100;
let surimemetcan = 100;
hasar_log = document.getElementById("kill_log")

async function game() {
    await gecikme(0); // game start
        let damages = ["kafa", "vucut", "ıska"];
        let character1 = document.getElementById("character1").src = "img/character1.jpg";
        let character2 = document.getElementById("character2").src = "img/character2.jpg";
    await gecikme(1000); // karakter 1
    if (umitozdagcan > 0 && surimemetcan > 0){
        let character1damages = Math.floor(Math.random() * damages.length);
        let character1damage = damages[character1damages];
        console.log(character1damage, "asker1");
        character1 = document.getElementById("character1").src = "img/character1.gif";

        if(character1damage == "kafa"){
            surimemetcan -= 100;
            hasar = document.createElement("p");
            hasar.innerHTML = "Ümit Özdağ Kafadan Vurdu Suri Öldü";
            hasar_log.appendChild(hasar);
        }
        else if(character1damage == "vucut"){
            surimemetcan -= 50;
            hasar = document.createElement("p");
            hasar.innerHTML = "Ümitözdağ Vücuttan Vurdu Rakibin Canı" + surimemetcan;
            hasar_log.appendChild(hasar);
        }
        else if(character1damage == "ıska"){
            hasar = document.createElement("p");
            hasar.innerHTML = "Ümit Dede Iskaladı";
            hasar_log.appendChild(hasar);
        }
        
        if(surimemetcan <= 0){
            await gecikme(2000);
            character1 = document.getElementById("character1").src = "img/character1.jpg";

        }
    }
    else{
        console.log("oyun bitti");
    }
    await gecikme(2000); // karakter2
        if (umitozdagcan > 0 && surimemetcan > 0){
            character1 = document.getElementById("character1").src = "img/character1.jpg";
        character2 = document.getElementById("character2").src = "img/character2.gif";
        let character2damages = Math.floor(Math.random() * damages.length);
        let character2damage = damages[character2damages];
        console.log(character2damage, "Asker2");
        if(character2damage == "kafa"){
            hasar = document.createElement("p");
            umitozdagcan -= 100;
            hasar.innerHTML = "Suriyeli Memet Kafadan Ümitözdağ Ölsede Sağlam";
            hasar_log.appendChild(hasar);
        }
        else if(character2damage == "vucut"){
            hasar = document.createElement("p");
            umitozdagcan -= 50;
            hasar.innerHTML = "Suriyeli Memet Vucuttan Vurdu Rakibin Canı" + umitozdagcan;
            hasar_log.appendChild(hasar);
        }
        else if(character2damage == "ıska"){
            hasar = document.createElement("p");
            hasar.innerHTML = "Suriyeli Memet Iskaladı";
            hasar_log.appendChild(hasar);
        }
            await gecikme(3000);
            return game();
        }
        
}

