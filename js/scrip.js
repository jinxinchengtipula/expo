document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress-bar");
    const nextButton = document.getElementById("siguiente");
    const questionSets = document.querySelectorAll(".question-set");
    let currentSetIndex = 0;
    let progressValue = 0;

    function updateProgressBar() {
        progressBar.style.width = progressValue + "%";
        if (progressValue < 100) {
            nextButton.textContent = "Siguiente";
        } else {
            nextButton.textContent = "Resultado";
        }
    }

    function onNextButtonClick() {
        if (progressValue < 100) {
            if (checkQuestionsAnswered()) {
                progressValue += 20;
                updateProgressBar();
                showNextQuestionSet();
            } else {
                alert("Por favor, conteste todas las preguntas.");
            }
        } else {
            // Aquí puedes mostrar la pregunta sobre el género
            showGenderQuestion();
        }
    }

    function checkQuestionsAnswered() {
        const currentQuestionSet = questionSets[currentSetIndex];
        const questions = currentQuestionSet.querySelectorAll('input[type="radio"]');
        return Array.from(questions).some(question => question.checked);
    }

    function showNextQuestionSet() {
        if (currentSetIndex < questionSets.length - 1) {
            questionSets[currentSetIndex].style.display = "none";
            currentSetIndex++;
            questionSets[currentSetIndex].style.display = "block";
        } else {
            currentSetIndex = 0;
            questionSets.forEach(set => set.style.display = "none");
            questionSets[currentSetIndex].style.display = "block";
        }
    }

    function showGenderQuestion() {
        // Aquí puedes mostrar la pregunta sobre el género y las opciones
    }

    updateProgressBar();
    nextButton.addEventListener("click", onNextButtonClick);
});
