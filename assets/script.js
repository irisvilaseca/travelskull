const ruleta = document.querySelector('#ruleta');
const listaOpciones = document.querySelectorAll('li');
console.log(listaOpciones);

ruleta.addEventListener('click', girar);

function girar(){
    // Activar el audio
    activateAudio();

    // Generar un numero random
    let rand = Math.random()*7200;

    // Calcular los angulos con el numero random
    const valor = calcular(rand);

    // Rotar la ruleta
    ruleta.style.transform = "rotate("+rand+"deg)";

    // Encontrar la respuesta
    setTimeout(() => {
        switch (true) {
            case valor > 0 && valor <= 45:
                getAnswer('Sanatorio de Cesuras');
            break;
            case valor > 45 && valor <= 90:
                getAnswer('Monasterio del Diablo');
            break;
            case valor > 90 && valor <= 135:
                
                getAnswer('Colegio de los Escolapios de Alella');
            break;
            case valor > 135 && valor <= 180:
                getAnswer('Fábrica de Muñecas de Castellón');
            break;
            case valor > 180 && valor <= 225:
                getAnswer('Pueblo Viejo de Belchite');
            break;
            case valor > 225 && valor <= 270:
                getAnswer('La Mussara');
            break;
            case valor > 270 && valor <= 315:
                getAnswer('Preventorio de Aguas de Busot');
            break;
            case valor > 315 && valor <= 360:
                getAnswer('Sanatorio de Cesuras');
            break;
        }
    },5000);
}

function activateAudio() {
    const sound = document.querySelector('#audio');
    sound.setAttribute('src','/sound/sound_Sonido ruleta.mp3');
}

function calcular(rand) {
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
    return valor;
}

function getAnswer(text) {
    let answer;

    listaOpciones.forEach(sitio => {
        if (sitio.innerText === text){
            answer = sitio.innerText;
        }
    });

    // imprimir el resultado en la pantalla
    
}

function exis(){
    var elementoDiv = document.getElementById('palanca');
      
    elementoDiv.style.right="5px";
    elementoDiv.style.transform="rotate(-30deg)";
   
}