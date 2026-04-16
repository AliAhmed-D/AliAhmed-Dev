document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'all 0.9s ease-out';
        observer.observe(section);
    });

    const roleElement = document.querySelector('.role');
    if (roleElement) {
        const text = roleElement.innerText;
        roleElement.innerText = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                roleElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 120);
            }
        }
        typeWriter();
    }

    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});
