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


// function loadGiscus() {
//     const container = document.querySelector('.giscus');
//     if (!container) return;

//     const script = document.createElement('script');
//     script.src = "https://giscus.app/client.js";
//     // استبدل سطر data-theme بهذا السطر
// script.setAttribute('data-theme', "https://0xdya.github.io/d1wiki/css/giscus-theme.css");
//     script.setAttribute('data-repo', "0xdya/d1wiki");
//     script.setAttribute('data-repo-id', "R_kgDOPqo2eQ");
//     script.setAttribute('data-category', "General");
//     script.setAttribute('data-category-id', "DIC_kwDOPqo2ec4C7AlB"); 
//     script.setAttribute('data-mapping', "pathname");
//     script.setAttribute('data-strict', "1");
//     script.setAttribute('data-reactions-enabled', "0");
//     script.setAttribute('data-emit-metadata', "0");
//     script.setAttribute('data-input-position', "bottom");
    
//     // التعديل هنا: استخدام الثيم التلقائي المتوافق مع النظام
//     script.setAttribute('data-theme', "preferred_color_scheme");
    
//     script.setAttribute('data-lang', "ar");
//     script.setAttribute('crossorigin', "anonymous");
//     script.async = true;
    
//     container.appendChild(script);
// }

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', loadGiscus);
// } else {
//     loadGiscus();
// }