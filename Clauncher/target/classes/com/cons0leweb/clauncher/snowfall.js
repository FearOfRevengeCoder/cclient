document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.getElementById("snowfall");
  let snowEnabled = false;
  let snowflakesCount = 0;
  const maxSnowflakes = 100; // Максимальное количество снежинок

  // Создание снежинки
  const createSnowflake = () => {
    if (snowflakesCount >= maxSnowflakes) return;

    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Случайная позиция, длительность анимации и прозрачность
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = `${Math.random() * 0.8 + 0.2}`;

    // Добавление снежинки в контейнер
    snowContainer.appendChild(snowflake);
    snowflakesCount++;

    // Удаление снежинки после анимации
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
      snowflakesCount--;
    });
  };

  // Обновление снегопада в зависимости от выбранной темы
  const updateSnowfall = () => {
    const theme = document.getElementById("theme").value;
    snowEnabled = theme === "new-year-snow";
    snowContainer.style.display = snowEnabled ? "block" : "none";

    if (!snowEnabled) {
      snowContainer.innerHTML = ""; // Очистка контейнера от снежинок
      snowflakesCount = 0;
    }
  };

  // Слушатель событий для изменения темы
  document.getElementById("theme").addEventListener("change", updateSnowfall);

  // Инициализация снегопада
  updateSnowfall();

  // Создание новых снежинок с использованием requestAnimationFrame
  const animateSnowfall = () => {
    if (snowEnabled) {
      createSnowflake();
    }
    requestAnimationFrame(animateSnowfall);
  };

  // Запуск анимации снегопада
  animateSnowfall();
});