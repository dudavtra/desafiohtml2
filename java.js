
// --- MODO ALTO CONTRASTE ---
function toggleContrast() {
  document.body.classList.toggle('high-contrast');
  
  const contrastBtn = document.getElementById('contrast-btn');
  if (document.body.classList.contains('high-contrast')) {
    contrastBtn.textContent = '☀️ Modo Normal';
  } else {
    contrastBtn.textContent = '👁️ Alto Contraste';
  }
}

// --- ACORDEÃO INTERATIVO ---
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  
  // Se o item atual já estiver aberto, ele fecha
  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px";
    content.style.paddingTop = "0px";
    content.style.paddingBottom = "0px";
    icon.textContent = "+";
  } else {
    // Fecha todas as outras abas primeiro
    document.querySelectorAll('.accordion-content').forEach(item => {
      item.style.maxHeight = "0px";
      item.style.paddingTop = "0px";
      item.style.paddingBottom = "0px";
      if (item.previousElementSibling) {
        const otherIcon = item.previousElementSibling.querySelector('.icon');
        if (otherIcon) otherIcon.textContent = "+";
      }
    });

    // Abre a aba selecionada
    content.style.paddingTop = "15px";
    content.style.paddingBottom = "15px";
    content.style.maxHeight = (content.scrollHeight + 30) + "px";
    icon.textContent = "−";
  }
}