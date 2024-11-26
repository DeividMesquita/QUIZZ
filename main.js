document.getElementById("submit").addEventListener("click", function () {
    // Respostas corretas
    const correctAnswers = {
        q1: "c",
        q2: "a",
        q3: "b",
        q4: "c",
        q5: "a",
        q6: "b",
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "b"
    };

    // Inicializando pontuação
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Verificando respostas
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Exibindo o resultado
    const result = document.getElementById("result");
    result.textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
});
