document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav > a');
    
  
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    
  
    document.querySelector('nav').appendChild(indicator);
    
  
    function positionIndicator(activeLink) {
     
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = document.querySelector('nav').getBoundingClientRect();
      
      indicator.style.width = linkRect.width + 'px';
      indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    }
    
    
    const initialActiveLink = document.querySelector('nav > a.selected');
    if (initialActiveLink) {
      positionIndicator(initialActiveLink);
    }
    
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
   
        if (link.getAttribute('href').startsWith('#')) {
          e.preventDefault();
        }
        
     
        navLinks.forEach(l => l.classList.remove('selected'));
        link.classList.add('selected');
        
      
        positionIndicator(link);
      });
    });
    
    
    window.addEventListener('resize', function() {
      const activeLink = document.querySelector('nav > a.selected');
      if (activeLink) {
        positionIndicator(activeLink);
      }
    });
  });