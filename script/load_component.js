function loadComponent(componentPath, placeholderId) {
  fetch(componentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${componentPath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

// Carrega o Header e o Footer
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('nav.html', 'navbar-placeholder');
  loadComponent('footer.html', 'footer-placeholder');
});