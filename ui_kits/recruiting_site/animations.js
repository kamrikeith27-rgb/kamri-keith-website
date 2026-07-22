/* GSAP animations for Kamri Keith recruiting site */

function initAnimations() {
  // GSAP is already loaded in HTML, just register ScrollTrigger and start animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    setupAllAnimations();
  }
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

  // CTA cutout animation
  setupCTAAnimations(gsap, ScrollTrigger);

  // Footer animations
  setupFooterAnimations(gsap, ScrollTrigger);
}

function setupHeroAnimations(gsap, ScrollTrigger) {
  const heroImg = document.querySelector('[data-hero-image]');
  const heroText = document.querySelector('[data-hero-text]');

  if (heroText) {
    // Hero text explosive entrance
    gsap.from(heroText, {
      duration: 1.5,
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotationY: -30,
      ease: 'back.out(1.5)',
      delay: 0.2
    });
  }

  if (heroImg) {
    // Hero image aggressive parallax on scroll
    gsap.to(heroImg, {
      scrollTrigger: {
        trigger: heroImg,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5,
        markers: false
      },
      y: -200,
      ease: 'none'
    });

    // Hero image explosive fade in with rotation
    gsap.from(heroImg, {
      duration: 1.8,
      opacity: 0,
      scale: 1.15,
      rotationZ: 2,
      ease: 'power4.out',
      delay: 0.1
    });
  }
}

function setupScrollReveals(gsap, ScrollTrigger) {
  // Reveal all sections as they scroll into view with extreme animations
  const sections = document.querySelectorAll('[data-scroll-reveal]');

  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 0.5,
        markers: false
      },
      duration: 1.8,
      opacity: 0,
      y: 150,
      rotationX: -15,
      ease: 'power3.out',
      stagger: 0.2,
      delay: index * 0.1
    });

    // Add a scale animation for extra pop
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 0.5,
        markers: false
      },
      duration: 1.8,
      scale: 0.85,
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

  // Left digit flies in from top left
  if (leftDigit) {
    gsap.from(leftDigit, {
      duration: 2,
      y: -100,
      x: -100,
      opacity: 0,
      scale: 0.3,
      rotationZ: -45,
      ease: 'elastic.out(1.2, 0.8)',
      delay: 0.2
    });
  }

  // Right digit flies in from bottom right
  if (rightDigit) {
    gsap.from(rightDigit, {
      duration: 2,
      y: 100,
      x: 100,
      opacity: 0,
      scale: 0.3,
      rotationZ: 45,
      ease: 'elastic.out(1.2, 0.8)',
      delay: 0.2
    });
  }
}

function setupVideoAnimations(gsap) {
  const videoThumbs = document.querySelectorAll('[data-video-thumb]');

  videoThumbs.forEach((thumb, index) => {
    // Entry animation for thumbnails
    gsap.from(thumb, {
      duration: 1,
      opacity: 0,
      scale: 0.6,
      rotationY: 45,
      ease: 'back.out(1.8)',
      delay: index * 0.12
    });

    const playBtn = thumb.querySelector('[data-play-btn]');

    if (playBtn) {
      // Aggressive play button animation
      thumb.addEventListener('mouseenter', () => {
        gsap.to(playBtn, {
          duration: 0.25,
          scale: 1.4,
          ease: 'back.out(2)',
          boxShadow: '0 0 30px rgba(206,27,45,.6)',
          overwrite: 'auto'
        });
      });

      thumb.addEventListener('mouseleave', () => {
        gsap.to(playBtn, {
          duration: 0.25,
          scale: 1,
          ease: 'power2.out',
          boxShadow: '0 0 0px rgba(206,27,45,0)',
          overwrite: 'auto'
        });
      });
    }

    // Thumbnail aggressive zoom on hover
    const img = thumb.querySelector('img');
    if (img) {
      thumb.addEventListener('mouseenter', () => {
        gsap.to(img, {
          duration: 0.3,
          scale: 1.15,
          ease: 'back.out(2)',
          overwrite: 'auto'
        });
      });

      thumb.addEventListener('mouseleave', () => {
        gsap.to(img, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.out',
          overwrite: 'auto'
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
        start: 'top 88%',
        end: 'top 55%',
        scrub: 0.3,
        markers: false
      },
      duration: 1.2,
      opacity: 0,
      y: 100,
      scale: 0.7,
      rotationX: 25,
      ease: 'back.out(1.5)',
      delay: index * 0.15
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
        start: 'top 95%',
        end: 'top 55%',
        scrub: 0.3,
        markers: false
      },
      duration: 1.2,
      opacity: 0,
      scale: 0.4,
      rotationZ: 25,
      ease: 'elastic.out(1.2, 0.8)',
      delay: (index % 3) * 0.2
    });

    // Aggressive hover effect
    img.addEventListener('mouseenter', () => {
      gsap.to(img, {
        duration: 0.3,
        scale: 1.15,
        ease: 'back.out(2)',
        boxShadow: '0 20px 60px rgba(206,27,45,.4)',
        overwrite: 'auto'
      });
    });

    img.addEventListener('mouseleave', () => {
      gsap.to(img, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out',
        boxShadow: '0 2px 8px rgba(0,0,0,.1)',
        overwrite: 'auto'
      });
    });
  });
}

function setupCTAAnimations(gsap, ScrollTrigger) {
  const ctaCutout = document.querySelector('[data-cta-cutout]');
  if (!ctaCutout) return;

  gsap.from(ctaCutout, {
    scrollTrigger: {
      trigger: ctaCutout.parentElement,
      start: 'top 85%',
      end: 'top 50%',
      scrub: 0.5,
      markers: false
    },
    duration: 1.8,
    opacity: 0,
    x: 400,
    scale: 0.5,
    rotationZ: 45,
    ease: 'back.out(1.8)'
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
        start: 'top 95%',
        end: 'top 65%',
        scrub: 0.4,
        markers: false
      },
      duration: 1.2,
      opacity: 0,
      y: 80,
      rotationX: 20,
      ease: 'back.out(1.5)',
      delay: index * 0.15
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}
