fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));