/**
 * Wedding Invitation - Huỳnh Hiền & Quang Hải
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initAOS();
    initNavigation();
    initCountdown();
    initScrollEffects();
    initParticles();
    initMusicToggle();
    initWishesForm();
    initGalleryLightbox();
});

/**
 * Preloader
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 1500);
    });
}

/**
 * Initialize AOS (Animate On Scroll) - Optimized
 */
function initAOS() {
    AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: true,
        offset: 50,
        delay: 0,
        throttleDelay: 99,
        disable: 'mobile' // Disable on mobile for better performance
    });
}

/**
 * Navigation - Optimized with throttling
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Throttle function for performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Combined scroll handler with throttling
    const handleScroll = throttle(function() {
        const scrollY = window.scrollY;
        
        // Navbar scroll effect
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = scrollY + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Mobile toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Countdown Timer
 */
function initCountdown() {
    const weddingDate = new Date('December 26, 2025 16:30:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**
 * Scroll Effects - Optimized
 */
function initScrollEffects() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    // Throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Back to top visibility with throttling
    const handleBackToTop = throttle(function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }, 150);
    
    window.addEventListener('scroll', handleBackToTop, { passive: true });
    
    // Back to top click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Floating Hearts Particles - Optimized
 */
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Reduced particle count for better performance
    const particleCount = 8;
    
    // Add float animation style once
    if (!document.getElementById('float-style')) {
        const style = document.createElement('style');
        style.id = 'float-style';
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh);
                    opacity: 0;
                }
                10% {
                    opacity: 0.6;
                }
                90% {
                    opacity: 0.6;
                }
                100% {
                    transform: translateY(-100vh);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.innerHTML = '♥';
    particle.style.cssText = `
        position: absolute;
        color: rgba(255, 255, 255, 0.25);
        font-size: ${Math.random() * 15 + 12}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 8 + 15}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        pointer-events: none;
        will-change: transform, opacity;
    `;
    container.appendChild(particle);
}

/**
 * Music Toggle
 */
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    let hasAutoPlayed = false;
    let audioUnlocked = false;
    
    // Set volume
    bgMusic.volume = 0.5;
    
    // Manual toggle functionality
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.play().catch(function() {
                console.log('Audio autoplay prevented');
            });
            musicToggle.classList.add('playing');
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
    
    // Unlock audio on user interaction (required by browsers)
    // This "unlocks" the audio element so it can be played later
    function unlockAudio() {
        if (!audioUnlocked) {
            audioUnlocked = true;
            // Play and immediately pause to unlock audio
            // This must be done within a user gesture event handler
            bgMusic.play().then(function() {
                bgMusic.pause();
                bgMusic.currentTime = 0;
            }).catch(function(err) {
                console.log('Audio unlock failed:', err);
            });
        }
    }
    
    // Auto-play on scroll (after audio is unlocked)
    function handleAutoPlay() {
        if (audioUnlocked && !hasAutoPlayed && !isPlaying) {
            bgMusic.play().then(function() {
                isPlaying = true;
                hasAutoPlayed = true;
                musicToggle.classList.add('playing');
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }).catch(function(err) {
                console.log('Audio play failed:', err);
            });
        }
    }
    
    // Listen for user interactions to unlock audio
    document.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
    document.addEventListener('mousedown', unlockAudio, { once: true, passive: true });
    document.addEventListener('click', unlockAudio, { once: true, passive: true });
    
    // Throttle function for scroll performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Auto-play on scroll (after audio is unlocked)
    const handleScroll = throttle(function() {
        handleAutoPlay();
    }, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Copy to Clipboard
 */
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Đã copy!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.innerHTML = '<i class="fas fa-check"></i> Đã copy!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.innerHTML = '<i class="far fa-copy"></i> Copy STK';
            button.classList.remove('copied');
        }, 2000);
    });
}

// Make copyToClipboard available globally
window.copyToClipboard = copyToClipboard;

/**
 * Wishes Form
 */
function initWishesForm() {
    const form = document.getElementById('wishesForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('wishName').value;
            const message = document.getElementById('wishMessage').value;
            
            // Show success message
            showNotification('Cảm ơn ' + name + ' đã gửi lời chúc!', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

/**
 * Show Notification
 */
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'heart' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation style
    if (!document.getElementById('notification-style')) {
        const style = document.createElement('style');
        style.id = 'notification-style';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Gallery Lightbox
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            openLightbox(img.src, img.alt);
        });
    });
}

function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    // Add styles
    lightbox.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
        cursor: pointer;
    `;
    
    const content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        animation: zoomIn 0.3s ease-out;
    `;
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: -40px;
        background: transparent;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s;
    `;
    
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.style.cssText = `
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    // Add animation styles
    if (!document.getElementById('lightbox-style')) {
        const style = document.createElement('style');
        style.id = 'lightbox-style';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes zoomIn {
                from { transform: scale(0.8); }
                to { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Close on click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            closeLightbox(lightbox);
        }
    });
    
    // Close on escape
    document.addEventListener('keydown', function handler(e) {
        if (e.key === 'Escape') {
            closeLightbox(lightbox);
            document.removeEventListener('keydown', handler);
        }
    });
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg)';
    });
}

function closeLightbox(lightbox) {
    lightbox.style.animation = 'fadeIn 0.3s ease-out reverse';
    setTimeout(function() {
        lightbox.remove();
        document.body.style.overflow = '';
    }, 300);
}

/**
 * Lazy Loading Images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });
    
    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

/**
 * Type Writer Effect (optional)
 */
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Confetti Effect (for celebration moments)
 */
function createConfetti() {
    const colors = ['#8C8165', '#D4C5A9', '#C9A66B', '#B8860B', '#FF6B6B'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(function() {
            confetti.remove();
        }, 5000);
    }
    
    // Add animation
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Expose confetti function globally
window.createConfetti = createConfetti;

/**
 * Intersection Observer for animations
 */
function initIntersectionAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
        observer.observe(el);
    });
}

console.log('💒 Wedding Invitation loaded successfully!');
console.log('❤️ Huỳnh Hiền & Quang Hải - 26.12.2025');

