// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Add scroll animation classes to elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.story-card, .team-member, .chat-option, .feature');
    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
});

// Dynamic color animation for chat section
document.addEventListener('DOMContentLoaded', function() {
    const chatOptions = document.querySelectorAll('.chat-option');
    
    chatOptions.forEach((option, index) => {
        const colors = [
            ['#4ECDC4', '#45B7D1'],
            ['#45B7D1', '#96CEB4'],
            ['#96CEB4', '#4ECDC4']
        ];
        
        option.addEventListener('mouseenter', function() {
            const [color1, color2] = colors[index];
            this.style.background = `linear-gradient(135deg, ${color1}20, ${color2}20)`;
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.background = '#ffffff';
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Chat button functionality
document.querySelectorAll('.chat-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const option = this.closest('.chat-option');
        const title = option.querySelector('h3').textContent;
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Handle different contact methods
        if (title === 'Call Us') {
            window.open('tel:+91-xxx-xxx-xxxx', '_blank');
        } else if (title === 'Live Chat') {
            // This would typically open a chat widget
            alert('Live chat feature will be implemented soon!');
        } else if (title === 'Email Support') {
            window.open('mailto:support@hire22.ai', '_blank');
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (number) {
                animateCounter(statNumber, number);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});