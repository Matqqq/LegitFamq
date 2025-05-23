document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке
    animateElements();
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Активный пункт меню при прокрутке
    window.addEventListener('scroll', highlightMenu);
});

function animateElements() {
    const elements = document.querySelectorAll('.feature-card, .activity-card, .member-card');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150 * index);
    });
}

function highlightMenu() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.animated-nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if(href.includes(current)) {
            item.classList.add('active');
        }
    });
}