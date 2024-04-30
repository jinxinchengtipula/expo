const questions = [
    {
        id: 1,
        question: '¿Te consideras una persona introvertida, extrovertida o ambivertida?',
        answers: [
            { option: 'Introvertida', value: 1 },
            { option: 'Ambivertida', value: 2 },
            { option: 'Extrovertida', value: 3 },
            
        ]

    },
    {
        id: 2,
        question: '¿Prefieres trabajar en equipo o de forma independiente?',
        answers: [
            { option: 'En equipo', value: 1 },
            { option: 'Depende de la situación', value: 2 },
            { option: 'Independientemente', value: 3 }
        ]
    },
    {
        id: 3,
        question: '¿Qué te motiva más: el éxito personal, el crecimiento personal o el bienestar de los demás?',
        answers: [
            { option: 'Éxito personal', value: 1 },
            { option: 'Crecimiento personal', value: 2 },
            { option: 'Bienestar de los demás', value: 3 }
        ]
    },
    {
        id: 4,
        question: '¿Cómo te sientes acerca del cambio: te cuesta adaptarte, lo aceptas si es necesario o te emociona?',
        answers: [
            { option: 'Me cuesta adaptarme', value: 1 },
            { option: 'Lo acepto si es necesario', value: 2 },
            { option: 'Me emociona', value: 3 }
        ]
    },
    {
        id: 5,
        question: '¿Prefieres planificar las cosas o dejarlas fluir?',
        answers: [
            { option: 'Planificar', value: 1 },
            { option: 'Depende de la situación', value: 2 },
            { option: 'Dejarlas fluir', value: 3 }
        ]
    },
    {
        id: 6,
        question: '¿Cómo sueles reaccionar ante el estrés: te estresas fácilmente, puedes manejarlo con calma o te motiva a dar lo mejor de ti?',
        answers: [
            { option: 'Me estreso fácilmente', value: 1 },
            { option: 'Puedo manejarlo con calma', value: 2 },
            { option: 'Me motiva a dar lo mejor de mí', value: 3 }
        ]
    },
    {
        id: 7,
        question: '¿Qué cualidad valoras más en los demás: honestidad, empatía o determinación?',
        answers: [
            { option: 'Honestidad', value: 1 },
            { option: 'Empatía', value: 2 },
            { option: 'Determinación', value: 3 }
        ]
    },
    {
        id: 8,
        question: '¿Cómo manejas los conflictos con otras personas: tratas de evitarlos, buscas una solución pacífica o afrontas el problema directamente?',
        answers: [
            { option: 'Trato de evitarlos', value: 1 },
            { option: 'Busco una solución pacífica', value: 2 },
            { option: 'Afronto el problema directamente', value: 3 }
        ]
    },
    {
        id: 9,
        question: '¿Cómo prefieres aprender nuevas cosas: leyendo, experimentando o escuchando a otros?',
        answers: [
            { option: 'Leyendo', value: 1 },
            { option: 'Experimentando', value: 2 },
            { option: 'Escuchando a otros', value: 3 }
        ]
    },
    {
        id: 10,
        question: '¿Qué tipo de música te gusta más: clásica, pop/rock o electrónica?',
        answers: [
            { option: 'Clásica', value: 1 },
            { option: 'Pop/Rock', value: 2 },
            { option: 'Electrónica', value: 3 }
        ]
    },
    {
        id: 11,
        question: '¿Cómo te sientes acerca de la autoridad: te incomoda, te impresiona o te enfada?',
        answers: [
            { option: 'Me incomoda', value: 1 },
            { option: 'Me impresiona', value: 2 },
            { option: 'Me enfada', value: 3 }
        ]
    },
    {
        id: 12,
        question: '¿Qué te hace sentir realizado: lograr tus metas personales, ayudar a los demás o aprender algo nuevo?',
        answers: [
            { option: 'Lograr mis metas personales', value: 1 },
            { option: 'Ayudar a los demás', value: 2 },
            { option: 'Aprender algo nuevo', value: 3 }
        ]
    },
    {
        id: 13,
        question: '¿Cómo manejas las críticas: te afectan mucho, las tomas en cuenta para mejorar o las usas como motivación?',
        answers: [
            { option: 'Me afectan mucho', value: 1 },
            { option: 'Las tomo en cuenta para mejorar', value: 2 },
            { option: 'Las uso como motivación', value: 3 }
        ]
    },
    {
        id: 14,
        question: '¿Cómo te sientes acerca de la rutina diaria: te sientes cómodo con ella, puede ser aburrida a veces o la encuentras necesaria para tu vida?',
        answers: [
            { option: 'Me siento cómodo con ella', value: 1 },
            { option: 'Puede ser aburrida a veces', value: 2 },
            { option: 'La encuentro necesaria para mi vida', value: 3 }
        ]
    },
    {
        id: 15,
        question: '¿Cómo prefieres abordar nuevos desafíos: con cautela, con curiosidad o con determinación?',
        answers: [
            { option: 'Con cautela', value: 1 },
            { option: 'Con curiosidad', value: 2 },
            { option: 'Con determinación', value: 3 }
        ]
    },
    {
        id: 16,
        question: '¿Qué tipo de películas prefieres: drama, comedia o acción?',
        answers: [
            { option: 'Drama', value: 1 },
            { option: 'Comedia', value: 2 },
            { option: 'Acción', value: 3 }
        ]
    },
    {
        id: 17,
        question: '¿Cómo prefieres pasar tus vacaciones: relajándote en la playa, explorando nuevas ciudades o realizando actividades de aventura?',
        answers: [
            { option: 'Relajándome en la playa', value: 1 },
            { option: 'Explorando nuevas ciudades', value: 2 },
            { option: 'Realizando actividades de aventura', value: 3 }
        ]
    },
    {
        id: 18,
        question: '¿Cómo sueles abordar situaciones sociales: prefieres estar solo, con unas pocas personas cercanas o rodeado de mucha gente?',
        answers: [
            { option: 'Solo', value: 1 },
            { option: 'Con unas pocas personas cercanas', value: 2 },
            { option: 'Rodeado de mucha gente', value: 3 }
        ]
    },
    {
        id: 19,
        question: '¿Qué te gusta hacer en tu tiempo libre: leer un libro, salir con amigos o practicar deporte?',
        answers: [
            { option: 'Leer un libro', value: 1 },
            { option: 'Salir con amigos', value: 2 },
            { option: 'Practicar deporte', value: 3 }
        ]
    },
    {
        id: 20,
        question: '¿Cómo te sientes generalmente en situaciones nuevas o desconocidas: indiferente, nervioso/a o emocionado/a?',
        answers: [
            { option: 'Indiferente', value: 1 },
            { option: 'Nervioso/a', value: 2 },
            { option: 'Emocionado/a', value: 3 }
        ]
    },
    {
        id: 21,
        question: '¿Cómo sueles resolver problemas: analizando cuidadosamente las opciones, siguiendo tu intuición o actuando con rapidez?',
        answers: [
            { option: 'Analizando cuidadosamente las opciones', value: 1 },
            { option: 'Siguiendo mi intuición', value: 2 },
            { option: 'Actuando con rapidez', value: 3 }
        ]
    },
    {
        id: 22,
        question: '¿Qué te hace sentir más satisfecho/a: alcanzar tus objetivos, ayudar a otros o aprender algo nuevo?',
        answers: [
            { option: 'Alcanzar mis objetivos', value: 1 },
            { option: 'Ayudar a otros', value: 2 },
            { option: 'Aprender algo nuevo', value: 3 }
        ]
    },
    {
        id: 23,
        question: '¿Cómo reaccionas ante el fracaso: te desanimas fácilmente, buscas nuevas estrategias o te sirve de motivación?',
        answers: [
            { option: 'Me desanimo fácilmente', value: 1 },
            { option: 'Busco nuevas estrategias', value: 2 },
            { option: 'Me sirve de motivación', value: 3 }
        ]
    },
    {
        id: 24,
        question: '¿Qué tipo de actividades te relajan más: actividades al aire libre, hobbies creativos o actividades sociales?',
        answers: [
            { option: 'Actividades al aire libre', value: 1 },
            { option: 'Hobbies creativos', value: 2 },
            { option: 'Actividades sociales', value: 3 }
        ]
    },
    {
        id: 25,
        question: '¿Cómo te sientes acerca de la incertidumbre: te incomoda, la aceptas como parte de la vida o la encuentras emocionante?',
        answers: [
            { option: 'Me incomoda', value: 1 },
            { option: 'La acepto como parte de la vida', value: 2 },
            { option: 'La encuentro emocionante', value: 3 }
        ]
    },
    {
        id: 26,
        question: '¿Qué valoras más en una amistad: lealtad, sinceridad o diversión?',
        answers: [
            { option: 'Lealtad', value: 1 },
            { option: 'Sinceridad', value: 2 },
            { option: 'Diversión', value: 3 }
        ]
    },
    {
        id: 27,
        question: '¿Qué te inspira más: las historias de éxito, los actos de bondad o la superación personal?',
        answers: [
            { option: 'Historias de éxito', value: 1 },
            { option: 'Actos de bondad', value: 2 },
            { option: 'Superación personal', value: 3 }
        ]
    },
    {
        id: 28,
        question: '¿Qué te gusta más: planificar actividades o improvisar sobre la marcha?',
        answers: [
            { option: 'Planificar actividades', value: 1 },
            { option: 'Improvisar sobre la marcha', value: 2 },
            { option: 'Depende de la situación', value: 3 }
        ]
    },
    {
        id: 29,
        question: '¿Cuál es tu enfoque principal en la vida: el éxito profesional, las relaciones personales o el autodescubrimiento?',
        answers: [
            { option: 'Éxito profesional', value: 1 },
            { option: 'Relaciones personales', value: 2 },
            { option: 'Autodescubrimiento', value: 3 }
        ]
    },
    {
        id: 30,
        question: '¿Cómo te sientes acerca de expresar tus emociones: cómodo/a, reservado/a o variable dependiendo de la situación?',
        answers: [
            { option: 'Cómodo/a', value: 1 },
            { option: 'Reservado/a', value: 2 },
            { option: 'Variable dependiendo de la situación', value: 3 }
        ]
    }
];




