// Função global para acionar o modo Alto Contraste via HTML
function toggleContrast() {
  const body = document.body;
  const contrastBtn = document.getElementById('contrast-btn');

  body.classList.toggle('high-contrast');

  if (body.classList.contains('high-contrast')) {
    contrastBtn.textContent = '☀️ Modo Normal';
  } else {
    contrastBtn.textContent = '👁️ Alto Contraste';
  }
}

// Função global para gerenciar a abertura das abas do Acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  const isCurrentlyOpen = content.classList.contains('open');

  // Fecha todas as abas ativas
  document.querySelectorAll('.accordion-content').forEach(item => {
    item.classList.remove('open');
    item.style.maxHeight = "0px";
    if (item.previousElementSibling) {
      const otherIcon = item.previousElementSibling.querySelector('.icon');
      if (otherIcon) otherIcon.textContent = "+";
    }
  });

  // Se a aba clicada não estava aberta, abre ela agora
  if (!isCurrentlyOpen) {
    content.classList.add('open');
    content.style.maxHeight = (content.scrollHeight + 30) + "px";
    icon.textContent = "−";
  }
}