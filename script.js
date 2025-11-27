document.addEventListener('DOMContentLoaded', () => {
    // ---------------------- 1. SCROLL SPY LOGIC ----------------------
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.report-section, .authors-section');
    const stickyElement = document.querySelector('.justification-box');
    const mlMethodologySection = document.getElementById('ml-methodology');
    const mlCol = document.querySelector('.ml-col'); // The column containing the Pre-processing list
    const backToTopBtn = document.getElementById('backToTopBtn');

    const updateActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjusted for fixed navbar height
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) {
                a.classList.add('active');
            }
        });
    };

    // ---------------------- 2. STICKY JUSTIFICATION LOGIC ----------------------
    const handleStickyJustification = () => {
        if (stickyElement && mlMethodologySection && mlCol) {
            const mlTop = mlMethodologySection.offsetTop;
            const mlBottom = mlMethodologySection.offsetTop + mlMethodologySection.offsetHeight;
            const viewportTop = window.scrollY + 75; // 75px is space below navbar

            const container = mlMethodologySection.querySelector('.ml-subsections');
            if (!container) return;
            
            const stickyParent = stickyElement.parentElement;
            if (!stickyParent) return;

            // Calculate the bottom point where the sticky element should stop
            const stopPoint = container.offsetTop + container.offsetHeight - stickyElement.offsetHeight;

            if (viewportTop >= mlTop && window.scrollY < mlBottom) {
                // If within the ML section, make it fixed
                if (viewportTop < stopPoint) {
                    // CASE 1: Stick to the top of the viewport
                    stickyElement.style.position = 'fixed';
                    stickyElement.style.top = '75px'; 
                    stickyElement.style.width = stickyParent.offsetWidth + 'px';
                } else {
                    // CASE 2: Stick to the bottom of the container
                    stickyElement.style.position = 'absolute';
                    // Position relative to its parent (mlCol)
                    stickyElement.style.top = (stopPoint - stickyParent.offsetTop) + 'px'; 
                    stickyElement.style.width = stickyParent.offsetWidth + 'px';
                }
            } else {
                // CASE 3: Not in the ML section, revert to normal flow
                stickyElement.style.position = 'static';
                stickyElement.style.width = '100%'; 
            }
        }
    };
    
    // ---------------------- 3. FADE-IN ANIMATION LOGIC ----------------------
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // ---------------------- 4. BACK TO TOP LOGIC ----------------------
    window.onscroll = function() { 
        scrollFunction();
        updateActiveLink();
        handleStickyJustification();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });

    updateActiveLink(); // Initial check
    window.addEventListener('resize', () => {
        handleStickyJustification();
    });
});
