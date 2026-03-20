(function () {
    function normalizeNav() {
        var nav = document.querySelector('.nav-buttons');
        if (!nav) return;

        // Move nav out of transformed slide containers to keep a stable viewport position.
        if (nav.parentElement !== document.body) {
            document.body.appendChild(nav);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', normalizeNav);
    } else {
        normalizeNav();
    }
})();
