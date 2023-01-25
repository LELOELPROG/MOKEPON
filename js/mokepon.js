let agua = "agua 💧";
let fuego = "fuego 🔥";
let tierra = "tierra 🌱";

let availableAttacks = [fuego, agua, tierra];
let namePets = ["Hipodoge", "Capipepon", "Ratinga", "Langostingi", "Tucapalma", "Paidoz"];


let ataqueEnemy;
let ataquePlayer;
let fightResult; 

let win = "Yee y Yeei que no pare la fiesta - GANASTE 🎉🎉🎉";
let lost = "Pirururiri voa llorar - PERDISTE 😭😭😭";
let draw = "Creo que no ha pasado nada - EMPATE 😒😒😒"

let vidasPlayer = 3;
let vidasEnemy = 3;

let ataque = 0;

let botonMascotaPlayer;

let botonFuego;
let botonAgua;
let botonTierra;


function startGame(){
    botonMascotaPlayer = document.getElementById("boton-pet");
    botonMascotaPlayer.addEventListener("click", petChosenPlayer);
    botonMascotaPlayer.disabled = false;
};

function petChosenPlayer(){
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepon = document.getElementById("capipepon");
    let inputRatinga = document.getElementById("ratinga");
    let inputLangostingi = document.getElementById("langostingi");
    let inputTucapalma = document.getElementById("tucapalma");
    let inputPaidoz = document.getElementById("paidoz");

    let spanPetNamePlayer = document.getElementById("pet-name-player");

    let game = 1;

    if(inputHipodoge.checked){
        alert("Yupi!! Seleccionaste a Hipodoge");
        spanPetNamePlayer.innerHTML = "Hipodoge";

    } else if(inputCapipepon.checked){
        alert("Yupi!! Seleccionaste a Capipepon");
        spanPetNamePlayer.innerHTML = "Capipepon";
    } else if(inputRatinga.checked){
        alert("Yupi!! Seleccionaste a Ratinga");
        spanPetNamePlayer.innerHTML = "Ratinga";
    } else if(inputLangostingi.checked){
        alert("Yupi!! Seleccionaste a Langostingi");
        spanPetNamePlayer.innerHTML = "Langostingi";
    } else if(inputTucapalma.checked){
        alert("Yupi!! Seleccionaste a Tucapalma");
        spanPetNamePlayer.innerHTML = "Tucapalma";
    } else if(inputPaidoz.checked){
        alert("Yupi!! Seleccionaste a Paidoz");
        spanPetNamePlayer.innerHTML = "Paidoz";
    } else{
        alert("Hey que te pasa, no has seleccionado nada");
        game = 0;
    }

    if(game == 1){
        petChosenEnemy();
        enableAttack();
    }
    
}




function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// amiguito oie, cuando tengas tiempo cumple este reto, has una array con el nombre de las macotas para usarlo tanto para el jugador como para el enemigo, ya lo hiciste con el enemigo te falta con el jugador

function petChosenEnemy(){
    let spanPetNameEnemy = document.getElementById("pet-name-enemy");
    spanPetNameEnemy.innerHTML = namePets[randomNumber(0,5)]; 
}


function enableAttack(){

    botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = false;
    botonFuego.addEventListener("click", ataquePlayerFuego);
    botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = false;
    botonAgua.addEventListener("click", ataquePlayerAgua);
    botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = false;
    botonTierra.addEventListener("click", ataquePlayerTierra);

}

function ataquePlayerAgua(){
    ataque = ataque + 1;
    ataquePlayer = agua;
    elegirAtaqueEnemigo();
}

function ataquePlayerFuego(){
    ataquePlayer = fuego;
    ataque = ataque + 1;
    elegirAtaqueEnemigo();
}

function ataquePlayerTierra(){
    ataquePlayer = tierra;
    ataque = ataque + 1;
    elegirAtaqueEnemigo();
}

function elegirAtaqueEnemigo(){
    ataqueEnemy = availableAttacks[randomNumber(0,2)];

    fight();
}

function fight(){
    let spanVidasEnemy = document.getElementById("vidas-enemigo");
    let spanVidasPlayer = document.getElementById("vidas-jugador");

   if(vidasPlayer > 0 && vidasEnemy > 0){
        if(ataquePlayer == ataqueEnemy){
            fightResult = draw;
        } else if(ataquePlayer == fuego && ataqueEnemy == tierra || ataquePlayer == agua && ataqueEnemy == fuego || ataquePlayer == tierra && ataqueEnemy == agua){
            fightResult = win;
            vidasEnemy--;
            spanVidasEnemy.innerHTML = vidasEnemy;
        } else{
            fightResult = lost;
            vidasPlayer--;
            spanVidasPlayer.innerHTML = vidasPlayer;
        }

        mostrarAtaques();
    }

    disabledPetChosenPlayer();
}

function mostrarAtaques(){
    let attacksParagraph = document.createElement("p");
    let sectionMessage = document.getElementById("mensajes");
    attacksParagraph.innerHTML = "Tu mascota ataco con " + ataquePlayer + " y la mascota enemiga con " + ataqueEnemy + "<br />" + fightResult;
    
    sectionMessage.appendChild(attacksParagraph);

    vidasCero();
}

function finalMessage(){
    let attacksParagraph = document.createElement("p");
    let sectionMessage = document.getElementById("mensajes");
    if(vidasEnemy == 0){
        attacksParagraph.innerHTML = "Yeeeeeeeeeeeiiiiiiiii CELEBREMOOOOSSS - GANAAAASSTEEEEE EL ENFRENTAMIENTO - TOMA TU ESTRELLITA 🌟"
    } else if(vidasPlayer == 0){
        attacksParagraph.innerHTML = "Uy que feo MIRE PARCE PUES - PERDIO EL ENFRENTAMIENTO - PARA LA PROXIMA SERÁ 😖😖😢"
    }
    
    sectionMessage.appendChild(attacksParagraph);
}

function vidasCero(){
    if(vidasEnemy == 0 || vidasPlayer == 0){
        finalMessage();
        enableReset();
        disabledAttack();
        //alert("aun esatmos trabajando para mas funciones - version ultra alfa")
    }
}


function disabledPetChosenPlayer(){
    botonMascotaPlayer.disabled = true;
}

function disabledAttack(){
    botonAgua.disabled = true;
    botonFuego.disabled = true;
    botonTierra.disabled = true;
}

function enableReset(){
    let botonReset = document.getElementById("boton-reinicio");
    botonReset.disabled = false;
    botonReset.addEventListener("click", resetGame);
}

function resetGame(){
    alert("aun esatmos trabajando para mas funciones - version ultra alfa - esta funcion aun esta en desarrollo ji ji ji JA");
    window.location.reload();
}



window.addEventListener("load", startGame);
