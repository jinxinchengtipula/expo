const personalidades = {
    "El Reflexivo Tranquilo": {
        descripcion: "Calmo y reflexivo, disfruta de la introspección y los momentos de soledad. Su serenidad y capacidad de pensar profundamente lo convierten en un confidente y solucionador de problemas confiable.",
        imagenURL: "img/personalidad1.jpg"
    },
    "El Entusiasta Sociable": {
        descripcion: "Energético y sociable, busca la compañía de otros y anima cualquier situación con su positividad. Su habilidad para conectar con las personas lo convierte en un líder natural y amigo leal.",
        imagenURL: "img/personalidad2.jpg"
    },
    "El Equilibrado Adaptativo": {
        descripcion: "Equilibrado y flexible, se adapta fácilmente a diferentes situaciones. Su naturaleza adaptable y capacidad para encontrar soluciones creativas lo hacen un colaborador valioso.",
        imagenURL: "img/personalidad3.jpg"
    },
    "El Analítico Metódico": {
        descripcion: "Analítico y organizado, aborda los problemas con cuidado y sigue un enfoque sistemático. Su capacidad para desglosar problemas complejos lo hace un eficaz solucionador de problemas.",
        imagenURL: "img/personalidad4.jpg"
    },
    "El Espontáneo Aventurero": {
        descripcion: "Spontáneo y lleno de energía, siempre busca nuevas experiencias y aventuras. Su naturaleza aventurera y disposición para explorar lo convierten en un compañero emocionante.",
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
     
    const fraseElement = document.createElement('p');
    fraseElement.textContent = 'Tu identidad se refleja en:';
    personalityContainer.appendChild(fraseElement);
    
    const nombreElement = document.createElement('div');
    nombreElement.classList.add('nombre'); 
    nombreElement.textContent = personalityParam;
    personalityContainer.appendChild(nombreElement);
    
    const descripcionElement = document.createElement('p');
    descripcionElement.textContent = personalidad.descripcion;
    descripcionElement.classList.add('descripcion'); 
    personalityContainer.appendChild(descripcionElement);
    
    const imagenElement = document.createElement('img');
    imagenElement.src = personalidad.imagenURL;
    imagenElement.alt = personalityParam;
    imagenElement.classList.add('imagen'); 
    personalityContainer.appendChild(imagenElement);
} else {
    // Mostrar mensaje de personalidad no encontrada
    personalityContainer.innerHTML = `<p>Tu esencia es tan única que desafía la descripción.</p>`;
}