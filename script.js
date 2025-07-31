// Dropdown menu "Todas as categorias"
document.querySelector('.dropdown').addEventListener('click', function (event) {
  event.stopPropagation(); // Impede que o clique se propague e feche o menu
  this.classList.toggle('active');
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

// Botão pesquisar (exemplo básico)
document.querySelector('.search-bar button').addEventListener('click', function () {
  const query = document.querySelector('.search-bar input[type="search"]').value.trim();
  if (query) {
    alert('Você pesquisou por: ' + query);
    // Aqui você pode implementar a busca real
  }
});
