document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Check if the link href matches the current page
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
        
        // Add click event for smooth transition (optional)
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Optional: Add a slight delay before page transition
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 300);
        });
    });
});