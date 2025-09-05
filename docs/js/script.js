        function toggleTheme() {
            const body = document.body;
            const icon = document.getElementById('theme-icon');
            
            if (body.classList.contains('light')) {
                body.classList.remove('light');
                icon.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.add('light');
                icon.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme');
            const icon = document.getElementById('theme-icon');
            
            if (savedTheme === 'light') {
                document.body.classList.add('light');
                icon.textContent = '☀️';
            }

            // Search functionality
            const searchInput = document.querySelector('.search-input');
            const searchBtn = document.querySelector('.search-btn');

            function search() {
                const query = searchInput.value.trim();
                if (query) {
                    console.log('البحث عن:', query);
                    // Add search logic here
                }
            }

            searchBtn.addEventListener('click', search);
            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    search();
                }
            });
        });