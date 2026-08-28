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

// --- ACORDEÃO EXPANSÍVEL ---
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.icon');
  
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

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.paddingTop = "0";
    content.style.paddingBottom = "0";
    icon.textContent = "+";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingTop = "15px";
    content.style.paddingBottom = "15px