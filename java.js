document.addEventListener('DOMContentLoaded', () => {
  const contrastBtn = document.getElementById('contrast-btn');

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');

      if (document.body.classList.contains('high-contrast')) {
        contrastBtn.textContent = '☀️ Modo Normal';
      } else {
        contrastBtn.textContent = '👁️ Alto Contraste';
      }
    });
  }
});

// Função para abrir e fechar o acordeão
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  // Fecha todas as abas
  document.querySelectorAll('.accordion-content').forEach(item => {
    item.style.maxHeight = "0px";
    item.style.paddingTop = "0px";
    item.style.paddingBottom = "0px";
    if (item.previousElementSibling) {
      const otherIcon = item.previousElementSibling.querySelector('.icon');
      if (otherIcon) otherIcon.textContent = "+";
    }
  });

  // Abre a aba clicada se ela estava fechada
  if (!isOpen) {
    content.style.paddingTop = "15px";
    content.style.paddingBottom = "15px";
    content.style.maxHeight = (content.scrollHeight + 30) + "px";
    icon.textContent = "−";
  }
}