/* GSAP animations for Kamri Keith recruiting site */

function initAnimations() {
  // Load GSAP and plugins
  const gsapScript = document.createElement('script');
  gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  gsapScript.onload = function() {
    // Load ScrollTrigger plugin
    const scrollTriggerScript = document.createElement('script');
    scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    scrollTriggerScript.onload = function() {
      gsap.registerPlugin(ScrollTrigger);
      setupAllAnimations();
    };
    document.head.appendChild(scrollTriggerScript);
  };
  document.head.appendChild(gsapScript);
}

function setupAllAnimations() {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  // Hero section animations
  setupHeroAnimations(gsap, ScrollTrigger);
  
  // Scroll reveals
  setupScrollReveals(gsap, ScrollTrigger);
  
  // Number mark animation
  setupNumberMarkAnimation(gsap);
  
  // Video section animations
  setupVideoAnimations(gsap);
  
  // Stat card animations
  setupStatAnimations(gsap, ScrollTrigger);
  
  // Navigation animations
  setupNavAnimations(gsap, ScrollTrigger);
  
  // Gallery animations
  setupGalleryAnimations(gsap);
  
  // Footer animations
  setupFooterAnimations(gsap, ScrollTrigger);
}

function setupHeroAnimations(gsap, ScrollTrigger) {
  const heroImg = document.querySelector('[data-hero-image]');
  const heroText = document.querySelector('[data-hero-text]');
  
  if (heroText) {
    // Hero text fade and slide up on load
    gsap.from(heroText, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power3.out'
    });
  }

  if (heroImg) {
    // Hero image parallax on scroll
    gsap.to(heroImg, {
      scrollTrigger: {
        trigger: heroImg,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false
      },
      y: -100,
      ease: 'none'
    });

    // Hero image fade on load
    gsap.from(heroImg, {
      duration: 1.2,
      opacity: 0,
      scale: 1.05,
      ease: 'power3.out',
      delay: 0.2
    });
  }
}

function setupScrollReveals(gsap, ScrollTrigger) {
  // Reveal all sections as they scroll into view
  const sections = document.querySelectorAll('[data-scroll-reveal]');
  
  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: false,
        markers: false
      },
      duration: 0.8,
      opacity: 0,
      y: 40,
      ease: 'power3.out',
      delay: index * 0.1
    });
  });
}

function setupNumberMarkAnimation(gsap) {
  const numberMark = document.querySelector('[data-number-mark]');
  if (!numberMark) return;

  const leftDigit = numberMark.querySelector('[data-digit-left]');
  const rightDigit = numberMark.querySelector('[data-digit-right]');

  // Left digit scrolls up (0)
  if (leftDigit) {
    gsap.from(leftDigit, {
      duration: 1.5,
      y: 30,
      opacity: 0,
      ease: 'back.out(1.7)',
      delay: 0.3
    });
  }

  // Right digit scrolls down (0)
  if (rightDigit) {
    gsap.from(rightDigit, {
      duration: 1.5,
      y: -30,
      opacity: 0,
      ease: 'back.out(1.7)',
      delay: 0.3
    });
  }
}

function setupVideoAnimations(gsap) {
  const videoThumbs = document.querySelectorAll('[data-video-thumb]');
  
  videoThumbs.forEach(thumb => {
    const playBtn = thumb.querySelector('[data-play-btn]');
    
    if (playBtn) {
      // Play button scale on hover
      thumb.addEventListener('mouseenter', () => {
        gsap.to(playBtn, {
          duration: 0.3,
          scale: 1.2,
          ease: 'power2.out'
        });
      });
      
      thumb.addEventListener('mouseleave', () => {
        gsap.to(playBtn, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out'
        });
      });
    }

    // Thumbnail zoom on hover
    const img = thumb.querySelector('img');
    if (img) {
      thumb.addEventListener('mouseenter', () => {
        gsap.to(img, {
          duration: 0.4,
          scale: 1.08,
          ease: 'power2.out'
        });
      });
      
      thumb.addEventListener('mouseleave', () => {
        gsap.to(img, {
          duration: 0.4,
          scale: 1,
          ease: 'power2.out'
        });
      });
    }
  });
}

function setupStatAnimations(gsap, ScrollTrigger) {
  const statCards = document.querySelectorAll('[data-stat-card]');
  
  statCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'top 60%',
        scrub: false,
        markers: false
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
      delay: index * 0.1
    });

    // Count up numbers if present
    const number = card.querySelector('[data-count-number]');
    if (number && number.textContent.match(/^\d+$/)) {
      const finalNum = parseInt(number.textContent);
      gsap.from({ value: 0 }, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          markers: false
        },
        value: finalNum,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() {
          number.textContent = Math.floor(this.targets()[0].value);
        }
      });
    }
  });
}

function setupNavAnimations(gsap, ScrollTrigger) {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;

  // Sticky nav with scroll progress bar
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / docHeight) * 100;
    
    const progressBar = document.querySelector('[data-scroll-progress]');
    if (progressBar) {
      gsap.to(progressBar, {
        width: scrollPercent + '%',
        duration: 0.2,
        ease: 'none'
      });
    }

    lastScrollY = scrollY;
  });

  // Nav link underline animation on hover
  const navLinks = nav.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        duration: 0.3,
        color: '#CE1B2D',
        ease: 'power2.out'
      });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        duration: 0.3,
        color: 'inherit',
        ease: 'power2.out'
      });
    });
  });
}

function setupGalleryAnimations(gsap, ScrollTrigger) {
  const galleryImages = document.querySelectorAll('[data-gallery-item]');
  
  galleryImages.forEach((img, index) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
        end: 'top 60%',
        scrub: false,
        markers: false
      },
      duration: 0.7,
      opacity: 0,
      scale: 0.95,
      ease: 'power3.out',
      delay: (index % 3) * 0.1
    });

    // Hover effect
    img.addEventListener('mouseenter', () => {
      gsap.to(img, {
        duration: 0.4,
        scale: 1.05,
        ease: 'power2.out'
      });
    });
    
    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        duration: 0.4,
        scale: 1,
        ease: 'power2.out'
      });
    });
  });
}

function setupFooterAnimations(gsap, ScrollTrigger) {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const footerChildren = footer.querySelectorAll('[data-footer-col]');
  
  footerChildren.forEach((col, index) => {
    gsap.from(col, {
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%',
        end: 'top 70%',
        scrub: false,
        markers: false
      },
      duration: 0.7,
      opacity: 0,
      y: 20,
      ease: 'power3.out',
      delay: index * 0.1
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
