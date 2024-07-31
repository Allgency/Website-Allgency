function getStarted() {
    alert("Get started with Allgency!");
}

document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottieflow-chat-17-5-000000-easey.json'
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate heading
    const headingSpans = document.querySelectorAll('.animated-heading span');
    let delay = 0;
    
    function animateHeading() {
        headingSpans.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, delay);
            delay += 100;
        });

        setTimeout(() => {
            headingSpans.forEach(span => {
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
            });
            delay = 0;
            setTimeout(animateHeading, 500);
        }, delay + 1000);
    }

    animateHeading();
});

// Optionally, you can add form validation or other interactions
document.querySelector("form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Your message has been sent!");
});