const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let answers = [];

function showQuestions(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        const question = questions[i];
        const options = question.answers.map(answer => `<br><input type="radio" name="question-${i + 1}" value="${answer.value}"> ${answer.option}<br>`);
        questionContainer.innerHTML += `<br><hr><br><p>${i + 1}. ${question.question}</p>${options.join('')}`;
    }
}

function showNextQuestions() {
    const startIndex = currentQuestionIndex;
    const endIndex = Math.min(currentQuestionIndex + 5, questions.length);
    showQuestions(startIndex, endIndex);
}

showNextQuestions();

nextBtn.addEventListener('click', () => {
    const selectedOptions = document.querySelectorAll('input[type=radio]:checked');
    if (selectedOptions.length === 5) {
        selectedOptions.forEach(selectedOption => {
            answers.push(parseInt(selectedOption.value));
        });
        currentQuestionIndex += 5;
        if (currentQuestionIndex < questions.length) {
            questionContainer.innerHTML = '';
            showNextQuestions();
        } else {
            showResult();
        }
    } else {
        alert('Por favor selecciona una respuesta para cada pregunta.');
    }
});

function showResult() {
    const totalScore = answers.reduce((acc, cur) => acc + cur, 0);
    let personality = '';
    if (totalScore >= 20 && totalScore <= 35) {
        personality = 'El Reflexivo Tranquilo';
    } else if (totalScore >= 36 && totalScore <= 50) {
        personality = 'El Entusiasta Sociable';
    } else if (totalScore >= 51 && totalScore <= 65) {
        personality = 'El Equilibrado Adaptativo';
    } else if (totalScore >= 66 && totalScore <= 80) {
        personality = 'El Analítico Metódico';
    } else if (totalScore >= 81 && totalScore <= 100) {
        personality = 'El Espontáneo Aventurero';
    } else {
        personality = 'No se pudo determinar';
    }
    
    window.location.href = `personalidad.html?personality=${personality}`;
}




       