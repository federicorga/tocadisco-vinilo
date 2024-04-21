var rotating = false;
var currentAudio = null;
    var arm = document.querySelector('.arm img');
    var record = document.querySelector('.record');
// Variable para mantener la referencia al audio actualmente reproduciéndose
document.addEventListener('DOMContentLoaded', function() {
    var carrouselItems = document.querySelectorAll('.carrousel-item');
    
    carrouselItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            var audioId = 'audio' + (index + 1);
            var selectedAudio = document.getElementById(audioId);
            if (selectedAudio) {
                if (currentAudio && currentAudio !== selectedAudio) {
                    currentAudio.pause(); // Pausar el audio anterior si existe y no es el mismo que el seleccionado
                    currentAudio.currentTime = 0;
                }
                startStopRotation(selectedAudio);
                currentAudio = selectedAudio; // Actualizar el audio actualmente reproduciéndose
            }
        });
    });
});

function startStopRotation(audio) {
   

    if (!rotating) {
        record.style.animation = 'rotate 10s linear infinite';
        arm.style.transform = 'translate(-60%, -9%) rotate(47deg)';
        rotating = true;
        audio.play(); // Reproducir música
        // Agregar evento de escucha para detener la rotación cuando la música termine
        audio.addEventListener('ended', function() {
            stopRotation(record, arm, audio);
        });
    } else {
        stopRotation(record, arm, audio);
    }
}

function stopRotation(record, arm, audio) {
    record.style.animation = 'none';
    arm.style.transform = 'rotate(0deg)';
    audio.pause(); // Pausar la música
  
    rotating = false;
}

function playPauseCurrentSong() {

    if (!rotating) {
        record.style.animation = 'rotate 10s linear infinite';
        arm.style.transform = 'translate(-60%, -9%) rotate(47deg)';
        rotating = true;}
        else{
    record.style.animation = 'none';
    arm.style.transform = 'rotate(0deg)';

    rotating = false;
        }

    if (currentAudio) {
        
        if (currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }
    }
}




function renderizarImagen(urlImagenDisco) {
    // Obtener el contenedor donde se renderizarán los elementos
    var container = document.querySelector('.disco');

    // Crear la etiqueta de imagen para la imagen disco
    var imgDisco = document.createElement('img');
    imgDisco.classList.add('imagen-disco');
    imgDisco.src = urlImagenDisco;

    // Crear la etiqueta de imagen para la imagen del punto centro
    var imgPuntoCentro = document.createElement('img');
    imgPuntoCentro.classList.add('puntocentro');
    imgPuntoCentro.src = 'img/puntocentro.png';

    // Limpiar el contenedor antes de agregar las nuevas imágenes
    container.innerHTML = '';

    // Agregar las imágenes al contenedor
    container.appendChild(imgDisco);
    container.appendChild(imgPuntoCentro);
}


