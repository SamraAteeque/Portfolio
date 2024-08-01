// document.addEventListener('DOMContentLoaded', function () {
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightbox-img');
//     const closeBtn = document.getElementsByClassName('close')[0];
//     const certificateLinks = document.querySelectorAll('.certificate-link');

//     certificateLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             lightbox.style.display = 'block';
//             lightboxImg.src = this.href;
//         });
//     });

//     closeBtn.addEventListener('click', function () {
//         lightbox.style.display = 'none';
//     });

//     lightbox.addEventListener('click', function (e) {
//         if (e.target === lightbox) {
//             lightbox.style.display = 'none';
//         }
//     });
// });



// const toggleBtn = document.querySelector('.toggle_btn');
// const navLinks = document.querySelector('.nav-links');

// toggleBtn.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });
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






