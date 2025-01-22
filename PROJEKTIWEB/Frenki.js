        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

           // Timeline animation
        function revealTimeline() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight - 100) {
                    item.classList.add('visible');
                }
            });
        }


        // Scroll to top button
        const scrollButton = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
            revealTimeline();
        });
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });









