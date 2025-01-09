// Função para carregar o footer
function loadFooter() {
  const footerElement = document.getElementById('footer');
  fetch('footer.html')
    .then(response => {
      if (!response.ok) throw new Error('Erro ao carregar o footer.');
      return response.text();
    })
    .then(data => {
      footerElement.innerHTML = data;
    })
    .catch(error => console.error(error));
}

// Chamada da função para carregar o footer
loadFooter();