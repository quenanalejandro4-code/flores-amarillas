const iconosBrillo = ['✨', '⭐', '✦', '✧'];

// Lista de cosas que van a salir volando
const expresionesAmor = [
    '❤️', '💖', '💝',
    'Te amo', 'Te quiero',          // Español
    'I love you', 'I adore you',     // Inglés
    'Je t\'aime',                    // Francés
    'Ti amo',                        // Italiano
    'Eu te amo',                     // Portugués
    'Ich liebe dich',                // Alemán
    'Aishiteru (愛してる)',          // Japonés
    'Saranghae (사랑해)',            // Coreano
    'flor1.png', 'flor2.png', 'flor3.png' // Tus fotos PNG
];

const musica = document.getElementById('musica');
const widgetReproductor = document.getElementById('control-reproductor');
const textoReproductor = document.getElementById('texto-reproductor');

function alternarMusica() {
    if (musica.paused) {
        musica.play().catch(e => console.log("Interacción requerida para el audio"));
        widgetReproductor.classList.add('sonando');
        textoReproductor.innerHTML = "Enamorado tuyo... 🎶";
    } else {
        musica.pause();
        widgetReproductor.classList.remove('sonando');
        textoReproductor.innerHTML = "Pausado ⏸️";
    }
}

// Brillos de fondo automáticos
function crearBrilloAutomatico() {
    const brillo = document.createElement('div');
    brillo.classList.add('brillo');
    brillo.innerHTML = iconosBrillo[Math.floor(Math.random() * iconosBrillo.length)];
    brillo.style.left = Math.random() * 100 + 'vw';
    const tamaño = Math.random() * 15 + 10;
    brillo.style.fontSize = tamaño + 'px';
    brillo.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(brillo);
    setTimeout(() => { brillo.remove(); }, 6000);
}
setInterval(crearBrilloAutomatico, 300);

// Función principal al hacer clic
function animarSorpresa(elemento) {
    const texto = document.querySelector('p');
    
    texto.innerHTML = "✨ ¡...estoy enamorado tuyo, eso es un invento, intuyo! 🌻❤️";
    texto.style.color = "#d63031";

    elemento.classList.add('agitar');
    setTimeout(() => { elemento.classList.remove('agitar'); }, 500);

    if (musica.paused) {
        alternarMusica();
    }

    // Lanzar la lluvia masiva (40 elementos aleatorios)
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            if (i % 4 === 0) {
                // Brillos dorados extras
                const brilloExtra = document.createElement('div');
                brilloExtra.classList.add('brillo');
                brilloExtra.innerHTML = '✨';
                brilloExtra.style.left = Math.random() * 100 + 'vw';
                brilloExtra.style.fontSize = (Math.random() * 25 + 15) + 'px';
                brilloExtra.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
                document.body.appendChild(brilloExtra);
                setTimeout(() => { brilloExtra.remove(); }, 4000);
            } else {
                // Selecciona frase, emoji o flor PNG al azar
                const objetoElegido = expresionesAmor[Math.floor(Math.random() * expresionesAmor.length)];
                
                const elementoFlotante = document.createElement('div');
                elementoFlotante.classList.add('corazon'); // Vincula la animación CSS
                elementoFlotante.style.left = Math.random() * 90 + 'vw'; 
                elementoFlotante.style.animationDuration = (Math.random() * 1.5 + 2) + 's'; // Velocidad de subida

                // Si es una imagen PNG
                if (objetoElegido.endsWith('.png')) {
                    const imgFlor = document.createElement('img');
                    imgFlor.src = objetoElegido;
                    imgFlor.style.width = (Math.random() * 25 + 25) + 'px'; // Tamaño de la flor voladora
                    imgFlor.style.height = 'auto';
                    imgFlor.style.objectFit = 'contain';
                    elementoFlotante.appendChild(imgFlor);
                } else {
                    // Si es texto o emoji
                    elementoFlotante.innerHTML = objetoElegido;
                    elementoFlotante.style.fontSize = (Math.random() * 14 + 16) + 'px';
                    
                    const colores = ['#ff5e57', '#ff4757', '#e84118', '#c23616', '#ff6b81'];
                    elementoFlotante.style.color = colores[Math.floor(Math.random() * colores.length)];
                    elementoFlotante.style.fontWeight = 'bold';
                    elementoFlotante.style.whiteSpace = 'nowrap';
                }
                
                document.body.appendChild(elementoFlotante);
                
                // Borrar el elemento después de que vuele fuera de la pantalla
                setTimeout(() => { elementoFlotante.remove(); }, 3500);
            }
        }, i * 80);
    }
}
