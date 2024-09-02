 document.addEventListener('DOMContentLoaded', () => {
            const lang = new URLSearchParams(window.location.search).get('lang') || 'en';
            const elements = document.querySelectorAll('[data-lang]');
            elements.forEach(el => {
                const key = el.getAttribute('data-lang');
                el.innerText = translations[lang][key] || el.innerText;
            });
        });

        const translations = {
            en: {
                launcher_title: 'Minecraft Launcher',
                about_title: 'About the Launcher',
                about_description: 'Our Minecraft launcher offers a unique experience with custom mods, textures, and servers. Download it now and explore new worlds!',
                download_link: 'Download Launcher',
                requirements_title: 'System Requirements',
                requirement_os: 'Operating System: Windows 10/8/7, macOS, Linux',
                requirement_processor: 'Processor: Intel Core i3 or equivalent',
                requirement_memory: 'Memory: 4 GB RAM',
                requirement_storage: 'Storage: 1 GB available space',
                features_title: 'Features',
                feature1_title: 'Custom Mods',
                feature1_description: 'Enhance your gameplay with our custom mods.',
                feature2_title: 'Unique Textures',
                feature2_description: 'Experience Minecraft with unique and beautiful textures.',
                feature3_title: 'Exclusive Servers',
                feature3_description: 'Join our exclusive servers for a unique multiplayer experience.'
            },
            ru: {
                launcher_title: 'Лаунчер Minecraft',
                about_title: 'О лаунчере',
                about_description: 'Наш лаунчер Minecraft предлагает уникальный опыт с кастомными модами, текстурами и серверами. Скачайте его сейчас и исследуйте новые миры!',
                download_link: 'Скачать Лаунчер',
                requirements_title: 'Системные Требования',
                requirement_os: 'Операционная система: Windows 10/8/7, macOS, Linux',
                requirement_processor: 'Процессор: Intel Core i3 или эквивалент',
                requirement_memory: 'Память: 4 ГБ ОЗУ',
                requirement_storage: 'Хранилище: 1 ГБ доступного места',
                features_title: 'Особенности',
                feature1_title: 'Кастомные Моды',
                feature1_description: 'Улучшите игровой процесс с нашими кастомными модами.',
                feature2_title: 'Уникальные Текстуры',
                feature2_description: 'Испытайте Minecraft с уникальными и красивыми текстурами.',
                feature3_title: 'Эксклюзивные Серверы',
                feature3_description: 'Присоединяйтесь к нашим эксклюзивным серверам для уникального мультиплеерного опыта.'
            }
        };
