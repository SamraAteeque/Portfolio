
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navMobOpen = document.querySelector('.nav-mob-open');
    const navMobClose = document.querySelector('.nav-mob-close');

    navMenu.classList.toggle('active');
    navMobOpen.classList.toggle('active');
    navMobClose.classList.toggle('active');
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
    
                // Close the mobile menu if it's open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                }
            }
        });
    });
}






