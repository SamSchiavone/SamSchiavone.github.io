document.addEventListener('DOMContentLoaded', () => {
    // Fetch and load the header
    fetch('/courses/18-700/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading header:', error));

    // Fetch and load the footer
    fetch('/courses/18-700/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});

function setActiveNavLink() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (path.includes(link.getAttribute('href'))) {
            link.parentNode.classList.add('selected');
        } else {
            link.parentNode.classList.remove('selected');
        }
    });
}
