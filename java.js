// Função para mostrar/esconder curiosidades
function toggleFact(id) {
  const box = document.getElementById(id);
  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

// Função para checar resposta do Quiz
function checkAnswer(isCorrect) {
  const resultElement = document.getElementById('quiz-result');
  if (isCorrect) {
    resultElement.textContent = "Resposta Correta! O salmão é fundamental na dieta do urso-pardo.";
    resultElement.style.color = "#2e7d32";
  } else {
    resultElement.textContent = "Ops, tente novamente!";
    resultElement.style.color = "#c62828";
  }
}