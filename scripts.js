/* Place your JavaScript in this file */

/*Color Theme Switcher*/
const btn = document.getElementById('themeSwitcher');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;
const currentTheme = htmlElement.getAttribute('data-bs-theme');


function updateTheme(currentTheme) {
    if (currentTheme === 'dark') {
        // Switch to light mode
        htmlElement.setAttribute('data-bs-theme', 'light');        
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
    } else {
        // Switch to dark mode
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        
    }
};

btn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    
    if (!document.startViewTransition) {
        updateTheme(currentTheme);
        return;
    }
    
    document.startViewTransition(() => {
        updateTheme(currentTheme);
    });
});