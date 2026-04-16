const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'blue') {
    body.classList.add('blue-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('blue-theme');
    
    if (body.classList.contains('blue-theme')) {
        localStorage.setItem('theme', 'blue');
    } else {
        localStorage.setItem('theme', 'black');
    }
});
