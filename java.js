// --- INTERATIVIDADE 1: MUTAÇÃO VISIO-SURREAL DA IMAGEM ---
const images = [
  {
    url: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1000&q=80",
    caption: "O Guardião entre o Rio e a Névoa"
  },
  {
    url: "https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?auto=format&fit=crop&w=1000&q=80",
    caption: "O Observador das Montanhas Ancestrais"
  },
  {
    url: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1000&q=80",
    caption: "Caminhando pelos Vales do Tempo"
  }
];

let currentImgIndex = 0;

function transformImage() {
  const imgElement = document.getElementById('main-bear-img');
  const captionElement = document.getElementById('image-caption');
  
  // Efeito visual surreal de transição
  imgElement.style.filter = "sepia(100%) hue-rotate(300deg) blur(4px)";
  
  setTimeout(() => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    imgElement.src = images[currentImgIndex].url;
    captionElement.textContent = images[currentImgIndex].caption;
    imgElement.style.filter = "sepia(0%) hue-rotate(0deg) blur(0px)";
  }, 400);
}

// --- INTERATIVIDADE 2: ACORDEÃO EXPANSÍVEL ---
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  
  // Fecha outros abertos
  document.querySelectorAll('.accordion-content').forEach(item => {
    if (item !== content) {
      item.style.maxHeight = null;
      item.style.paddingTop = "0";
      item.style.paddingBottom = "0";
      if (item.previousElementSibling) {
        item.previousElementSibling.querySelector('.icon').textContent = "+";
      }
    }
  });

  // Alterna o atual
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.paddingTop = "0";
    content.style.paddingBottom = "0";
    icon.textContent = "+";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingTop = "15px";
    content.style.paddingBottom = "15px";
    icon.textContent = "−";
  }
}

// --- INTERATIVIDADE 3: QUIZ AVANÇADO ---
function answerQuiz(optionIndex) {
  const feedback = document.getElementById('quiz-feedback');
  
  if (optionIndex === 1) {
    feedback.textContent = "✨ Exato! Ele recicla ureia em proteínas para evitar a perda muscular durante meses de torpor.";
    feedback.style.color = "#2e7d32";
  } else {
    feedback.textContent = "🔮 Incorreto. A sabedoria da natureza funciona de outra forma. Tente novamente!";
    feedback.style.color = "#c62828";
  }
}

// --- INTERATIVIDADE 4: ORÁCULO DE PENSAMENTOS SURREALISTAS ---
const oracleQuotes = [
  '"O silêncio das cavernas guarda a memória das estrelas..."',
  '"Caminhar a 55 km/h é rasgar o tecido da floresta em um piscar de olhos."',
  '"As garras que escavam a terra também moldam os caminhos dos rios."',
  '"Na hibernação, o tempo não passa: ele apenas respira a 8 batimentos por minuto."',
  '"O salmão não é apenas alimento, é a energia vital das correntes montanhosas."'
];

function generateOracle() {
  const quoteElement = document.getElementById('oracle-text');
  const randomIndex = Math.floor(Math.random() * oracleQuotes.length);
  
  quoteElement.style.opacity = '0';
  
  setTimeout(() => {
    quoteElement.textContent = oracleQuotes[randomIndex];
    quoteElement.style.opacity = '1';
  }, 300);
}