/* ============================================
   ROMANTIC SURPRISE WEBSITE - JAVASCRIPT
   ============================================ */

// ============================================
// CONFIGURATION - EDIT THESE VALUES
// ============================================

// Set your special date here (Wedding day, Anniversary, etc.)
const SPECIAL_DATE = new Date('November 15, 2026 00:00:00');

// ============================================
// DOM ELEMENTS
// ============================================
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');
const heartsContainer = document.getElementById('heartsContainer');

// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    const now = new Date();
    const difference = SPECIAL_DATE - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // The special day has arrived!
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.querySelector('.countdown-date').textContent = '🎉 The Day Has Arrived! 🎉';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ============================================
// MUSIC CONTROL
// ============================================
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.querySelector('.music-status').textContent = 'Play';
        musicBtn.querySelector('.music-icon').textContent = '🎵';
    } else {
        bgMusic.volume = 0.3; // Set volume to 30%
        bgMusic.play().catch(e => {
            console.log('Audio playback failed:', e);
        });
        musicBtn.querySelector('.music-status').textContent = 'Pause';
        musicBtn.querySelector('.music-icon').textContent = '🎶';
    }
    isPlaying = !isPlaying;
});

// ============================================
// SURPRISE BUTTON
// ============================================
surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.add('active');
    surpriseBtn.style.display = 'none';
    
    // Create heart burst animation
    createHeartBurst();
    
    // Create sparkles
    createSparkles();
});

function createHeartBurst() {
    const heartBurst = document.getElementById('heartBurst');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 15}px;
                animation: burstHeart 2s ease-out forwards;
                --angle: ${Math.random() * 360}deg;
                --distance: ${Math.random() * 150 + 100}px;
            `;
            heartBurst.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => heart.remove(), 2000);
        }, i * 50);
    }
}

// Add burst animation to CSS dynamically
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burstHeart {
        0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(cos(var(--angle)) * var(--distance)),
                calc(sin(var(--angle)) * var(--distance))
            ) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

function createSparkles() {
    const surpriseContent = document.querySelector('.surprise-content');
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                background: ${['#FFD700', '#FF69B4', '#FF1493', '#FFB6C1'][Math.floor(Math.random() * 4)]};
            `;
            surpriseContent.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 100);
    }
}

// ============================================
// FLOATING HEARTS BACKGROUND
// ============================================
function createFloatingHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 10000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 800);

// Create initial hearts
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 200);
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// SPARKLE EFFECT ON CLICK
// ============================================
document.addEventListener('click', (e) => {
    // Don't create sparkles on buttons or interactive elements
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    
    createClickSparkle(e.clientX, e.clientY);
});

function createClickSparkle(x, y) {
    const colors = ['#FFD700', '#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: clickSparkle 0.6s ease-out forwards;
            --tx: ${(Math.random() - 0.5) * 100}px;
            --ty: ${(Math.random() - 0.5) * 100}px;
        `;
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    }
}

// Add click sparkle animation
const clickSparkleStyle = document.createElement('style');
clickSparkleStyle.textContent = `
    @keyframes clickSparkle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickSparkleStyle);

// ============================================
// TYPING EFFECT FOR HERO TITLE
// ============================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect after page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Small delay before starting typing effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// ============================================
// PARALLAX EFFECT ON HERO (subtle)
// ============================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ============================================
// GALLERY IMAGE LIGHTBOX (Simple)
// ============================================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay span').textContent;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${caption}">
                <p>${caption}</p>
                <button class="lightbox-close">×</button>
            </div>
        `;
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            text-align: center;
            max-width: 90%;
            max-height: 90%;
        `;
        
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 80vh;
            border-radius: 10px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        `;
        
        const lightboxCaption = lightbox.querySelector('p');
        lightboxCaption.style.cssText = `
            color: white;
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.5rem;
            margin-top: 20px;
            font-style: italic;
        `;
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 3rem;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close lightbox
        const closeLightbox = () => {
            lightbox.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Close on escape key
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});

// Add lightbox animations
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(lightboxStyle);

// ============================================
// CONSOLE LOVE MESSAGE (Easter Egg)
// ============================================
console.log('%c❤️ Made with love ❤️', 'font-size: 24px; color: #c44569;');
console.log('%cThis website was created to celebrate a beautiful love story.', 'font-size: 14px; color: #ff6b9d;');
