document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".menu-tab");
    const contents = document.querySelectorAll(".tab-content-item");

    // Перемикання вкладок
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // ховаємо всі блоки
            contents.forEach(c => c.classList.remove("active"));
            tabs.forEach(t => t.classList.remove("active"));

            // показуємо потрібний
            tab.classList.add("active");
            const target = document.getElementById(tab.dataset.tab + "-content");
            target.classList.add("active");
        });
    });

    // Хрестик для закриття
    const closeButtons = document.querySelectorAll(".close-btn");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.classList.remove("active");
            // зняти активність з меню
            tabs.forEach(t => t.classList.remove("active"));
        });
    });

    // Функції для додавання фільмів
    function addMovieToLater(title) {
        const li = document.createElement("li");
        li.textContent = title;
        document.getElementById("later-list").appendChild(li);
    }

    function addMovieToWatched(title) {
        const li = document.createElement("li");
        li.textContent = title;
        document.getElementById("watched-list").appendChild(li);
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-input');
  const movieCards = document.querySelectorAll('.movie-card');

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();

    movieCards.forEach(card => {
      // беремо назву з data-title або з тексту
      const title = card.getAttribute('data-title')?.toLowerCase() || card.innerText.toLowerCase();

      if (title.includes(query)) {
        card.style.display = ""; // показати
      } else {
        card.style.display = "none"; // сховати
      }
    });
  });
});


