 // Theme toggle: switch between dark and light modes
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      // Change icon (sun vs moon)
      if(document.body.classList.contains('light-mode')){
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

  
