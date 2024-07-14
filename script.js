document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', function() {
            // Toggle active class for panel
            panels.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
})