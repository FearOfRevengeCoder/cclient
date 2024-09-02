// main.js
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme');
    const settingsIcon = document.getElementById('settings-icon');
    const settingsMenu = document.getElementById('settings-menu');
    const closeSettings = document.getElementById('close-settings');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const snowfallContainer = document.getElementById('snowfall');

    themeSelect.addEventListener('change', function() {
        const theme = this.value;
        document.body.className = theme;
        document.querySelector('.container').className = `container ${theme}`;

        // Show snowfall for the "new-year-snow" theme
        if (theme === 'new-year-snow') {
            snowfallContainer.innerHTML = ''; // Clear previous snowflakes
            startSnowfall();
        } else {
            snowfallContainer.innerHTML = ''; // Clear snowflakes for other themes
        }
    });

    settingsIcon.addEventListener('click', function() {
        settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
    });

    closeSettings.addEventListener('click', function() {
        settingsMenu.style.display = 'none';
    });

    sidebarToggle.addEventListener('click', function() {
    sidebar.style.display = 'block';
        sidebar.classList.toggle('open');
        sidebarToggle.classList.toggle('open');
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('open');
        sidebarToggle.classList.remove('open');
    });

    document.querySelectorAll('.settings-sidebar li').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            document.querySelectorAll('.settings-section').forEach(sec => {
                sec.style.display = sec.id === section ? 'block' : 'none';
            });
        });
    });
    document.querySelectorAll('.sidebar-content li').forEach(item => {
            item.addEventListener('click', function() {
                const tab = this.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.toggle('active', content.id === tab);
                });
            });
        });
    function startSnowfall() {
        const snowfallCount = 200; // Number of snowflakes
        for (let i = 0; i < snowfallCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
            snowfallContainer.appendChild(snowflake);
        }
    }
});



