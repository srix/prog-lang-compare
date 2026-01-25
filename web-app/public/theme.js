// Dark Mode Toggle
(function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    function updateIcons(theme) {
        if (!sunIcon || !moonIcon) return;

        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
})();

// Mobile Menu Toggle
(function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function toggleMenu() {
        if (!sidebar || !overlay) return;
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        if (!sidebar || !overlay) return;
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close sidebar when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close sidebar when clicking a link on mobile
    if (sidebar) {
        sidebar.addEventListener('click', function (event) {
            if (event.target.tagName === 'A' && window.innerWidth <= 768) {
                closeMenu();
            }
        });
    }
})();
