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

function toggleMenu() {
  const navList = document.querySelector('.navList');
  navList.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  const navList = document.querySelector('.navList');

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    
    if (navList.classList.contains('active')) {
      navList.classList.remove('active');
    }
  } else {
    nav.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('nav.html', 'navbar-placeholder');
  loadComponent('footer.html', 'footer-placeholder');
});
