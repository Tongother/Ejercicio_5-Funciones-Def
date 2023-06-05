let pizarra = document.querySelector("canvas");
let pincel = pizarra.getContext("2d");
let color = "yellow";
pincel.fillRect(0, 0, 300, 400);

function disenharCirculo(x, y, radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*Math.PI);
    pincel.fill();
} 

function limpiarPantalla(){
    pincel.clearRect(0, 0, 300, 400);
}

function actualizarPantalla(){
    limpiarPantalla();
    if(color === "yellow"){
        disenharCirculo(150, 60, 60, "rgba(0, 255, 0, .2)");
        disenharCirculo(150, 340, 60, "rgba(255, 0, 0, .2)");
        disenharCirculo(150, 200, 60, "rgba(255, 255, 0, 1)");
        color="red";
    }else if(color === "red"){
        disenharCirculo(150, 60, 60, "rgba(0, 255, 0, .2)");
        disenharCirculo(150, 200, 60, "rgba(255, 255, 0, .2)");
        disenharCirculo(150, 340, 60, "rgba(255, 0, 0, 1)");
        color= "green";
    }else if(color === "green"){
        disenharCirculo(150, 340, 60, "rgba(255, 0, 0, .2)");
        disenharCirculo(150, 200, 60, "rgba(255, 255, 0, .2)");
        disenharCirculo(150, 60, 60, "rgba(0, 255, 0, 1)");
        color="yellow";
    }
}

disenharCirculo(150, 60, 60, "rgba(0, 255, 0, 1)");
disenharCirculo(150, 200, 60, "rgba(255, 255, 0, .2)");
disenharCirculo(150, 340, 60, "rgba(255, 0, 0, .2)");

setInterval(actualizarPantalla, 2000);