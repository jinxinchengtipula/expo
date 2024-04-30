
const personalidades = {
    "El Reflexivo Tranquilo": {
        descripcion: "Este individuo es conocido por su calma y su enfoque en la reflexión. Prefiere la tranquilidad y la introspección, valorando momentos de soledad para procesar sus pensamientos y emociones. Su serenidad y capacidad para pensar profundamente lo hacen un confidente confiable y un solucionador de problemas meticuloso.",
        imagenURL: "img/personalidad1.jpg"
    },
    "El Entusiasta Sociable": {
        descripcion: "Esta personalidad irradia energía y entusiasmo en cada interacción. Siempre busca la compañía de otros y disfruta de la socialización. Es extrovertido y amigable, capaz de animar cualquier situación con su positividad contagiosa. Su habilidad para conectar con personas de diferentes ámbitos lo convierte en un líder natural y un amigo leal.",
        imagenURL: "img/personalidad2.jpg"
    },
    "El Equilibrado Adaptativo": {
        descripcion: "Este individuo se destaca por su capacidad para adaptarse a diferentes situaciones con facilidad. Es equilibrado y flexible, capaz de ajustarse a cambios sin perder la compostura. Su naturaleza adaptable lo hace sobresalir en entornos dinámicos y su capacidad para encontrar soluciones creativas lo convierte en un colaborador valioso.",
        imagenURL: "img/personalidad3.jpg"
    },
    "El Analítico Metódico": {
        descripcion: "Con una mente analítica y metódica, este individuo aborda cada problema con una cuidadosa consideración. Es detallista y organizado, prefiriendo seguir un enfoque sistemático en sus tareas y decisiones. Su capacidad para desglosar problemas complejos en componentes manejables lo convierte en un solucionador de problemas eficaz y un planificador meticuloso.",
        imagenURL: "img/personalidad4.jpg"
    },
    "El Espontáneo Aventurero": {
        descripcion: "Esta personalidad está siempre lista para la próxima aventura. Es espontáneo y lleno de energía, buscando constantemente nuevas experiencias y emociones. No teme tomar riesgos y se siente vivo cuando está fuera de su zona de confort. Su naturaleza aventurera lo hace inspirador para otros y su disposición para explorar lo convierte en un compañero emocionante.",
        imagenURL: "img/personalidad5.jpg"
    }
};
    
     
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const personalityParam = getParameterByName('personality');

const personalityContainer = document.getElementById('personality');

if (personalityParam && personalidades[personalityParam]) {
    const personalidad = personalidades[personalityParam];
     
    // Crear elementos HTML para mostrar la información de la personalidad
    const fraseElement = document.createElement('p');
    fraseElement.textContent = 'Tu identidad se refleja en:';
    personalityContainer.appendChild(fraseElement);
    
    const nombreElement = document.createElement('div');
    nombreElement.classList.add('nombre'); // Agregar clase para el estilo CSS
    nombreElement.textContent = personalityParam;
    personalityContainer.appendChild(nombreElement);
    
    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = personalidad.descripcion;
    descripcionElement.classList.add('descripcion'); // Agregar clase para el estilo CSS
    personalityContainer.appendChild(descripcionElement);
    
    const imagenElement = document.createElement('img');
    imagenElement.src = personalidad.imagenURL;
    imagenElement.alt = personalityParam;
    imagenElement.classList.add('imagen'); // Agregar clase para el estilo CSS
    personalityContainer.appendChild(imagenElement);
} else {
    // Mostrar mensaje de personalidad no encontrada
    personalityContainer.innerHTML = `<p>Tu esencia es tan única que desafía la descripción.</p>`;
}