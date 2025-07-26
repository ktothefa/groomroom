<<<<<<< HEAD
// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Scroll-triggered video playback
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.background-video');
    const servicesSection = document.getElementById('services');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play(); // Play video when section is visible
                } else {
                    video.pause(); // Pause video when section is out of view
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    observer.observe(servicesSection);
=======

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
>>>>>>> ff55985aa481a8c8077e6f4787f0c2d4b15dcad6
});