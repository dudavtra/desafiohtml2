
// Alternar o modo Alto Contraste
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

// Alternar as abas do Acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  const isCurrentlyOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  // Fecha todas as abas abertas
  document.querySelectorAll('.accordion-content').forEach(item => {
    item.style.maxHeight = "0px";
    item.style.paddingTop = "0px";
    item.style.paddingBottom = "0px";
    if (item.previousElementSibling) {
      const otherIcon = item.previousElementSibling.querySelector('.icon');
      if (otherIcon) otherIcon.textContent = "+";
    }
  });

  // Se a aba não estava aberta, abre agora
  if (!isCurrentlyOpen) {
    content.style.paddingTop = "15px";
    content.style.paddingBottom = "15px";
    content.style.maxHeight = (content.scrollHeight + 30) + "px";
    icon.textContent = "−";
  }
}